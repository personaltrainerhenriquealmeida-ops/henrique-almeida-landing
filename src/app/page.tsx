import { InstagramFeed } from "@/components/instagram-feed";
import { site } from "@/lib/site";

// O feed do Instagram é cacheado; a página é regenerada de hora em hora.
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16">
      <h1 className="font-display text-5xl uppercase leading-none md:text-7xl">
        Henrique Almeida
        <span className="block text-brand">Personal Trainer</span>
      </h1>
      <p className="mt-4 text-ash">Site em construção.</p>

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl uppercase">
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
    </main>
  );
}
