import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { InstagramFeed } from "@/components/instagram-feed";
import { ArrowRight } from "@/components/icons";
import { Plans } from "@/components/plans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Plans />

        <section
          id="instagram"
          className="mx-auto w-full max-w-6xl scroll-mt-16 px-4 pb-24"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                Instagram
                <span className="h-px w-10 bg-brand/50" />
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Acompanhe o dia a dia
              </h2>
            </div>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] hover:text-brand"
            >
              @{site.instagram.handle} <ArrowRight className="size-4" />
            </a>
          </div>
          <InstagramFeed />
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
