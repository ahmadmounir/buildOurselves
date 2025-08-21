import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com', 'vkrschpknukwmhmybfhd.supabase.co'],
  },
  // Disable static optimization for dynamic content
  output: undefined,
};

export default nextConfig;
