"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Shows", id: "shows" },
  { label: "Music", id: "music" },
  { label: "Contact", id: "contact" }
];

export function Navbar() {
  const [activeId, setActiveId] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY + 150;
      let nextActive = navItems[0].id;
      navItems.forEach((item) => {
        const node = document.getElementById(item.id);
        if (node && node.offsetTop <= position) nextActive = item.id;
      });
      setActiveId(nextActive);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav
        className="pointer-events-auto relative mx-auto flex max-w-6xl items-center justify-between border-[3px] border-deep-aubergine bg-rich-plum px-4 py-4 shadow-brutal-aubergine sm:px-6"
        aria-label="Main"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="font-heading text-[1.35rem] leading-none text-white sm:text-[1.5rem]"
        >
          Mar Vilaseca
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-sm font-black uppercase md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors ${
                activeId === item.id
                  ? "text-white"
                  : "text-white hover:text-[rgb(var(--subtle-surface))]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border-2 border-deep-aubergine bg-deep-aubergine text-white transition-colors hover:bg-deep-aubergine/90 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="pointer-events-auto absolute left-3 right-3 top-full z-40 mt-1 overflow-hidden border-[3px] border-deep-aubergine bg-rich-plum shadow-brutal-aubergine transition-[visibility,max-height] duration-200 md:hidden"
        style={{
          visibility: menuOpen ? "visible" : "hidden",
          maxHeight: menuOpen ? "min(70vh, 400px)" : "0",
        }}
      >
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className={`border-b border-deep-aubergine/30 px-6 py-4 text-left text-base font-black uppercase tracking-wide last:border-b-0 ${
                activeId === item.id
                  ? "bg-deep-aubergine/20 text-white"
                  : "text-white hover:bg-deep-aubergine/10 hover:text-[rgb(var(--subtle-surface))]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop when menu open (mobile) */}
      {menuOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="pointer-events-auto fixed inset-0 z-30 bg-deep-aubergine/40 backdrop-blur-[2px] md:hidden"
          aria-label="Close menu"
        />
      )}
    </header>
  );
}
