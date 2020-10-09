import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

export default function PostTemplate({ data, location }) {
  const { siteMetadata } = data.site;
  const post = data.markdownRemark;
  const thumbnail = post.frontmatter.thumbnail;

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${siteMetadata.title}`}>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={siteMetadata.author} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${location ? location.pathname : ''}`}
        />
        {thumbnail && (
          <meta
            property="og:image"
            content={`${siteMetadata.siteUrl}${thumbnail.childImageSharp.fixed.src}`}
          />
        )}
        {thumbnail && (
          <meta property="og:image:width" content={`${thumbnail.childImageSharp.fixed.width}`} />
        )}
        {thumbnail && (
          <meta property="og:image:height" content={`${thumbnail.childImageSharp.fixed.height}`} />
        )}
        <meta property="article:author" content={siteMetadata.author} />
        <meta property="article:published_time" content={post.frontmatter.date} />
        <meta property="article:section" content={post.frontmatter.category} />
      </Helmet>
      <div className="markup page-header">
        <h1>{post.frontmatter.title}</h1>
      </div>
      {thumbnail ? (
        <Img
          fluid={thumbnail.childImageSharp.fluid}
          className="page-thumbnail"
          alt={post.frontmatter.title}
        />
      ) : null}
      <div className="markup" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        layout
        thumbnail {
          childImageSharp {
            fixed(width: 482, height: 482) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 482) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
