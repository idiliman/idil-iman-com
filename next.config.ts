import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns:
    {
      protocol: "https",
      hostname: "avatars.githubusercontent.com",
      pathname: "/u/54613218",
    },

    protocol: "https"
    hostname: "media.licdn.com",
    pathname: "/dms/image/v2/**",
      
    ],
}
};

export default nextConfig;
