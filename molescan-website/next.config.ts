import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      {
        source: "/resources/before-you-treat",
        destination: "/resources/before-you-treat-skin-lesion-assessment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
