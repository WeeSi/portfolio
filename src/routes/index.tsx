import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../data/projects";
import { useCurtainRef } from "../hooks/CurtainContext";
import { useCurtain } from "../hooks/useCurtain";
import { useLocomotive } from "../hooks/LocomotiveContext";
import HorizontalGallery from "#/components/HorizontalGallery";
import Music from "#/components/Music";
import { markLeavingHome, peekHomeReturn } from "../lib/homeRestore";
import EducationItem from "#/components/EducationItem";
import ExperienceItem from "#/components/ExperienceItem";
import { EDUCATION_COUNT, SCHOOL, SEMINARS } from "#/data/education";
import { EXPERIENCES } from "#/data/experiences";
import { PROFILE } from "#/data/profile";

gsap.registerPlugin(ScrollTrigger);

const LINKEDIN_URL = "https://www.linkedin.com/in/franck-ehui-386505170/";
const GITHUB_URL = "https://github.com/WeeSi";

const REVEAL_SELECTORS = [
  ".gsap-reveal",
  ".gsap-reveal-left",
  ".gsap-reveal-scale",
];

let homeEntrancePlayed = false;

function clearRevealInlineStyles() {
  for (const sel of REVEAL_SELECTORS) {
    gsap.utils.toArray<Element>(sel).forEach((el) => {
      gsap.killTweensOf(el);
      gsap.set(el, { clearProps: "opacity,transform" });
    });
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `Franck Ehui — ${PROFILE.tagline} · Lyon`,
      },
      {
        name: "description",
        content: `Portfolio de Franck Ehui, ${PROFILE.tagline.toLowerCase()} basé à Lyon. ${PROFILE.stack}, recherche vectorielle et pipelines Elasticsearch.`,
      },
      {
        property: "og:title",
        content: `Franck Ehui — ${PROFILE.tagline}`,
      },
      {
        property: "og:description",
        content: `Portfolio de Franck Ehui — ${PROFILE.tagline}. ${PROFILE.stack}.`,
      },
      { property: "og:url", content: "https://franckehui.dev" },
      { property: "og:type", content: "website" },
      {
        property: "twitter:title",
        content: `Franck Ehui — ${PROFILE.tagline}`,
      },
    ],
  }),
  component: HomePage,
});

