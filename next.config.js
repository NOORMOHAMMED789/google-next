/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.logojoy.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig
