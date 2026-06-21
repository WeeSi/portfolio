"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";
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

const CLOSED = { w: 35, h: 35, r: 22 } as const;

function openWidth() {
  return Math.min(360, window.innerWidth - 48);
}

export default function Nav({ curtainRef: _curtainRef }: NavProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollTo } = useLocomotive();
  const [menuOpen, setMenuOpen] = useState(false);

  const slotRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const menuTlRef = useRef<gsap.core.Timeline | null>(null);
  const menuOpenRef = useRef(false);

  function scrollToSection(id: string) {
    if (pathname === "/") {
      scrollTo(`#${id}`);
      return;
    }
    window.location.href = `/#${id}`;
  }

  const syncMenuPosition = useCallback(() => {
    const slot = slotRef.current;
    const menu = menuRef.current;
    if (!menu) return;

    if (!slot || window.innerWidth > 1070) {
      menu.style.top = "";
      menu.style.right = "";
      menu.style.left = "";
      return;
    }

    const rect = slot.getBoundingClientRect();
    menu.style.top = `${rect.top}px`;
    menu.style.right = `${window.innerWidth - rect.right}px`;
    menu.style.left = "auto";
  }, []);

  const measureOpenHeight = useCallback(() => {
    const menu = menuRef.current;
    const inner = innerRef.current;
    if (!menu || !inner) return 420;

    const prev = {
      width: menu.style.width,
      height: menu.style.height,
      overflow: menu.style.overflow,
      visibility: menu.style.visibility,
    };

    menu.style.visibility = "hidden";
    menu.style.overflow = "visible";
    menu.style.width = `${openWidth()}px`;
    menu.style.height = "auto";
    inner.style.visibility = "visible";
    inner.style.opacity = "1";

    const h = menu.offsetHeight;

    menu.style.width = prev.width;
    menu.style.height = prev.height;
    menu.style.overflow = prev.overflow;
    menu.style.visibility = prev.visibility;
    inner.style.visibility = "";
    inner.style.opacity = "";

    return h;
  }, []);

  const closeMenu = useCallback(() => {
    if (!menuOpenRef.current) return;
    menuOpenRef.current = false;
    setMenuOpen(false);
    document.body.style.overflow = "";
    menuTlRef.current?.timeScale(1.6).reverse();
  }, []);

  const openMenu = useCallback(() => {
    if (menuOpenRef.current) return;
    syncMenuPosition();
    menuOpenRef.current = true;
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
    menuTlRef.current?.timeScale(1).play();
  }, [syncMenuPosition]);

  const toggleMenu = useCallback(() => {
    if (menuOpenRef.current) closeMenu();
    else openMenu();
  }, [closeMenu, openMenu]);

  function handleNavClick(id: string) {
    scrollToSection(id);
    closeMenu();
  }

  useEffect(() => {
    const menu = menuRef.current;
    const inner = innerRef.current;
    const backdrop = backdropRef.current;
    const bottom = bottomRef.current;
    const links = inner?.querySelectorAll<HTMLElement>(".nav-menu__link");

    if (!menu || !inner || !backdrop || !bottom || !links?.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.set(menu, {
      width: CLOSED.w,
      height: CLOSED.h,
      borderRadius: CLOSED.r,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    });
    gsap.set(inner, { opacity: 0, visibility: "hidden" });
    gsap.set(backdrop, { opacity: 0, pointerEvents: "none" });

    if (reducedMotion) {
      menuTlRef.current = gsap.timeline({ paused: true });
      return;
    }

    menuTlRef.current = gsap
      .timeline({
        paused: true,
        onStart: () => {
          gsap.set(backdrop, { pointerEvents: "auto" });
        },
        onReverseComplete: () => {
          gsap.set(backdrop, { pointerEvents: "none" });
        },
      })
      .to(backdrop, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0)
      .to(
        menu,
        {
          width: () => openWidth(),
          height: () => measureOpenHeight(),
          borderRadius: 22,
          boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
          duration: 0.55,
          ease: "back.out(1.6)",
        },
        0.02,
      )
      .to(
        inner,
        {
          opacity: 1,
          visibility: "visible",
          duration: 0.3,
          ease: "power2.out",
        },
        0.18,
      )
      .fromTo(
        links,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.04 },
        0.22,
      )
      .fromTo(
        bottom,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        0.38,
      );

    syncMenuPosition();

    return () => {
      menuTlRef.current?.kill();
      document.body.style.overflow = "";
    };
  }, [measureOpenHeight, syncMenuPosition]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpenRef.current) closeMenu();
    }

    function onResize() {
      syncMenuPosition();

      if (window.innerWidth > 1070 && menuOpenRef.current) {
        closeMenu();
        return;
      }
      if (menuOpenRef.current && menuRef.current) {
        gsap.set(menuRef.current, {
          width: openWidth(),
          height: measureOpenHeight(),
        });
      }
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMenu, measureOpenHeight, syncMenuPosition]);

  useEffect(() => {
    const menu = menuRef.current;
    const inner = innerRef.current;
    const backdrop = backdropRef.current;
    if (!menu || !inner || !backdrop) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reducedMotion) return;

    if (menuOpen) {
      gsap.set(menu, {
        width: openWidth(),
        height: "auto",
        borderRadius: 22,
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
      });
      gsap.set(inner, {
        opacity: 1,
        visibility: "visible",
        clearProps: "transform",
      });
      gsap.set(backdrop, { opacity: 1, pointerEvents: "auto" });
    } else {
      gsap.set(menu, {
        width: CLOSED.w,
        height: CLOSED.h,
        borderRadius: CLOSED.r,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      });
      gsap.set(inner, { opacity: 0, visibility: "hidden" });
      gsap.set(backdrop, { opacity: 0, pointerEvents: "none" });
    }
  }, [menuOpen]);

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

        <div className="nav-center">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-r">
          <ThemeSwitcher />
          <div className="nav-menu-slot" ref={slotRef} aria-hidden />
        </div>
      </nav>

      <div className={`nav-menu${menuOpen ? " is-open" : ""}`} ref={menuRef}>
        <button
          type="button"
          className={`nav-menu__toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-menu__inner" ref={innerRef}>
          <div className="nav-menu__top">
            <span className="nav-menu__eyebrow">Menu</span>
          </div>

          <ul className="nav-menu__nav">
            {NAV_LINKS.map(({ label, id, num }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className="nav-menu__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  <span className="num">{num}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-menu__bottom" ref={bottomRef}>
            <div className="nav-menu__status">
              <span className="nav-menu__dot" />
              Disponible pour de nouveaux projets
            </div>
            <a
              href="/#contact"
              className="nav-menu__cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Me contacter →
            </a>
          </div>
        </div>
      </div>

      <div
        className="nav-menu__backdrop"
        ref={backdropRef}
        onClick={closeMenu}
        aria-hidden
      />
    </>
  );
}
