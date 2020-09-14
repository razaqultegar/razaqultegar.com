const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/post.js');

    resolve(
      graphql(`
        {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
            edges {
              node {
                frontmatter {
                  path
                  title
                  desc
                  date(formatString: "DD MMMM YYYY", locale: "id")
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }, i) => {
          console.log('create page', node.frontmatter.path);

          createPage({
            path: node.frontmatter.path,
            component: blogPost,
            context: {}
          });
        });
      })
    );
  });
};
