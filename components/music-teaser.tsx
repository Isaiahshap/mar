const tracks = [
  "Find the Way",
  "Little Echoes",
  "Home in Transit",
  "A New Familiar"
];

export function MusicTeaser() {
  return (
    <section id="music" className="bg-light-lavender px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Purple line */}
        <div className="mb-14 h-[8px] w-32 bg-vibrant-purple" />
        
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div className="max-w-3xl">
            <h2 className="font-heading text-7xl leading-[0.82] sm:text-8xl lg:text-[7.5rem]">
              Find the Way
            </h2>
            <div className="mt-7 h-[8px] w-36 bg-vibrant-purple" />
            
            <p className="mt-9 text-xl font-bold leading-[1.72] text-deep-aubergine sm:text-2xl">
              Debut album on Ubuntu Music. Original songs in progress: stories
              about leaving home, getting lost, and finding your own center.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#music"
                className="border-[3px] border-deep-aubergine bg-vibrant-purple px-8 py-4 text-base font-black uppercase tracking-wide text-white shadow-brutal-aubergine transition-all hover:translate-x-1 hover:translate-y-1"
              >
                Full Album
              </a>
              <button
                type="button"
                className="border-[3px] border-deep-aubergine bg-transparent px-8 py-4 text-base font-black uppercase tracking-wide text-deep-aubergine transition-all hover:bg-deep-rose hover:text-white"
              >
                Press Kit
              </button>
            </div>
          </div>
          
          <div className="mt-10 border-[3px] border-deep-aubergine bg-subtle-surface p-7 shadow-brutal-aubergine lg:mt-0">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-heading text-3xl leading-none text-deep-aubergine">Player</p>
              <span className="border-2 border-deep-aubergine bg-vibrant-purple px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
                demo
              </span>
            </div>
            
            <div className="mb-6 h-3 w-full overflow-hidden bg-deep-aubergine/20">
              <div className="h-full w-2/5 bg-vibrant-purple" />
            </div>
            
            <ul className="space-y-3 text-sm font-bold">
              {tracks.map((track, idx) => (
                <li
                  key={track}
                  className="flex items-center justify-between border-[3px] border-deep-aubergine bg-light-lavender px-4 py-3 text-deep-aubergine shadow-[4px_4px_0_rgb(27,16,36)] transition-all hover:translate-x-1 hover:translate-y-1"
                >
                  <span>{track}</span>
                  <span className="font-mono text-xs font-black">
                    {`0${idx + 1}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
