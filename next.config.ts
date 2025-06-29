import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  devIndicators: false,
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
