import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Habilita exportación a HTML estático
  reactCompiler: true, // tu opción anterior
};

export default nextConfig;
