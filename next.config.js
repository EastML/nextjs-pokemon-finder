/** @type {import('next').NextConfig} */
const nextConfig = {
  // Used when fetching images from a remote origin
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
