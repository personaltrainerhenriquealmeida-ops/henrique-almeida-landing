import Image from "next/image";
import { getLatestPosts } from "@/lib/instagram/client";

export async function InstagramFeed({ limit = 8 }: { limit?: number }) {
  const posts = await getLatestPosts(limit);
  if (posts.length === 0) return null;

  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {posts.map((post) => (
        <li key={post.id}>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-2xl bg-graphite"
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
