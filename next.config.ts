import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/**", // Permite cualquier ruta en media.licdn.com
      },
    ],
  },
};

export default nextConfig;