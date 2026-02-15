import { HalftoneImage } from "@/components/halftone-image";
import { SectionHeading } from "@/components/section-heading";

const galleryItems = [
  {
    id: "01",
    src: "/IMG_1461.JPG",
    alt: "Mar Vilaseca performance photo",
    className: "relative min-h-[300px] sm:min-h-[380px] md:col-span-2",
    offset: ""
  },
  {
    id: "02",
    src: "/IMG_1450.JPG",
    alt: "Mar Vilaseca portrait",
    className: "relative min-h-[260px]",
    offset: "gallery-offset-1"
  },
  {
    id: "03",
    src: "/IMG_2885.JPG",
    alt: "Mar Vilaseca studio session",
    className: "relative min-h-[240px]",
    offset: ""
  },
  {
    id: "04",
    src: "/edec0d6c-dde9-4d3c-91ea-7bc6eff1dc50.JPG",
    alt: "Mar Vilaseca live performance",
    className: "relative min-h-[280px] md:col-span-2",
    offset: "gallery-offset-2"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-subtle-purple-tint px-6 py-40 sm:py-48">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Gallery"
          caption="Moments from stage, studio, and in-between."
          accentColor="purple"
        />
        
        <div className="grid gap-7 md:grid-cols-3">
          {galleryItems.map((item) => (
            <HalftoneImage
              key={item.id}
              src={item.src}
              alt={item.alt}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`${item.className} ${item.offset} corner-accent border-[4px] border-deep-aubergine shadow-brutal-aubergine`}
            >
              <span className="absolute left-5 top-5 border-[3px] border-deep-aubergine bg-vibrant-purple px-3 py-2 text-[12px] font-black tracking-[0.2em] text-white shadow-[3px_3px_0_rgb(27,16,36)]">
                {item.id}
              </span>
            </HalftoneImage>
          ))}
        </div>
      </div>
    </section>
  );
}
