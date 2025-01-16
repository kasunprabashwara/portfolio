/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
