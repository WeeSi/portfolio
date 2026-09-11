import { createFileRoute, useNavigate, notFound } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import ArchitectureDiagram from "../../components/project/ArchitectureDiagram";
import ProjectGallery from "../../components/project/ProjectGallery";
import { PROJECTS, getProject, type ProjectSection } from "../../data/projects";
import { useCurtainRef } from "../../hooks/CurtainContext";
import { useCurtain } from "../../hooks/useCurtain";
import { markHomeReturn } from "../../lib/homeRestore";
import { resolveProjectSections } from "../../lib/resolveProjectSections";

const SCROLL_SPY_OFFSET = -250;

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Franck Ehui` },
        { name: "description", content: p.subtitle },
        { property: "og:title", content: `${p.title} — Franck Ehui` },
        { property: "og:description", content: p.subtitle },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `https://franckehui.dev/projects/${p.slug}`,
        },
        { property: "twitter:title", content: `${p.title} — Franck Ehui` },
        { property: "twitter:description", content: p.subtitle },
      ],
    };
  },
  component: ProjectPage,
});

function padNum(n: number, total: number) {
  const w = total >= 10 ? 2 : 1;
  return String(n).padStart(w, "0");
}

function ProjectSectionContent({
  section,
  index,
}: {
  section: ProjectSection;
  index: number;
}) {
  const num = padNum(index + 1, 9);

  return (
    <section id={section.id} className="cs-section">
      <div className="cs-section__head">
        <span className="cs-section__num">§ {num}</span>
        <h2>{section.title}</h2>
      </div>

      {section.lede && (
        <p
          className="cs-lede"
          dangerouslySetInnerHTML={{ __html: section.lede }}
        />
      )}

      {section.quote && (
        <blockquote className="cs-quote">
          {section.quote.text}
          <span>{section.quote.attribution}</span>
        </blockquote>
      )}

      {section.diagram && <ArchitectureDiagram />}

      {section.stackGroups && (
        <div className="cs-stack-groups">
          {section.stackGroups.map((group) => (
            <div key={group.label}>
              <div className="cs-stack-group__label">{group.label}</div>
              <div className="cs-badges">
                {group.badges.map((badge) => (
                  <span key={badge} className="cs-badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.features && (
        <div className="cs-features">
          {section.features.map((feature, i) => (
            <div key={feature.title} className="cs-feature">
              <span className="cs-feature__num">{padNum(i + 1, 9)}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      )}

      {section.html && (
        <div
          className="cs-section__html"
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      )}
    </section>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const curtainRef = useCurtainRef();
  const { rise, fall } = useCurtain(curtainRef);
  const [activeSection, setActiveSection] = useState<string>("");

  const nextIdx =
    (PROJECTS.findIndex((p) => p.slug === project.slug) + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIdx];
  const id = PROJECTS.findIndex((p) => p.slug === project.slug) + 1;
  const sections = useMemo(() => resolveProjectSections(project), [project]);
  const galleryImages = project.images ?? [];
  const showGalleryStart =
    galleryImages.length > 0 && project.imagesPosition === "start";
  const showGalleryEnd =
    galleryImages.length > 0 && project.imagesPosition !== "start";

  useEffect(() => {
    fall();

    if (pageRef.current) {
      const els = pageRef.current.querySelectorAll<HTMLElement>(
        ".cs-utility, .cs-hero__left, .cs-hero__media, .cs-meta, .cs-layout, .cs-next",
      );
      gsap.fromTo(
        els,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.35,
        },
      );
    }
  }, [project.slug, fall]);

  useEffect(() => {
    if (!sections.length) return;

    const sectionIds = sections.map((s) => s.id);

    function updateActiveSection() {
      const scrollPos = window.scrollY + SCROLL_SPY_OFFSET;
      let current = sectionIds[0];

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cs-section--in-view");
          }
        });
      },
      { threshold: 0.15 },
    );

    const sectionEls = pageRef.current?.querySelectorAll(".cs-section");
    sectionEls?.forEach((section) => revealObserver.observe(section));

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [project.slug, sections]);

  const handleTocClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (!el) return;

      window.scrollTo({
        top: el.offsetTop - SCROLL_SPY_OFFSET,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    },
    [],
  );

  function navigateWithCurtain(slug: string) {
    rise(() => navigate({ to: "/projects/$slug", params: { slug } }), {
      riseDuration: 0.45,
      riseEase: "power3.in",
      staggerEach: 0.05,
    });
  }

  function goBack() {
    rise(() => {
      markHomeReturn();
      navigate({ to: "/" });
    });
  }

  return (
    <div className="cs-page" ref={pageRef}>
      <div className="cs-utility">
        <button type="button" className="cs-back" onClick={goBack}>
          ← Retour
        </button>
        <span className="cs-utility__crumb">{project.title}</span>
        <span className="cs-utility__count">
          {padNum(id, PROJECTS.length)} /{" "}
          {padNum(PROJECTS.length, PROJECTS.length)}
        </span>
      </div>

      <header className="cs-hero">
        <div className="cs-hero__grid">
          <div className="cs-hero__left">
            <div className="cs-hero__eyebrow">
              {padNum(id, PROJECTS.length)}
            </div>
            <h1 className="cs-hero__title">{project.title}</h1>
            <p className="cs-hero__desc">{project.subtitle}</p>
            <div className="cs-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="exp-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="cs-hero__links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cs-btn"
                >
                  Voir le projet →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cs-btn"
                >
                  Github →
                </a>
              )}
            </div>
          </div>
          <div className="cs-hero__media">
            {project.video ? (
              <video
                src={`/videos/${project.video}`}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : project.image ? (
              <img src={`/images/${project.image}`} alt={project.title} />
            ) : null}
          </div>
        </div>
      </header>

      <div className="cs-meta">
        <div className="cs-meta__grid">
          <div className="cs-meta__cell">
            <div className="cs-meta__label">Rôle</div>
            <div className="cs-meta__value">{project.role}</div>
          </div>
          <div className="cs-meta__cell">
            <div className="cs-meta__label">Année</div>
            <div className="cs-meta__value">{project.year}</div>
          </div>
          <div className="cs-meta__cell">
            <div className="cs-meta__label">Durée</div>
            <div className="cs-meta__value">{project.duration}</div>
          </div>
        </div>
      </div>

      <div className="cs-layout">
        {sections.length > 0 && (
          <aside className="cs-toc">
            <div className="cs-toc__line">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`cs-toc__item${activeSection === section.id ? " cs-toc__item--active" : ""}`}
                  onClick={(e) => handleTocClick(e, section.id)}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </aside>
        )}

        <main className="cs-content">
          {showGalleryStart && (
            <ProjectGallery images={galleryImages} title={project.title} />
          )}

          {sections.map((section, i) => (
            <ProjectSectionContent
              key={section.id}
              section={section}
              index={i}
            />
          ))}

          {showGalleryEnd && (
            <ProjectGallery images={galleryImages} title={project.title} />
          )}
        </main>
      </div>

      <footer
        className="cs-next"
        onClick={() => navigateWithCurtain(nextProject.slug)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          e.key === "Enter" && navigateWithCurtain(nextProject.slug)
        }
      >
        <div className="cs-next__label">Projet suivant</div>
        <div className="cs-next__title">
          <span>{nextProject.title}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </footer>
    </div>
  );
}
