import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH || undefined,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
