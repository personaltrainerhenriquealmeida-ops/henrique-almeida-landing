import Image from "next/image";
import { images } from "@/content/images";
import { site } from "@/lib/site";
import { ArrowRight, Heart, Trend, UserIcon } from "./icons";

const perks = [
  { icon: UserIcon, label: "Treino sob medida" },
  { icon: Heart, label: "Acompanhamento de perto" },
  { icon: Trend, label: "Evolução constante" },
];

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-snow">
      {images.ctaBand ? (
        <Image
          src={images.ctaBand}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_90%,#c10801_0%,#f16001_18%,transparent_60%)] opacity-70" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
        <div>
          <p className="font-script text-2xl text-brand">
            Você não conquista a vida que deseja.
          </p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.95] md:text-7xl">
            Construa o corpo.
            <span className="block">
              Construa a <span className="text-brand">rotina.</span>
            </span>
          </h2>
          <p className="mt-2 font-script text-2xl text-brand">
            Você conquista a vida pela qual trabalha.
          </p>

          <a
            href={site.contactHref}
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-brand px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-snow"
          >
            Falar com o Henrique
            <ArrowRight className="size-4" />
          </a>
        </div>

        <ul className="space-y-5">
          {perks.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full border border-snow/40">
                <Icon className="size-5" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
