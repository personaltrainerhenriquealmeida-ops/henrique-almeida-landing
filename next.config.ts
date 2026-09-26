import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // CDN das mídias do Instagram (media_url / thumbnail_url)
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
