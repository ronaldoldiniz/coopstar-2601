import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para a exportação estática (SSG) de imagens nativas
  }
};

export default nextConfig;
