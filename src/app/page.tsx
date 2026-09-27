import { About } from "@/components/about";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InstagramFeed } from "@/components/instagram-feed";
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
        <About />
        <HowItWorks />
        <Plans />

        <section
          id="instagram"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20"
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl uppercase md:text-5xl">
              No <span className="text-brand">Instagram</span>
            </h2>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ash hover:text-brand"
            >
              @{site.instagram.handle}
            </a>
          </div>
          <InstagramFeed />
        </section>

        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
