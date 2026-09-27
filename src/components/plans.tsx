import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { plans } from "@/content/plans";
import { images } from "@/content/images";
import { site } from "@/lib/site";
import { Draft } from "./draft";
import { ArrowRight, Bolt, Dumbbell, Star } from "./icons";

const planIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  essencial: Dumbbell,
  performance: Bolt,
  premium: Star,
};

export function Plans() {
  return (
    <section
      id="planos"
      className="mx-auto w-full max-w-6xl scroll-mt-16 px-4 py-20"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Planos de assinatura
            <span className="h-px w-10 bg-brand/50" />
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Escolha o plano ideal para você
            <Draft />
          </h2>
        </div>
        <a
          href={site.contactHref}
          className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] hover:text-brand sm:inline-flex"
        >
          Fale com o Henrique <ArrowRight className="size-4" />
        </a>
      </div>
      <p className="mt-3 max-w-xl text-sm text-steel">
        Nomes, valores e benefícios de exemplo, até o Henrique definir os planos.
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const Icon = planIcons[plan.id] ?? Dumbbell;
          const image = images.plans[plan.id] ?? null;

          return (
            <li
              key={plan.id}
              className={`flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm ${
                plan.highlight ? "border-brand ring-1 ring-brand" : "border-ink/10"
              }`}
            >
              <div className="relative h-48 w-full bg-brand-gradient">
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${image.position}`}
                  />
                ) : (
                  <Icon className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-snow/50" />
                )}
                {plan.highlight && (
                  <span className="absolute left-3 top-3 rounded-md bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                    Mais escolhido
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col items-center px-6 pb-7 text-center">
                <span
                  className={`relative z-10 -mt-6 flex size-12 items-center justify-center rounded-full ring-4 ring-white ${
                    plan.highlight ? "bg-brand text-ink" : "bg-ink text-snow"
                  }`}
                >
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-steel">{plan.tagline}</p>

                <p className="mt-5">
                  <span className="font-display text-4xl">{plan.price}</span>
                  <span className="text-sm text-steel">{plan.period}</span>
                </p>

                <ul className="mt-5 flex-1 space-y-2 text-sm text-graphite">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={site.contactHref}
                  className={`mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] hover:text-brand ${
                    plan.highlight ? "text-brand" : ""
                  }`}
                >
                  Quero este plano <ArrowRight className="size-4" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
