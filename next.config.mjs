/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/videos/:path*",
        destination: "http://43.128.2.110/videos/:path*",
      },
    ];
  },
};

export default nextConfig;
