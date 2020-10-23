const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [require('remark-slug')],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: mdxContent => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})({
  webpack: config => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  }
});
