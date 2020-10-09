const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pagePage = path.resolve('./src/templates/page.js');
  const blogPage = path.resolve('./src/templates/post.js');

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                layout
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const all = result.data.allMarkdownRemark.edges;
  const pages = all.filter(post => post.node.frontmatter.layout === 'page');
  const posts = all.filter(post => post.node.frontmatter.layout === 'post');

  pages.forEach(page => {
    createPage({
      path: page.node.fields.slug,
      component: pagePage,
      context: {
        slug: page.node.fields.slug
      }
    });
  });

  paginate({
    createPage,
    items: all,
    itemsPerPage: 10,
    pathPrefix: '/journal',
    component: path.resolve('src/templates/archive.js')
  });

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: blogPage,
      context: {
        slug: post.node.fields.slug
      }
    });
  });
};

const createNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
      slug = `/${node.frontmatter.slug}`;
    } else {
      slug = `/${parsedFilePath.dir}`;
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug
    });
  }
};

exports.createPages = createPages;
exports.onCreateNode = createNode;
