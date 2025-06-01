import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.clerk.com" },
      { hostname: "img.clerk.com" }, // Add this line
    ],
  },
};

export default nextConfig;
