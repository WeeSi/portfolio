import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { useLocomotive } from "#/hooks/LocomotiveContext";

export type LightboxItem = {
  src: string;
  alt?: string;
  type?: "image" | "video";
};

type ImageLightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  ariaLabel?: string;
};

export default function ImageLightbox({
  items,
  index,
  onClose,
  onIndexChange,
  ariaLabel = "Galerie",
}: ImageLightboxProps) {
  const { instance } = useLocomotive();
  const isOpen = index !== null;
  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const openRef = useRef(false);
  const indexRef = useRef(index);

  indexRef.current = index;

  const resumeScroll = useCallback(() => {
    instance?.start();
    document.body.style.overflow = "";
  }, [instance]);

  const pauseScroll = useCallback(() => {
    instance?.stop();
    document.body.style.overflow = "hidden";
  }, [instance]);

  const close = useCallback(() => {
    if (!openRef.current) return;

    tlRef.current?.kill();
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    const closeBtn = closeRef.current;
    const mediaWrap = mediaWrapRef.current;
    if (!panel || !backdrop || !closeBtn) return;

    tlRef.current = gsap.timeline({
      onComplete: () => {
        openRef.current = false;
        resumeScroll();
        const video = mediaWrap?.querySelector("video");
        video?.pause();
        onClose();
      },
    });

    tlRef.current
      .to(
        panel,
        {
          clipPath: "inset(50% 50% 50% 50% round 20px)",
          opacity: 0,
          scale: 0.96,
          duration: 0.45,
          ease: "power3.in",
        },
        0,
      )
      .to(mediaWrap, { opacity: 0, duration: 0.25, ease: "power2.in" }, 0)
      .to(closeBtn, { opacity: 0, duration: 0.2 }, 0)
      .to(
        backdrop,
        {
          opacity: 0,
          backdropFilter: "blur(0px)",
          duration: 0.4,
          ease: "power2.in",
        },
        0,
      );
  }, [onClose, resumeScroll]);

  const switchTo = useCallback(
    (newIndex: number, dir: number) => {
      const mediaWrap = mediaWrapRef.current;
      if (!mediaWrap) {
        onIndexChange(newIndex);
        return;
      }

      const exitX = dir > 0 ? -40 : 40;
      const enterX = dir > 0 ? 40 : -40;
      const video = mediaWrap.querySelector("video");
      video?.pause();

      gsap
        .timeline()
        .to(mediaWrap, {
          opacity: 0,
          x: exitX,
          duration: 0.22,
          ease: "power2.in",
        })
        .call(() => {
          onIndexChange(newIndex);
        })
        .set(mediaWrap, { x: enterX })
        .to(mediaWrap, {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: "power3.out",
        })
        .call(() => {
          const nextVideo = mediaWrap.querySelector("video");
          nextVideo?.play().catch(() => {});
        });
    },
    [onIndexChange],
  );

  const goNext = useCallback(() => {
    if (indexRef.current === null || items.length === 0) return;
    switchTo((indexRef.current + 1) % items.length, 1);
  }, [items.length, switchTo]);

  const goPrev = useCallback(() => {
    if (indexRef.current === null || items.length === 0) return;
    switchTo((indexRef.current - 1 + items.length) % items.length, -1);
  }, [items.length, switchTo]);

  useEffect(() => {
    if (index === null) return;

    openRef.current = true;
    pauseScroll();

    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    const closeBtn = closeRef.current;
    const mediaWrap = mediaWrapRef.current;
    if (!panel || !backdrop || !closeBtn || !mediaWrap) return;

    gsap.set(panel, {
      clipPath: "inset(50% 50% 50% 50% round 20px)",
      opacity: 0,
      scale: 1,
    });
    gsap.set(mediaWrap, { opacity: 1, x: 0 });
    gsap.set(closeBtn, { opacity: 0 });
    gsap.set(backdrop, { opacity: 0 });

    tlRef.current?.kill();
    tlRef.current = gsap.timeline();

    tlRef.current
      .to(
        backdrop,
        {
          opacity: 0.92,
          backdropFilter: "blur(16px)",
          duration: 0.4,
          ease: "power2.out",
        },
        0,
      )
      .to(
        panel,
        {
          clipPath: "inset(0% 0% 0% 0% round 20px)",
          opacity: 1,
          duration: 0.65,
          ease: "power4.out",
        },
        0.05,
      )
      .to(closeBtn, { opacity: 1, duration: 0.3 }, 0.4)
      .call(() => {
        const video = mediaWrap.querySelector("video");
        video?.play().catch(() => {});
      });

    return () => {
      tlRef.current?.kill();
    };
  }, [index, pauseScroll]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, goNext, goPrev]);

  useEffect(() => {
    return () => {
      if (openRef.current) resumeScroll();
    };
  }, [resumeScroll]);

  if (!isOpen || index === null || typeof document === "undefined") {
    return null;
  }

  const item = items[index];
  if (!item) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="gallery-lb"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div ref={backdropRef} className="gallery-lb-backdrop" onClick={close} />
      <div ref={panelRef} className="gallery-lb-panel">
        <div ref={mediaWrapRef} className="gallery-lb-media-wrap">
          {item.type === "video" ? (
            <video
              key={item.src}
              className="gallery-lb-media"
              playsInline
              src={item.src}
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              key={item.src}
              className="gallery-lb-media"
              src={item.src}
              alt={item.alt ?? ""}
            />
          )}
        </div>
      </div>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="gallery-lb-btn gallery-lb-prev"
            onClick={goPrev}
            aria-label="Image précédente"
          >
            ←
          </button>
          <button
            type="button"
            className="gallery-lb-btn gallery-lb-next"
            onClick={goNext}
            aria-label="Image suivante"
          >
            →
          </button>
        </>
      )}
      <button
        ref={closeRef}
        type="button"
        className="gallery-lb-close"
        onClick={close}
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>,
    document.body,
  );
}
