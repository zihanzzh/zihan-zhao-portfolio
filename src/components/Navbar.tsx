const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
];

export function Navbar() {
  return (
    <header className="hero-nav fixed left-0 top-0 z-40 w-full px-5 py-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0c0c0c]/55 px-5 py-3 text-sm text-white/80 shadow-2xl shadow-black/30 backdrop-blur-md">
        <a
          href="#hero"
          className="font-semibold uppercase tracking-[0.28em] text-white"
          aria-label="Zihan Zhao home"
        >
          Zihan
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/35 hover:bg-white hover:text-[#0c0c0c]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
