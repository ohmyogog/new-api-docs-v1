import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // Enable static export for deployment
  output: 'export',

  // Improves compatibility with static file servers
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optimize bundle size
  compiler: {
    // Remove console logs in production
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },

  // Experimental optimizations
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['fumadocs-ui', 'fumadocs-core', 'lucide-react'],
  },

  // Production source maps for debugging
  productionBrowserSourceMaps: false,
};

export default withMDX(config);
