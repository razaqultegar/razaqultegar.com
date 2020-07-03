const nextMDX = require('@next/mdx');
const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = nextMDX({
  extension: /[/\\](pages|article|components)[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const nextConfig = {
  pageExtensions: ['js', 'mdx']
};

module.exports = withMDX(nextConfig);
