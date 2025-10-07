import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized for Cloudflare Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
