import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-snow/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" className="leading-none">
          <span className="block font-display text-xl uppercase tracking-wide">
            {site.name}
          </span>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-brand">
            {site.role}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-graphite transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.plansHref}
          className="rounded-md bg-ink px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-snow transition-colors hover:bg-brand hover:text-ink"
        >
          Ver planos
        </a>
      </div>
    </header>
  );
}
