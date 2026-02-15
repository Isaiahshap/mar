"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  caption?: string;
  accentColor?: "purple" | "rose";
};

export function SectionHeading({ 
  title, 
  caption, 
  accentColor = "purple" 
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="mb-16">
        <h2 className="font-heading text-7xl leading-[0.80] sm:text-8xl lg:text-[8rem]">
          {title}
        </h2>
        <div className="mt-7 h-[10px] w-32 bg-vibrant-purple" aria-hidden />
        {caption ? (
          <p className="mt-8 max-w-2xl text-xl font-bold leading-[1.72]">
            {caption}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h2 className="font-heading text-7xl leading-[0.80] sm:text-8xl lg:text-[8rem]">
        {title}
      </h2>
      <div className="mt-7 h-[10px] w-32 bg-vibrant-purple" aria-hidden />
      {caption ? (
        <p className="mt-8 max-w-2xl text-xl font-bold leading-[1.72]">
          {caption}
        </p>
      ) : null}
    </motion.div>
  );
}
