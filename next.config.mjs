/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Preserve URLs from the previous version of the site.
    return [
      { source: "/individual-therapy", destination: "/services/individual-therapy", permanent: true },
      { source: "/testing", destination: "/services/psychological-testing", permanent: true },
      { source: "/presentations", destination: "/services/consulting-speaking", permanent: true },
    ];
  },
};

export default nextConfig;
