import type { NextConfig } from "next";

// Publicação no GitHub Pages: site estático servido em /<repo>. O workflow
// define GITHUB_PAGES=true. Fora disso (dev, Vercel, servidor Node) o app roda normal.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      basePath: "/henrique-almeida-landing",
      // O otimizador padrão de imagens não existe em export estático.
      images: { unoptimized: true },
    }
  : {
      images: {
        // CDN das mídias do Instagram (media_url / thumbnail_url)
        remotePatterns: [
          { protocol: "https", hostname: "**.cdninstagram.com" },
          { protocol: "https", hostname: "**.fbcdn.net" },
        ],
      },
    };

export default nextConfig;
