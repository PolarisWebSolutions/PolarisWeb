import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Optimized for Cloudflare Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Allow build to proceed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
