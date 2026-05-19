import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack instead of turbopack (required for this platform)
  images: {
    unoptimized: true,
  },
  // Disable SWC minification to avoid the unit value crash on WebAssembly fallback environments
  swcMinify: false,
};

export default nextConfig;
