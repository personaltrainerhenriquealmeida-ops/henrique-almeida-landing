import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-20 pt-12 md:grid-cols-2 md:pt-20"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ash">
          Personal trainer · Acompanhamento individual
        </p>
        <h1 className="mt-5 font-display text-6xl uppercase leading-[0.95] md:text-8xl">
          Treine com método.
          <span className="block text-brand">Evolua com constância.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-ash">
          Planos de acompanhamento personalizados para você treinar melhor,
          manter o ritmo e chegar ao resultado que quer.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.plansHref}
            className="rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-snow"
          >
            Ver planos
          </a>
          <a
            href="#instagram"
            className="rounded-full border border-white/25 px-7 py-3.5 font-semibold transition-colors hover:border-brand hover:text-brand"
          >
            Ver no Instagram
          </a>
        </div>
      </div>

      {/* Espaço reservado até chegar a foto profissional do Henrique. */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-gradient">
        <div className="absolute inset-0 flex items-end p-6">
          <span className="rounded-full bg-ink/60 px-3 py-1 text-xs text-snow">
            Foto do Henrique
          </span>
        </div>
      </div>
    </section>
  );
}
