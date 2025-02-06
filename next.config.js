/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // This tells Next.js to ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
