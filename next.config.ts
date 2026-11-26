import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `pnpm build` writes plain HTML/assets to `out/`,
  // which Cloudflare Pages serves directly (no Next.js adapter needed).
  output: "export",
};

export default nextConfig;
