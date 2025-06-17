import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH || undefined,
  output: "export",
  images: { unoptimized: true },
  env: {
    BASE_PATH: process.env.BASE_PATH || "",
  },
};

export default nextConfig;
