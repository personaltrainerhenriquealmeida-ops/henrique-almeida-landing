import Image from "next/image";
import { images } from "@/content/images";
import { getProfile } from "@/lib/instagram/client";
import { site } from "@/lib/site";
import { ArrowRight } from "./icons";

function followersLabel(count: number) {
  if (count >= 1000) return `+${Math.floor(count / 1000)} mil`;
  return String(count);
}

export async function Hero() {
  const profile = await getProfile();

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Foto do Henrique: ocupa o lado direito e se funde ao fundo, como na referência. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <Image
          src={images.hero}
          alt="Henrique Almeida treinando na academia"
          fill
          priority
          sizes="60vw"
          className="object-cover object-[30%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-snow via-snow/40 via-[14%] to-transparent to-[40%]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-snow to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[600px] w-full max-w-6xl items-center px-4 py-16 md:min-h-[680px] md:py-20">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-graphite">
            Personal para mulheres 25+ ·{" "}
            <span className="text-brand">Acompanhamento individual</span>
          </p>

          <h1 className="mt-5 font-display text-[clamp(3.5rem,10vw,7rem)] uppercase leading-[0.92]">
            Treine com
            <span className="block">método.</span>
            <span className="block text-brand">Evolua sempre.</span>
          </h1>

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-graphite">
            Planos de acompanhamento personalizados para você treinar melhor,
            manter o ritmo e chegar ao resultado que quer.
          </p>

          <a
            href={site.plansHref}
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-snow transition-colors hover:bg-brand hover:text-ink"
          >
            Ver planos
            <ArrowRight className="size-4" />
          </a>

          {profile && (
            <div className="mt-8 flex items-center gap-3">
              {profile.profilePictureUrl && (
                <Image
                  src={profile.profilePictureUrl}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 rounded-full object-cover ring-2 ring-snow"
                />
              )}
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-graphite">
                {followersLabel(profile.followersCount)} seguidores no Instagram
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: a foto vem depois do texto. */}
      <div className="relative aspect-[4/5] w-full md:hidden">
        <Image
          src={images.hero}
          alt="Henrique Almeida treinando na academia"
          fill
          sizes="100vw"
          className="object-cover object-[30%_20%]"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-snow to-transparent" />
      </div>
    </section>
  );
}
