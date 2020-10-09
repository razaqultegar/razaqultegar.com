import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import readingTime from 'reading-time';

import Layout from '../components/Layout';
import Pager from '../components/Pager';

export default function Archive({ data, pageContext }) {
  const siteMetadata = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet
        title={`Journal | ${siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: siteMetadata.description
          },
          { property: 'og:title', content: 'Journal' },
          {
            property: 'og:description',
            content: siteMetadata.description
          }
        ]}
      />
      {posts.map(({ node }) => {
        return (
          <article key={node.fields.slug} style={{ marginBottom: '3rem' }}>
            <div className={`border-${node.frontmatter.category}`} />
            <header className="post-header">
              <Link to={node.fields.slug}>
                <h1>{node.frontmatter.title}</h1>
              </Link>
              <p>
                <span style={{ textTransform: 'capitalize' }}>{node.frontmatter.category}</span> -{' '}
                <Link to={node.fields.slug}>
                  <time>{node.frontmatter.date}</time>
                </Link>{' '}
                by {siteMetadata.author} - {readingTime(node.html).text}
              </p>
            </header>
            <div className="post-content">
              <p>{node.excerpt}</p>
              <p style={{ marginTop: '1.5rem' }}>
                <Link to={node.fields.slug}>Read more</Link>
              </p>
            </div>
          </article>
        );
      })}
      <Pager pageContext={pageContext} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ArchivePageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { in: "post" } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 180)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            layout
          }
        }
      }
    }
  }
`;
