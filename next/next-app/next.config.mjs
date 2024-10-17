/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    domains: [
      'res.cloudinary.com'
    ]
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: 'https://jsonplaceholder.typicode.com/:path*',
    },
  ],
};

export default nextConfig;
