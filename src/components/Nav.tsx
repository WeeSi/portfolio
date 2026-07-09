"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLocomotive } from "../hooks/LocomotiveContext";

interface NavProps {
  curtainRef: React.RefObject<HTMLDivElement | null>;
}

const NAV_LINKS = [
  { label: "À propos", id: "about", num: "01" },
  { label: "Expériences", id: "experience", num: "02" },
  { label: "Stack", id: "skills", num: "03" },
  { label: "Projets", id: "work", num: "04" },
  { label: "Passions", id: "music", num: "05" },
  { label: "Contact", id: "contact", num: "06" },
] as const;

const NAV_LINKS_LEFT = NAV_LINKS.slice(0, 3);
const NAV_LINKS_RIGHT = NAV_LINKS.slice(3);

const NAV_OPEN_CLASS = "is-nav-open";

const LINKEDIN_URL = "https://www.linkedin.com/in/franck-ehui-386505170/";
const GITHUB_URL = "https://github.com/WeeSi";
const EMAIL = "franckehuipro@gmail.com";

const DRAWER_LINKS = [
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { label: EMAIL, href: `mailto:${EMAIL}`, external: false },
] as const;

const SHOW_AVAILABLE = import.meta.env.VITE_APP_SHOW_AVAILABLE_FOR_WORK;

function useLocalClock(city: string, timeZone: string) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    function update() {
      const formatted = new Date().toLocaleTimeString("fr-FR", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setLabel(`${city} — ${formatted}`);
    }

    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, [city, timeZone]);

  return label;
}

export default function Nav({ curtainRef: _curtainRef }: NavProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollTo } = useLocomotive();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);
  const clock = useLocalClock("Lyon", "Europe/Paris");

  function scrollToSection(id: string) {
    if (pathname === "/") {
      scrollTo(`#${id}`);
      return;
    }
    window.location.href = `/#${id}`;
  }

  const setMenu = useCallback((open: boolean) => {
    menuOpenRef.current = open;
    setMenuOpen(open);
    document.body.classList.toggle(NAV_OPEN_CLASS, open);
  }, []);

  const closeMenu = useCallback(() => {
    if (!menuOpenRef.current) return;
    setMenu(false);
  }, [setMenu]);

  const openMenu = useCallback(() => {
    if (menuOpenRef.current) return;
    setMenu(true);
  }, [setMenu]);

  const toggleMenu = useCallback(() => {
    if (menuOpenRef.current) closeMenu();
    else openMenu();
  }, [closeMenu, openMenu]);

  function handleNavClick(id: string) {
    scrollToSection(id);
    closeMenu();
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpenRef.current) closeMenu();
    }

    function onResize() {
      if (window.innerWidth > 1070 && menuOpenRef.current) closeMenu();
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove(NAV_OPEN_CLASS);
    };
  }, [closeMenu]);

  return (
    <>
      <nav id="main-nav">
        <div className="logo flex items-center gap-2">
          <a
            href="#hero"
            className="logo-ring"
            aria-label="Franck Ehui — accueil"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <div className="logo-inner">
              <img
                className="w-10 h-10 rounded-full object-cover border border-white/10"
                src="/images/me.jpg"
                alt="Franck Ehui"
              />
            </div>
          </a>
        </div>

        <div className="nav-r">
          <ThemeSwitcher />
          <button
            type="button"
            className={`nav-menu__toggle${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-drawer"
            onClick={toggleMenu}
          >
            <span className="nav-menu__toggle-text" aria-hidden>
              <span className="nav-menu__toggle-track">
                <span>Menu</span>
                <span>Close</span>
              </span>
            </span>
          </button>
        </div>
      </nav>

      <div className="nav-menu__overlay" onClick={closeMenu} aria-hidden />

      <div id="nav-drawer" className="nav-menu__drawer" aria-hidden={!menuOpen}>
        <div className="nav-menu__container">
          <div className="nav-menu__status">
            {SHOW_AVAILABLE ? (
              <>
                <span className="nav-menu__status-dot" aria-hidden />
                <span>Disponible pour de nouveaux projets</span>
                <span className="nav-menu__status-sep" aria-hidden>
                  /
                </span>
              </>
            ) : null}
            <span>{clock}</span>
          </div>

          <div className="nav-menu__columns">
            <ul className="nav-menu__col">
              {NAV_LINKS_LEFT.map(({ label, id, num }, index) => (
                <li
                  key={id}
                  className="nav-menu__item"
                  style={{ "--nav-item-index": index } as React.CSSProperties}
                >
                  <a
                    href={`/#${id}`}
                    className="nav-menu__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(id);
                    }}
                  >
                    <span className="num">{num}</span>
                    <span className="label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="nav-menu__col">
              {NAV_LINKS_RIGHT.map(({ label, id, num }, index) => (
                <li
                  key={id}
                  className="nav-menu__item"
                  style={
                    { "--nav-item-index": index + 3 } as React.CSSProperties
                  }
                >
                  <a
                    href={`/#${id}`}
                    className="nav-menu__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(id);
                    }}
                  >
                    <span className="num">{num}</span>
                    <span className="label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <footer className="nav-menu__bottom">
            <div className="nav-menu__socials">
              <ul className="nav-menu__socials-list">
                {DRAWER_LINKS.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {label}
                      <span className="nav-menu__social-arrow" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-menu__brand">
              <div className="nav-menu__signature">Franck Ehui.</div>
              <div className="nav-menu__brand-sub">
                FULLSTACK DEVELOPER — LYON, FR
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
