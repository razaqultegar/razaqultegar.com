const rehypePrism = require('@mapbox/rehype-prism');
const nextMDX = require('@next/mdx');
const bundleAnalyzer = require('@next/bundle-analyzer');

const withMDX = nextMDX({
  extension: /[/\\](pages|blog|telemetry|components[/\\](home))[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx'],
  experimental: {
    modern: true,
    redirects() {
      return [
        {
          source: '/solved-ireport-tidak-fungsi-di-mode-jar/',
          permanent: true,
          destination: '/article/solved-ireport-tidak-fungsi-di-mode-jar'
        }
      ]
    }
  }
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));
