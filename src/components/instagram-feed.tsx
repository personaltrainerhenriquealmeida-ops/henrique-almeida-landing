import Image from "next/image";
import { getLatestPosts } from "@/lib/instagram/client";
import { site } from "@/lib/site";

export async function InstagramFeed({ limit = 8 }: { limit?: number }) {
  const posts = await getLatestPosts(limit);

  if (posts.length === 0) {
    return (
      <div className="rounded-xl border border-ink/10 bg-white p-10 text-center shadow-sm">
        <p className="text-steel">As últimas publicações aparecem aqui.</p>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-md bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-snow transition-colors hover:bg-brand hover:text-ink"
        >
          Ver @{site.instagram.handle}
        </a>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {posts.map((post) => (
        <li key={post.id}>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-graphite"
          >
            <Image
              src={post.imageUrl}
              alt={post.caption.slice(0, 120) || "Post do Instagram"}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
