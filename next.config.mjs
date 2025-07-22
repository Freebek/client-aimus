/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upgaming.uz",
      },
      {
        protocol: "https",
        hostname: "avatars.steamstatic.com",
      },
    ],
  },

  // ✅ добавляем прокси для API, чтобы обойти CORS
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://panel.aimus.uz/:path*", // проксируем API
      },
    ];
  },
};

export default nextConfig;
