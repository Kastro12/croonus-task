/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['api.staging.croonus.com'],
  },
};

export default nextConfig;
