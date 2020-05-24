const nextMDX = require('@next/mdx');
const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = nextMDX({
  extension: /[/\\](pages|article|components)[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const nextConfig = {
  pageExtensions: ['js', 'mdx'],
  experimental: {
    modern: true,
    redirects() {
      return [
        {
          source: '/solved-ireport-tidak-fungsi-di-mode-jar/',
          permanent: true,
          destination: '/article/solved-ireport-tidak-fungsi-di-mode-jar'
        }
      ];
    }
  }
};

module.exports = withMDX(nextConfig);
