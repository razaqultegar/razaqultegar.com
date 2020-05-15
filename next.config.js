const bundleAnalyzer = require('@next/bundle-analyzer');
const nextMDX = require('@next/mdx');

const withMDX = nextMDX({
  extension: /[/\\](pages|components[/\\])[/\\](.+)\.mdx?$/
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  pageExtensions: ['js', 'mdx']
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));
