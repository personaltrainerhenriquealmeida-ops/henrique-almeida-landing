import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-brand-gradient p-10 md:p-16">
        <h2 className="max-w-2xl font-display text-4xl uppercase leading-tight md:text-6xl">
          Construa o corpo.
          <span className="block">Construa a rotina.</span>
        </h2>
        <a
          href={site.plansHref}
          className="mt-8 inline-block rounded-full bg-ink px-8 py-4 font-semibold text-snow transition-colors hover:bg-snow hover:text-ink"
        >
          Começar agora
        </a>
      </div>
    </section>
  );
}
