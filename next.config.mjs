/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.[DOMAIN]', // Placeholder for Cloudflare R2
      },
    ],
  },
};
export default nextConfig;
