import type { NextConfig } from "next";
import { NEXT_PUBLIC_BACKEND_URL } from "frontend/.env"; // Adjust the import based on your environment variable setup

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/chatbot/chatResponse',
        destination: `${NEXT_PUBLIC_BACKEND_URL}/api/chatbot/chatResponse`, // Your Express backend endpoint
      },
    ];
  },
};

export default nextConfig;
