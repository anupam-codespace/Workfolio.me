import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack instead of turbopack (required for this platform)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
