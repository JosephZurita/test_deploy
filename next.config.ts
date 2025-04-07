import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/test_deploy/' : '',
  basePath: isProd ? '/test_deploy' : '',
  output: 'export'
};

export default nextConfig;
