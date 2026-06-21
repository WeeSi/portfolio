"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";
import { useCurtainRef } from "../hooks/CurtainContext";
import { useCurtain } from "../hooks/useCurtain";
import { markHomeReturn } from "../lib/homeRestore";

/** Reveals the home page when navigating back from a project (button or browser history) */
export default function CurtainController() {
  const curtainRef = useCurtainRef();
  const { fall } = useCurtain(curtainRef);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathRef = useRef<string | null>(null);
  const returningHomeRef = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname;

    returningHomeRef.current =
      prev !== null && prev.startsWith("/projects/") && pathname === "/";
    if (returningHomeRef.current) {
      markHomeReturn();
    }
  }, [pathname]);

  useEffect(() => {
    if (!returningHomeRef.current) return;
    returningHomeRef.current = false;

    const els = curtainRef.current?.querySelectorAll(".curtain-strip");
    if (els?.length) gsap.killTweensOf(els);
    fall();
  }, [pathname, fall, curtainRef]);

  return null;
}
