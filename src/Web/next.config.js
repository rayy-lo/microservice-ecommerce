/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "comme-cat-beds.s3.amazonaws.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
