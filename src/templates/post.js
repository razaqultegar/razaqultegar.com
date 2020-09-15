import React, { Component } from 'react';
import { graphql } from 'gatsby';

import SimpleLayout from '../components/simple-layout';

import 'prismjs/themes/prism-solarizedlight.css';

export default class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <SimpleLayout
        name="blog-post"
        location={this.props.location}
        type="article"
        title={`${post.frontmatter.title} | ${siteTitle} - ${siteDescription}`}
        url={`https://razaqultegar.com${post.frontmatter.path}`}
        desc={post.frontmatter.desc}
        image={post.frontmatter.image}
      >
        {this.renderTitle()}
        {this.renderImage()}
        <div className="post x-serif" dangerouslySetInnerHTML={{ __html: post.html }} />
      </SimpleLayout>
    );
  }

  renderTitle() {
    const post = this.props.data.markdownRemark.frontmatter;

    return [
      <h1 className="x-headline center fw7 tc f1 near-black mt0 mb3">{post.title}</h1>,
      <h2 className="x-sans center fw4 tc f4 mid-gray mv2">
        {post.desc ? <span>{post.desc}</span> : null}
      </h2>,
      <h2 className="x-sans center fw4 tc f4 silver mv0">{post.date}</h2>
    ];
  }

  renderImage() {
    const post = this.props.data.markdownRemark.frontmatter;

    if (!post.image || post.hideImage || !post.image.trim())
      return <div className="post-image-space" />;

    const css = {
      backgroundImage: `url(${post.image})`,
      height: `400px`
    };

    if (post.imageSize) {
      css.backgroundSize = post.imageSize;
    }

    return (
      <div className={'post-image ' + (post.imageCaption ? 'has-caption' : '')} style={css}>
        {post.imageCaption ? <div className="post-image-caption">{post.imageCaption}</div> : null}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        desc
        image
        hideImage
        path
        date(formatString: "DD MMMM YYYY", locale: "id")
      }
    }
  }
`;