// Shared curtain ref comes from root via context — but we pass it via prop pattern
// We grab it from the global curtain overlay directly
function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const curtainRef = useCurtainRef();
  const { rise, fall } = useCurtain(curtainRef);
  const { ready: locomotiveReady, getScroll, instance } = useLocomotive();
  const [restored, setRestored] = useState(() => peekHomeReturn());

  useLayoutEffect(() => {
    const els = curtainRef.current?.querySelectorAll(".curtain-strip");

    if (els?.length) {
      gsap.set(els, {
        backgroundColor: "var(--accent)",
        scaleY: 1,
        transformOrigin: "top center",
      });
    }

    if (!peekHomeReturn()) {
      fall();
      return;
    }

    setRestored(true);
    gsap.set("#main-nav", { opacity: 1, y: 0, clearProps: "transform" });
    clearRevealInlineStyles();
  }, [curtainRef, fall]);

  // GSAP entrance — skipped when returning from a project
  useEffect(() => {
    if (restored || !locomotiveReady) return;

    const isFirstVisit = !homeEntrancePlayed;
    homeEntrancePlayed = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (isFirstVisit) {
        tl.from("#main-nav", { y: -20, opacity: 0, duration: 0.7 }, 0);
      } else {
        gsap.set("#main-nav", { opacity: 1, y: 0 });
      }
      tl.from(
        "#heroName",
        { y: 60, opacity: 0, duration: 1.1, ease: "power4.out" },
        0.1,
      )
        .from("#heroSocials", { x: -20, opacity: 0, duration: 0.8 }, 0.55)
        .from(".hero-tag", { y: 20, opacity: 0, duration: 0.7 }, 0.6)
        .from("#heroTagline", { y: 30, opacity: 0, duration: 0.7 }, 0.5)
        .from(".hero-stack", { y: 20, opacity: 0, duration: 0.6 }, 0.65)
        .from(".download-cv-btn", { y: 15, opacity: 0, duration: 0.6 }, 0.8)
        .from(".hero-avail", { y: 15, opacity: 0, duration: 0.6 }, 0.9);

      function reveal(sel: string, vars: Record<string, number> = {}) {
        gsap.utils.toArray<Element>(sel).forEach((el, i) => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: vars.y ?? 40,
              x: vars.x ?? 0,
              scale: vars.scale ?? 1,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              duration: vars.duration ?? 0.9,
              ease: "power3.out",
              delay: i * (vars.stagger ?? 0.08),
              immediateRender: false,
              scrollTrigger: {
                trigger: el as Element,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        });
      }

      reveal(".gsap-reveal");
      reveal(".gsap-reveal-left", { x: -40, y: 0 });
      reveal(".gsap-reveal-scale", { scale: 0.88, y: 20, stagger: 0.07 });
    });

    instance?.resize();
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [restored, locomotiveReady, instance]);

  function goToProject(slug: string) {
    instance?.stop();
    markLeavingHome(getScroll);
    rise(() => navigate({ to: "/projects/$slug", params: { slug } }));
  }

  return (
    <main className={restored ? "home-restored" : undefined}>
      {/* ─── HERO ─── */}
      <section id="hero" ref={heroRef}>
        <div className="hero-name-row" id="heroName">
          Franck&nbsp;Ehui
        </div>

        <div className="hero-bottom-bar">
          <div className="hero-tag">
            <div className="hero-socials" id="heroSocials">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-roles" id="heroRoles">
            <div className="hero-tagline" id="heroTagline">
              {PROFILE.tagline}
            </div>
            <div className="hero-actions">
              <a
                href={PROFILE.cvPath}
                download
                className="download-cv-btn cs-btn"
              >
                CV ↓
              </a>
            </div>
            {import.meta.env.VITE_APP_SHOW_AVAILABLE_FOR_WORK && (
              <div className="hero-avail">
                <div className="avail-dot" />
                &nbsp;Available for work
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[
            "Vue.js",
            "React",
            "Angular",
            "Ionic",
            "PHP",
            "MongoDB",
            "Node.js",
            "Redis",
            "WebSockets",
            "PWA",
            "Stripe",
            "Google Cloud Storage",
            "TipTap",
            "Swagger / OpenAPI",
            "SQL",
            "CI/CD",
          ].flatMap((t, i) => [
            <span key={`a${i}`} className="mq-item">
              {i % 2 === 0 ? <b>{t}</b> : t}
            </span>,
            <div key={`s${i}`} className="mq-sep" />,
          ])}
          {[
            "Vue.js",
            "React",
            "Angular",
            "Ionic",
            "PHP",
            "MongoDB",
            "Node.js",
            "Redis",
            "WebSockets",
            "PWA",
            "Stripe",
            "Google Cloud Storage",
            "TipTap",
            "Swagger / OpenAPI",
            "SQL",
            "CI/CD",
          ].flatMap((t, i) => [
            <span key={`b${i}`} className="mq-item">
              {i % 2 === 0 ? <b>{t}</b> : t}
            </span>,
            <div key={`c${i}`} className="mq-sep" />,
          ])}
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <section id="about">
        <div className="gsap-reveal">
          <div className="about-num">— 01</div>
          <h2 className="about-title">
            Le code comme
            <br />
            moyen d&apos;<em>expression.</em>
          </h2>
          <p className="about-intro">
            Impact mesurable sur la recherche et les pipelines de données.
          </p>
          <div className="stats-row">
            <div className="stat gsap-reveal-scale">
              <div className="n">7+</div>
              <div className="l">Ans d'expérience</div>
            </div>
            <div className="stat gsap-reveal-scale">
              <div className="n">15+</div>
              <div className="l">Projets livrés</div>
            </div>
            <div className="stat gsap-reveal-scale">
              <div className="n">∞</div>
              <div className="l">Curiosité</div>
            </div>
          </div>
        </div>
        <div
          className="about-body gsap-reveal"
          style={{ paddingTop: "3.5rem" }}
        >
          <p>
            Développeur <strong>Fullstack</strong> basé à Lyon, je conçois et
            construis des produits numériques du premier wireframe au
            déploiement en production.
          </p>
          <p>
            Mon approche : architecture propre, interfaces soignées, et une
            attention constante à <strong>l&apos;expérience utilisateur</strong>
            .
          </p>
          <p>
            Quand je ne code pas, je veille aux dernières tendances du web et
            contribue à l&apos;open-source.
          </p>
        </div>
      </section>

      <section id="experience">
        <div className="work-header gsap-reveal">
          <div>
            <div className="about-num">— 02</div>
            <h2 className="work-title">Expériences</h2>
          </div>
          <span className="work-count">0{EXPERIENCES.length} expériences</span>
        </div>
        <div className="exp-list">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </section>

      <section id="education">
        <div className="work-header gsap-reveal">
          <div>
            <div className="about-num">— 03</div>
            <h2 className="work-title">Formation</h2>
          </div>
          <span className="work-count">0{EDUCATION_COUNT} formations</span>
        </div>

        <h3 className="edu-subtitle gsap-fade">Séminaires</h3>
        <div className="edu-list">
          {SEMINARS.map((entry, index) => (
            <EducationItem
              key={`seminar-${index}`}
              entry={entry}
              index={index}
            />
          ))}
        </div>

        <h3 className="edu-subtitle gsap-fade">Parcours scolaire</h3>
        <div className="edu-list">
          {SCHOOL.map((entry, index) => (
            <EducationItem
              key={`school-${index}`}
              entry={entry}
              index={SEMINARS.length + index}
            />
          ))}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills">
        <div className="skills-top gsap-reveal">
          <div>
            <div className="about-num">— 04</div>
            <h2>Mon stack</h2>
          </div>

          <p style={{ paddingTop: "30px" }}>
            Les outils que j&apos;utilise quotidiennement pour construire des
            produits de qualité.
          </p>
        </div>
        <div className="skills-list">
          {[
            { icon: "⚛", name: "React", cat: "Frontend" },
            { icon: "▲", name: "Next.js", cat: "Fullstack" },
            { icon: "𝐓𝐒", name: "TypeScript", cat: "Language" },
            { icon: "⬡", name: "Node.js", cat: "Backend" },
            { icon: "🐘", name: "PostgreSQL", cat: "Database" },
            { icon: "🐍", name: "Python", cat: "Backend" },
            { icon: "🌐", name: "DigitalOcean", cat: "DevOps" },
            { icon: "☁", name: "GCP", cat: "Cloud" },
          ].map((s) => (
            <div key={s.name} className="skill-item gsap-reveal-scale">
              <div className="sk-icon">{s.icon}</div>
              <div className="sk-name">{s.name}</div>
              <div className="sk-cat">{s.cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WORK ─── */}
      <section id="work">
        <div className="work-header gsap-reveal">
          <div>
            <div className="about-num">— 05</div>
            <h2 className="work-title">Projets sélectionnés</h2>
          </div>

          <span className="work-count">
            {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}{" "}
            projets
          </span>
        </div>
        {PROJECTS.map((p, index) => (
          <div
            key={p.slug}
            className="project-row gsap-reveal"
            onClick={() => goToProject(p.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goToProject(p.slug)}
          >
            <div className="pr-num">
              {index < 9 ? `0${index + 1}` : index + 1}
            </div>
            <div className="pr-info">
              <div className="pr-name">{p.title}</div>
              <div className="pr-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="exp-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pr-year">{p.year}</div>
            <div className="pr-arrow">→</div>
          </div>
        ))}
      </section>

      <section
        id="music"
        className="gsap-reveal music-section data-scroll-section"
      >
        <div className="music-container gsap-reveal">
          <div>
            <p className="gallery-label" style={{ textAlign: "left" }}>
              <span className="about-num">— 06</span> <span>Musique</span>
            </p>
            <h3 className="music-title">
              Les sons qui nourrissent
              <br />
              <em>ma créativité</em>
            </h3>
          </div>
        </div>
        <Music />
      </section>

      <HorizontalGallery />

      {/* ─── CONTACT ─── */}
      <section id="contact">
        <div className="contact-bg">
          <span className="contact-bg-text">HELLO</span>
        </div>
        <div className="eyebrow gsap-reveal">Nouvelle aventure</div>
        <h2 className="gsap-reveal">
          Travaillons
          <br />
          <em>ensemble.</em>
        </h2>
        <p className="contact-sub gsap-reveal">
          Un projet, une mission freelance, ou juste une conversation — je suis
          toujours partant.
        </p>
        <div className="contact-actions gsap-reveal">
          <a
            href="mailto:franckehuipro@gmail.com"
            className="btn-main btn-fill"
          >
            franckehuipro@gmail.com
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-main btn-ghost"
          >
            LinkedIn →
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-main btn-ghost"
          >
            GitHub →
          </a>
          <a href={PROFILE.cvPath} download className="btn-main btn-ghost">
            CV ↓
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <span className="f-left">© 2026 Franck Ehui</span>
        <div className="f-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE.cvPath} download>
            CV
          </a>
          <a href="#hero">↑ Top</a>
        </div>
      </footer>
    </main>
  );
}
