export function MusicMainSection() {
  return (
    <section id="music" className="bg-light-lavender px-6 py-36 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-7xl leading-[0.8] sm:text-8xl lg:text-[8rem]">
          Music
        </h2>
        <div className="mt-7 h-[10px] w-32 bg-vibrant-purple" />

        <div className="mt-16 grid gap-8 lg:grid-cols-[400px_1fr]">
          <img
            src="https://i0.wp.com/marvilaseca.com/wp-content/uploads/2023/02/UBU0000_Mar-Vilaseca_Find-the-Way-Promo-Cover-1000.jpg?fit=800%2C800&ssl=1"
            alt="Find The Way album cover"
            className="w-full object-cover"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-black text-deep-aubergine sm:text-3xl">
              Find The Way
            </h3>
            <p className="mt-3 text-base font-bold text-deep-aubergine/70">
              Debut Album
            </p>
            <div className="mt-6">
              <iframe
                src="https://open.spotify.com/embed/album/4p93zaXPeRj2G6ZZEKh6Ki?utm_source=generator&theme=0"
                width="100%"
                height="370"
                frameBorder="0"
                style={{ border: "0" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify player: Find The Way"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
