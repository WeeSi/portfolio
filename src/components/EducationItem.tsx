import { useCallback, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { EducationEntry } from "#/data/education";
import { useLocomotive } from "#/hooks/LocomotiveContext";

const HOVER_COLORS = [
  "#c85aaf",
  "#ff5722",
  "#1d9e75",
  "#5b8def",
  "var(--copper)",
];

type EducationItemProps = {
  entry: EducationEntry;
  index: number;
};

function refreshScroll(instance: ReturnType<typeof useLocomotive>["instance"]) {
  ScrollTrigger.refresh();
  instance?.resize();
}

export default function EducationItem({ entry, index }: EducationItemProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const plusVRef = useRef<SVGLineElement>(null);
  const openRef = useRef(false);
  const { instance } = useLocomotive();

  const hasPanel = Boolean(entry.description || entry.highlights?.length);
  const hoverColor = HOVER_COLORS[index % HOVER_COLORS.length];

  const openItem = useCallback(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    const plusV = plusVRef.current;
    if (!panel || !inner || !plusV) return;

    const detailEls = inner.querySelectorAll<HTMLElement>(".exp-missions li");

    gsap.killTweensOf([panel, plusV, ...detailEls]);

    openRef.current = true;
    setOpen(true);

    gsap.to(plusV, { rotate: 90, duration: 0.35, ease: "power2.inOut" });
    gsap.set(detailEls, { opacity: 0, y: 10 });

    gsap.to(panel, {
      height: inner.offsetHeight,
      duration: 0.5,
      ease: "power3.out",
      onComplete() {
        if (openRef.current) panel.style.height = "auto";
        refreshScroll(instance);
      },
    });

    gsap.to(detailEls, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      delay: 0.12,
      ease: "power2.out",
    });
  }, [instance]);

  const closeItem = useCallback(() => {
    const panel = panelRef.current;
    const plusV = plusVRef.current;
    if (!panel || !plusV) return;

    gsap.killTweensOf([panel, plusV]);

    openRef.current = false;
    setOpen(false);

    panel.style.height = `${panel.offsetHeight}px`;
    gsap.to(plusV, { rotate: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(panel, {
      height: 0,
      duration: 0.4,
      ease: "power3.inOut",
      onComplete() {
        refreshScroll(instance);
      },
    });
  }, [instance]);

  const toggle = useCallback(() => {
    if (!hasPanel) return;
    if (openRef.current) closeItem();
    else openItem();
  }, [closeItem, hasPanel, openItem]);

  const displayTitle =
    entry.kind === "school" && entry.title === entry.institution
      ? entry.institution
      : entry.title;

  return (
    <div
      className={`exp-item edu-item gsap-fade edu-item--${index}${open ? " is-open" : ""}`}
      style={{ "--edu-color": hoverColor } as React.CSSProperties}
    >
      <button
        type="button"
        className="exp-row"
        aria-expanded={hasPanel ? open : undefined}
        onClick={toggle}
        disabled={!hasPanel}
      >
        <span className="exp-num">0{index + 1}</span>
        <div className="exp-main">
          <div className="exp-company">{entry.institution}</div>
          <div className="exp-role">
            {entry.subtitle
              ? `${entry.subtitle} · ${displayTitle}`
              : displayTitle}
          </div>
        </div>
        <div className="exp-right">
          <span className="exp-period">{entry.period}</span>
        </div>
        {hasPanel && (
          <span className="exp-toggle" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="12" height="12">
              <line
                ref={plusVRef}
                x1="6"
                y1="1"
                x2="6"
                y2="11"
                stroke="currentColor"
                strokeWidth="1"
                className="exp-toggle-v"
              />
              <line
                x1="1"
                y1="6"
                x2="11"
                y2="6"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </span>
        )}
      </button>
      {hasPanel && (
        <div className="exp-panel" ref={panelRef}>
          <div className="exp-panel-inner" ref={innerRef}>
            {entry.description && (
              <>
                <p className="edu-description">{entry.description}</p>
              </>
            )}
            {entry.highlights && entry.highlights.length > 0 && (
              <>
                <ul className="exp-missions">
                  {entry.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>
                      {entry.link && highlight.includes("Next Music") ? (
                        <>
                          Travail en groupe (
                          <a
                            href={entry.link}
                            target="_blank"
                            rel="noreferrer"
                            className="edu-link"
                          >
                            Next Music
                          </a>
                          )
                        </>
                      ) : (
                        highlight
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
