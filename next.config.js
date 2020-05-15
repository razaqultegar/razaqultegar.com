const bundleAnalyzer = require('@next/bundle-analyzer');
const nextMDX = require('@next/mdx');

const withMDX = nextMDX({
  extension: /\.mdx?$/
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));
