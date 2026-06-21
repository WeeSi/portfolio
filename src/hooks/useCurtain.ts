import { useCallback, useRef } from "react";
import { gsap } from "gsap";

export type CurtainRef = React.RefObject<HTMLDivElement | null>;

export type CurtainTransitionOptions = {
  riseDuration?: number;
  fallDuration?: number;
  riseEase?: string;
  fallEase?: string;
  staggerEach?: number;
  /** Wait two frames after swap so the new theme paints before the reveal */
  settleBeforeFall?: boolean;
};

const DEFAULT_TRANSITION: Required<CurtainTransitionOptions> = {
  riseDuration: 0.55,
  fallDuration: 0.6,
  riseEase: "power4.in",
  fallEase: "power4.out",
  staggerEach: 0.06,
  settleBeforeFall: false,
};

/** Returns helpers to animate the 5-strip curtain overlay */
export function useCurtain(curtainRef: CurtainRef) {
  const isAnimating = useRef(false);

  const strips = useCallback(
    () =>
      curtainRef.current
        ? Array.from(
            curtainRef.current.querySelectorAll<HTMLDivElement>(
              ".curtain-strip",
            ),
          )
        : [],
    [curtainRef],
  );

  /** Curtain rises bottom→top covering screen, calls cb when fully covered */
  const rise = useCallback(
    (cb: () => void, options: CurtainTransitionOptions = {}) => {
      const o = { ...DEFAULT_TRANSITION, ...options };
      const els = strips();

      if (!els.length) {
        cb();
        return;
      }

      gsap.set(els, {
        backgroundColor: "var(--accent)",
        scaleY: 0,
        transformOrigin: "bottom center",
      });

      gsap.killTweensOf(els);
      gsap.set(els, { scaleY: 0, transformOrigin: "bottom center" });
      gsap.to(els, {
        scaleY: 1,
        duration: o.riseDuration,
        ease: o.riseEase,
        stagger: { each: o.staggerEach, from: "start" },
        onComplete: cb,
      });
    },
    [strips],
  );

  /** Curtain falls top→bottom revealing content, calls cb when fully gone */
  const fall = useCallback(
    (cb?: () => void, options: CurtainTransitionOptions = {}) => {
      const o = { ...DEFAULT_TRANSITION, ...options };
      const els = strips();
      if (!els.length) {
        cb?.();
        return;
      }
      gsap.killTweensOf(els);
      gsap.set(els, { scaleY: 1, transformOrigin: "top center" });
      gsap.to(els, {
        scaleY: 0,
        duration: o.fallDuration,
        ease: o.fallEase,
        stagger: { each: o.staggerEach, from: "end" },
        onComplete: cb,
      });
    },
    [strips],
  );

  /** Full transition: rise → swap → fall */
  const transition = useCallback(
    (
      swap: () => void,
      afterFall?: () => void,
      options: CurtainTransitionOptions = {},
    ) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const o = { ...DEFAULT_TRANSITION, ...options };
      const els = strips();

      if (!els.length) {
        swap();
        isAnimating.current = false;
        afterFall?.();
        return;
      }

      gsap.set(els, { scaleY: 0, transformOrigin: "bottom center" });
      gsap.to(els, {
        scaleY: 1,
        duration: o.riseDuration,
        ease: o.riseEase,
        stagger: { each: o.staggerEach, from: "start" },
        onComplete: () => {
          swap();

          const startFall = () => {
            gsap.set(els, { scaleY: 1, transformOrigin: "top center" });
            gsap.to(els, {
              scaleY: 0,
              duration: o.fallDuration,
              ease: o.fallEase,
              stagger: { each: o.staggerEach, from: "end" },
              onComplete: () => {
                isAnimating.current = false;
                afterFall?.();
              },
            });
          };

          if (o.settleBeforeFall) {
            requestAnimationFrame(() => requestAnimationFrame(startFall));
          } else {
            startFall();
          }
        },
      });
    },
    [strips],
  );

  return { rise, fall, transition, isAnimating };
}
