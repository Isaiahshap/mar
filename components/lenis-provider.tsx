"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const reducedMotionMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotionMedia.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 0.9,
      autoRaf: false
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
