import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="mt-20 scroll-mt-20 border-t border-white/10 bg-graphite/30"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl uppercase">{site.name}</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand">
            {site.role}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ash">
            Vamos conversar
          </p>
          <p className="mt-3 text-ash">
            Contato direto (WhatsApp) em breve. Por enquanto, chame no Instagram.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ash">
            Redes
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block hover:text-brand"
          >
            Instagram · @{site.instagram.handle}
          </a>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-steel">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
