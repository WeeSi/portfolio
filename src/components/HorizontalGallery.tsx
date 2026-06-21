import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryLightbox from "#/components/GalleryLightbox";
import { DEFAULT_PHOTO_WIDTH, PHOTOS, type Photo } from "#/data/photos";
import { useLocomotive } from "#/hooks/LocomotiveContext";

gsap.registerPlugin(ScrollTrigger);

const TRACK_GAP = 16;
const TRACK_END_PADDING = 128;

type CardLayout = {
  offsets: number[];
  widths: number[];
  totalScroll: number;
};

function measureCards(
  cards: NodeListOf<HTMLElement>,
  pin: HTMLElement,
  track: HTMLElement,
): CardLayout {
  const offsets: number[] = [];
  const widths: number[] = [];
  let offset = 0;

  cards.forEach((card, i) => {
    offsets.push(offset);
    const w = card.offsetWidth;
    widths.push(w);
    offset += w + (i < cards.length - 1 ? TRACK_GAP : 0);
  });

  const totalScroll = Math.max(
    0,
    track.scrollWidth - pin.offsetWidth + TRACK_END_PADDING,
  );

  return { offsets, widths, totalScroll };
}

function currentCardIndex(
  scrollX: number,
  offsets: number[],
  widths: number[],
  viewWidth: number,
) {
  const focal = scrollX + viewWidth * 0.35;
  let cur = 1;
  for (let i = 0; i < offsets.length; i++) {
    if (offsets[i] + widths[i] * 0.5 <= focal) cur = i + 1;
  }
  return cur;
}

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { ready: locomotiveReady, instance } = useLocomotive();
  const [countLabel, setCountLabel] = useState(
    `01 / ${String(PHOTOS.length).padStart(2, "0")}`,
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!locomotiveReady) return;

    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !pin || !track || !bar) return;

    const sectionEl = section;
    const pinEl = pin;
    const trackEl = track;
    const cards = trackEl.querySelectorAll<HTMLElement>("[data-card]");
    let layout: CardLayout = { offsets: [], widths: [], totalScroll: 0 };

    function measure() {
      layout = measureCards(cards, pinEl, trackEl);
      sectionEl.style.height = `${window.innerHeight + layout.totalScroll}px`;
    }

    measure();

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionEl,
        scroller: document.documentElement,
        start: "top top",
        end: () => `+=${layout.totalScroll}`,
        pin: pinEl,
        pinSpacing: false,
        invalidateOnRefresh: true,
        onUpdate(self) {
          const x = -self.progress * layout.totalScroll;

          gsap.set(trackEl, { x });

          const viewCenter = pinEl.offsetWidth / 2;

          cards.forEach((card, i) => {
            const cardX = x + layout.offsets[i];
            const centerDist = cardX + layout.widths[i] / 2 - viewCenter;
            const rotY = gsap.utils.clamp(-12, 12, -centerDist * 0.02);
            const focus = gsap.utils.clamp(
              0,
              1,
              1 - Math.abs(centerDist) / (pinEl.offsetWidth * 0.55),
            );
            const frame = card.querySelector<HTMLElement>(".g-card-frame");

            if (frame) {
              gsap.set(frame, {
                scale: gsap.utils.mapRange(0, 1, 0.94, 1, focus),
                opacity: gsap.utils.mapRange(0, 1, 0.5, 1, focus),
              });
            }
          });

          bar!.style.width = `${self.progress * 100}%`;

          const cur = Math.min(
            currentCardIndex(
              self.progress * layout.totalScroll,
              layout.offsets,
              layout.widths,
              pinEl.offsetWidth,
            ),
            PHOTOS.length,
          );
          setCountLabel(
            `${String(cur).padStart(2, "0")} / ${String(PHOTOS.length).padStart(2, "0")}`,
          );
        },
        onLeaveBack() {
          gsap.to(trackEl, { x: 0, duration: 0.6, ease: "power3.out" });
          cards.forEach((c) => {
            gsap.to(c, { rotationY: 0, duration: 0.5 });
            const frame = c.querySelector<HTMLElement>(".g-card-frame");
            if (frame) {
              gsap.to(frame, { scale: 1, opacity: 1, duration: 0.5 });
            }
          });
        },
      });
    }, sectionEl);

    let refreshRaf = 0;
    let lastLayoutKey = "";

    function refreshLayout() {
      cancelAnimationFrame(refreshRaf);
      refreshRaf = requestAnimationFrame(() => {
        const layoutKey = `${trackEl.scrollWidth}-${pinEl.offsetWidth}`;
        if (
          layoutKey === lastLayoutKey &&
          layout.offsets.length === cards.length
        ) {
          return;
        }
        lastLayoutKey = layoutKey;
        measure();
        instance?.resize();
        ScrollTrigger.refresh();
      });
    }

    const resizeObserver = new ResizeObserver(refreshLayout);
    resizeObserver.observe(trackEl);

    window.addEventListener("resize", refreshLayout);

    requestAnimationFrame(refreshLayout);

    return () => {
      cancelAnimationFrame(refreshRaf);
      resizeObserver.disconnect();
      window.removeEventListener("resize", refreshLayout);
      ctx.revert();
      sectionEl.style.height = "";
    };
  }, [locomotiveReady, instance]);

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function onCardKeyDown(e: KeyboardEvent<HTMLDivElement>, index: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(index);
    }
  }

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="gallery-pin" ref={pinRef}>
        <header className="gallery-header">
          <div className="gallery-header-copy">
            <p className="gallery-label">Photographie</p>
            <h2 className="gallery-title">
              Le monde à travers
              <br />
              <em>mon objectif</em>
            </h2>
          </div>
          <p className="gallery-hint" aria-hidden="true">
            Faites défiler
            <span className="hint-arrow">→</span>
          </p>
        </header>

        <div className="gallery-track-wrap">
          <div className="gallery-track" ref={trackRef}>
            {PHOTOS.map((photo, index) => (
              <GalleryCard
                key={`${photo.img}-${index}`}
                photo={photo}
                index={index}
                onOpen={() => openLightbox(index)}
                onKeyDown={(e) => onCardKeyDown(e, index)}
              />
            ))}
          </div>
        </div>

        <div className="gallery-progress">
          <span className="gp-label">Galerie</span>
          <div className="gp-bar-wrap">
            <div className="gp-bar" ref={barRef} />
          </div>
          <div className="gp-count">{countLabel}</div>
        </div>
      </div>

      <GalleryLightbox
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}

type GalleryCardProps = {
  photo: Photo;
  index: number;
  onOpen: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
};

function GalleryCard({ photo, index, onOpen, onKeyDown }: GalleryCardProps) {
  const cardStyle = {
    width: `${photo.width ?? DEFAULT_PHOTO_WIDTH}px`,
  } as CSSProperties;

  return (
    <div
      className="g-card g-card-clickable"
      data-card
      style={cardStyle}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={onKeyDown}
    >
      <div className="g-card-frame">
        <div className="g-card-inner">
          {photo.type === "video" ? (
            <div className="g-card-media">
              <video loop muted playsInline autoPlay className="g-card-video">
                <source src={`/videos/${photo.img}`} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div
              className="g-card-media g-card-bg"
              style={{ backgroundImage: `url(/images/${photo.img})` }}
            />
          )}
          {photo.type === "video" ? (
            <span className="g-card-badge">Vidéo</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
