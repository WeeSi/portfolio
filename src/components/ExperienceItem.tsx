import { useCallback, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Experience } from "#/data/experiences";
import { useLocomotive } from "#/hooks/LocomotiveContext";
import ExperienceTags from "#/components/ExperienceTags";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

function refreshScroll(instance: ReturnType<typeof useLocomotive>["instance"]) {
  ScrollTrigger.refresh();
  instance?.resize();
}

export default function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const plusVRef = useRef<SVGLineElement>(null);
  const openRef = useRef(false);
  const { instance } = useLocomotive();

  const missions =
    experience.missions ??
    (experience.description ? [experience.description] : []);

  const openItem = useCallback(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    const plusV = plusVRef.current;
    if (!panel || !inner || !plusV) return;

    const missionEls = inner.querySelectorAll<HTMLElement>(".exp-missions li");

    gsap.killTweensOf([panel, plusV, ...missionEls]);

    openRef.current = true;
    setOpen(true);

    gsap.to(plusV, { rotate: 90, duration: 0.35, ease: "power2.inOut" });
    gsap.set(missionEls, { opacity: 0, y: 10 });

    gsap.to(panel, {
      height: inner.offsetHeight,
      duration: 0.5,
      ease: "power3.out",
      onComplete() {
        if (openRef.current) panel.style.height = "auto";
        refreshScroll(instance);
      },
    });

    gsap.to(missionEls, {
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
    if (openRef.current) closeItem();
    else openItem();
  }, [closeItem, openItem]);

  return (
    <div className={`exp-item gsap-fade${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="exp-row"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className="exp-num">0{index + 1}</span>
        <div className="exp-main">
          <div className="exp-company">{experience.company}</div>
          <div className="exp-role">{experience.role}</div>
        </div>
        <div className="exp-right">
          <span className="exp-period">{experience.period}</span>
          {experience.working && (
            <span className="exp-badge-live">En poste</span>
          )}
        </div>
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
      </button>
      <ExperienceTags
        tags={experience.tags}
        onLayoutChange={() => refreshScroll(instance)}
      />
      {missions.length > 0 && (
        <div className="exp-panel" ref={panelRef}>
          <div className="exp-panel-inner" ref={innerRef}>
            <ul className="exp-missions">
              {missions.map((mission, missionIndex) => (
                <li key={missionIndex}>{mission}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
