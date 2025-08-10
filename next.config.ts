import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://sincere-birds-aeadd4f1c7.media.strapiapp.com/**')]
  }
};

export default nextConfig;
