import { plans } from "@/content/plans";
import { site } from "@/lib/site";
import { Draft } from "./draft";

export function Plans() {
  return (
    <section
      id="planos"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Planos de assinatura
      </p>
      <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
        Escolha o seu <span className="text-brand">plano</span>
        <Draft />
      </h2>
      <p className="mt-3 max-w-xl text-ash">
        Nomes, valores e benefícios de exemplo, até o Henrique definir os planos.
      </p>

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className={
              plan.highlight
                ? "flex flex-col rounded-3xl bg-brand p-7 text-ink"
                : "flex flex-col rounded-3xl border border-white/10 bg-graphite/40 p-7"
            }
          >
            <h3 className="font-display text-3xl uppercase">{plan.name}</h3>
            <p className={plan.highlight ? "mt-1 text-ink/80" : "mt-1 text-ash"}>
              {plan.tagline}
            </p>

            <p className="mt-6">
              <span className="font-display text-5xl">{plan.price}</span>
              <span className={plan.highlight ? "text-ink/80" : "text-ash"}>
                {plan.period}
              </span>
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span aria-hidden className={plan.highlight ? "" : "text-brand"}>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={site.contactHref}
              className={
                plan.highlight
                  ? "mt-8 rounded-full bg-ink px-6 py-3 text-center font-semibold text-snow transition-colors hover:bg-graphite"
                  : "mt-8 rounded-full bg-brand px-6 py-3 text-center font-semibold text-ink transition-colors hover:bg-snow"
              }
            >
              Quero este plano
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
