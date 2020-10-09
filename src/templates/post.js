import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import readingTime from 'reading-time';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Comment from '../components/Comment';

export default function PostTemplate({ data, location }) {
  const { siteMetadata } = data.site;
  const post = data.markdownRemark;
  const thumbnail = post.frontmatter.thumbnail;
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement('script');
    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute('repo', 'razaqultegar/comments');
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('id', 'utterances');
    commentScript.setAttribute('theme', 'github-light');
    commentScript.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []); // eslint-disable-line

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
      <article className="post-item">
        <header className="post-header">
          <h1>{post.frontmatter.title}</h1>
          <p>
            <span style={{ textTransform: 'capitalize' }}>{post.frontmatter.category}</span> -{' '}
            <Link to={post.fields.slug}>
              <time>{post.frontmatter.date}</time>
            </Link>{' '}
            by {siteMetadata.author} - {readingTime(post.html).text}
          </p>
          {thumbnail ? (
            <Img
              fluid={thumbnail.childImageSharp.fluid}
              className="post-thumbnail"
              alt={post.frontmatter.title}
            />
          ) : null}
        </header>
        <div className="markup" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <div id="comments-wrapper">
        <div className="markup comments-title">
          <h2>Comments</h2>
        </div>
        <Comment commentBox={commentBox} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        category
        thumbnail {
          childImageSharp {
            fixed(width: 1200, height: 600) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
