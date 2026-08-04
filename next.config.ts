import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
        // Cloudflare-only helper files import `cloudflare:workers`; the Sites
        // build validates them separately, while Pages exports only `app/`.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
