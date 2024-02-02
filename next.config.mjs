const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "avatars.githubusercontent.com",
    }
  ]
};

const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
};

export default nextConfig;
