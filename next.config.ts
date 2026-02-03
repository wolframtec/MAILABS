import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/MAILABS',
  assetPrefix: '/MAILABS',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
