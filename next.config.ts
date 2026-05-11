import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  experimental: {
    inlineCss: true,
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ['react', 'framer-motion', 'lucide-react'],

  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(withNextIntl(nextConfig));
