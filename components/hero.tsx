"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-deep-aubergine"
    >
      {/* Full-bleed hero image */}
      <motion.div
        style={{ y: reduceMotion ? 0 : y }}
        className="absolute inset-0"
      >
        <img 
          src="/hero.png" 
          alt="Mar Vilaseca" 
          className="h-full w-full object-cover"
        />
      </motion.div>
      
      {/* Overlays: aubergine bottom-up, then plum left-to-right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-aubergine via-deep-aubergine/70 to-transparent" />
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "linear-gradient(to right, rgb(58 31 74 / 0.7), rgb(58 31 74 / 0.15) 50%, transparent)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-30 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-24 pt-32 sm:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="mb-5 hidden border-[3px] border-deep-aubergine bg-vibrant-purple px-5 py-2 text-[12px] font-black uppercase tracking-[0.2em] text-white shadow-brutal-aubergine sm:inline-block">
            Barcelona • NYC
          </div>
          
          <h1
            className="font-heading text-[5rem] leading-[0.85] text-on-dark sm:text-[7.5rem] lg:text-[10rem]"
            style={{ 
              textShadow: "4px 4px 0 rgb(27, 16, 36), 8px 8px 0 rgb(124, 58, 237)",
              letterSpacing: "-0.04em",
              fontWeight: 700
            }}
          >
            Mar Vilaseca
          </h1>
          
          {/* Purple accent bar */}
          <div className="mt-6 h-[10px] w-44 bg-vibrant-purple" />
          
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#music"
              className="border-[3px] border-deep-aubergine bg-vibrant-purple px-8 py-4 text-lg font-black uppercase tracking-wide text-white shadow-brutal-aubergine transition-all hover:translate-x-1 hover:translate-y-1 hover:text-black hover:shadow-none"
              style={{ backgroundColor: "rgb(124, 58, 237)" }}
            >
              Listen Now
            </a>
            <a
              href="#shows"
              className="border-[3px] border-deep-rose bg-deep-rose px-8 py-4 text-lg font-black uppercase tracking-wide text-white shadow-brutal-aubergine transition-all hover:translate-x-1 hover:translate-y-1 hover:text-black hover:shadow-none"
              style={{ backgroundColor: "rgb(225, 29, 72)" }}
            >
              Live Shows
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Checkerboard strip */}
      <div className="checker-accent-dark absolute bottom-0 left-0 z-30 h-10 w-full" />
    </section>
  );
}
