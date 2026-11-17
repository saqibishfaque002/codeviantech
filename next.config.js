/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    // In local development, forward /admin requests to the Laravel development server
    // In production, Nginx serves https://codeviantech.com/admin directly on the same domain
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:8000';
    return [
      {
        source: '/admin',
        destination: `${adminUrl}/admin`,
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: `${adminUrl}/admin/:path*`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
