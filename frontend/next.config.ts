import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/chatbot/chatResponse',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chatbot/chatResponse`, // Your Express backend endpoint
      },
    ];
  },
};

export default nextConfig;
