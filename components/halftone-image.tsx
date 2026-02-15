"use client";

import Image from "next/image";

type HalftoneImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

export function HalftoneImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  children
}: HalftoneImageProps) {
  return (
    <figure className={`gallery-media ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
      {children}
    </figure>
  );
}
