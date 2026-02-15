export function AboutSection() {
  return (
    <section id="about" className="bg-rich-plum px-6 py-36 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-7xl leading-[0.80] text-on-dark sm:text-8xl lg:text-[8rem]">
              About
            </h2>
            <div className="mt-8 h-[10px] w-40 bg-vibrant-purple" />
            <div className="mt-10 space-y-6 text-xl font-bold leading-[1.72] text-on-dark sm:text-2xl">
              <p>Barcelona-born vocalist, composer, and multi-instrumentalist.</p>
              <p>Trained in jazz voice in Barcelona before moving to New York.</p>
              <p>Juilliard Jazz Studies sharpened a fearless, intimate sound.</p>
              <p>
                Now building her US chapter and writing a new collection about
                relationships, departure, and becoming.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:mt-0">
            <div className="flex flex-wrap gap-4">
              <div className="max-w-[180px] sm:max-w-[200px] lg:max-w-[220px]">
                <img
                  src="/IMG_1450.JPG"
                  alt="Mar Vilaseca"
                  className="h-auto w-full border-[4px] border-deep-aubergine object-cover shadow-brutal-purple"
                />
              </div>
              <div className="max-w-[180px] sm:max-w-[200px] lg:max-w-[220px]">
                <img
                  src="/IMG_2885.JPG"
                  alt="Mar Vilaseca performing"
                  className="h-auto w-full border-[4px] border-deep-aubergine object-cover shadow-brutal-purple"
                />
              </div>
            </div>
            <div className="max-w-[380px] sm:max-w-[420px] lg:max-w-[460px]">
              <img
                src="/IMG_1461.JPG"
                alt="Mar Vilaseca with band"
                className="h-auto w-full border-[4px] border-deep-aubergine object-cover shadow-brutal-purple"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
