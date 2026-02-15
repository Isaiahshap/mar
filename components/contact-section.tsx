'use client';

export function ContactSection() {
  return (
    <section id="contact" className="bg-rich-plum px-6 py-36 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="font-heading text-7xl leading-[0.80] text-on-dark sm:text-8xl lg:text-[8rem]">
              Contact
            </h2>
            <div className="mt-8 h-[10px] w-44 bg-vibrant-purple" />
            
            <p className="mt-9 max-w-lg text-xl font-bold text-on-dark">
              Booking and press inquiries:
            </p>
            <a
              href="mailto:merce@puyandco.com"
              className="mt-5 inline-block text-3xl font-black text-on-dark transition-colors hover:text-vibrant-purple"
            >
              merce@puyandco.com
            </a>
            
            <div className="mt-14 flex flex-wrap gap-7 text-lg font-black uppercase text-on-dark">
              <a 
                href="#" 
                className="transition-colors hover:text-deep-rose"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="transition-colors hover:text-deep-rose"
              >
                YouTube
              </a>
              <a 
                href="#" 
                className="transition-colors hover:text-deep-rose"
              >
                Spotify
              </a>
            </div>
          </div>
          
          <form
            className="mt-10 border-[3px] border-vibrant-purple bg-subtle-surface p-8 shadow-brutal-purple lg:mt-0"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Newsletter signup placeholder"
          >
            <p className="font-heading text-4xl leading-none text-deep-aubergine">Newsletter</p>
            <div className="mt-4 h-[6px] w-20 bg-vibrant-purple" />
            
            <p className="mt-6 text-sm font-bold leading-[1.72] text-deep-aubergine">
              Occasional notes on new songs and upcoming dates.
            </p>
            
            <label htmlFor="newsletter-email" className="mt-8 block text-sm font-black uppercase text-deep-aubergine">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@email.com"
              className="mt-2 w-full border-[3px] border-deep-aubergine bg-light-lavender px-4 py-3 text-deep-aubergine outline-none transition focus:border-vibrant-purple"
            />
            
            <button
              type="submit"
              className="mt-7 border-[3px] border-deep-aubergine bg-vibrant-purple px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition-all hover:bg-deep-rose"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
