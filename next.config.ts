import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Bois_Saveurs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
