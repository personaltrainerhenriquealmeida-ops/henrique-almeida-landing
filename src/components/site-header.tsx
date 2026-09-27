import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" className="leading-none">
          <span className="block font-display text-xl uppercase tracking-wide">
            {site.name}
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-brand">
            {site.role}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ash transition-colors hover:text-snow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.plansHref}
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-snow"
        >
          Ver planos
        </a>
      </div>
    </header>
  );
}
