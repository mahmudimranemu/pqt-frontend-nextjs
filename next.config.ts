import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      new URL("https://propertyquestturkey.com/wp-content/uploads/**"),
    ],
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
