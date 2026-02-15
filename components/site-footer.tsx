export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="checker-accent-dark h-12" aria-hidden />
      <footer className="bg-deep-aubergine px-6 py-14 text-on-dark">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-lg font-black uppercase sm:flex-row sm:items-center">
          <p>© {year} Mar Vilaseca</p>
          <a 
            href="mailto:merce@puyandco.com" 
            className="transition-colors hover:text-vibrant-purple"
          >
            merce@puyandco.com
          </a>
          <a 
            href="#top" 
            className="transition-colors hover:text-deep-rose"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
