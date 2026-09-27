import { site } from "@/lib/site";
import { ArrowRight, InstagramIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer id="contato" className="scroll-mt-16 bg-ink text-snow">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_1.2fr_1fr] md:items-center md:gap-0">
        <div className="md:pr-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            Vamos conversar
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${site.name}`}
            className="mt-4 inline-flex size-10 items-center justify-center rounded-full border border-snow/40 transition-colors hover:border-brand hover:text-brand"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>

        <p className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.12em] md:border-x md:border-snow/20 md:px-10">
          “O projeto mais forte da sua vida é{" "}
          <span className="text-brand">você.</span>”
        </p>

        <div className="md:pl-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            Fale com o Henrique
          </p>
          <a
            href={site.instagram.dmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-between rounded-md border border-snow/25 bg-graphite/40 py-1 pl-4 pr-1 text-sm text-ash transition-colors hover:border-brand"
          >
            Enviar mensagem no Instagram
            <span className="flex size-9 items-center justify-center rounded bg-brand text-ink">
              <ArrowRight className="size-4" />
            </span>
          </a>
        </div>
      </div>
      <p className="border-t border-snow/10 py-5 text-center text-xs text-steel">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
