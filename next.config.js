/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   staleTimes: {
  //     dynamic: 0,
  //   },
  // },
  images: {
        formats: ['image/avif', 'image/webp',],
      domains: ['via.placeholder.com'],

  },
};

module.exports = nextConfig;
