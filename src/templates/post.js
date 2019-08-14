import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import config from "../utils/SiteConfig";

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug
    }

    return (
      <Layout location={this.props.location} type="article">
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <main className="post">
          <div className="entry-title">
            <h1 className="post-title">{post.title}</h1>
            <p>{post.date}</p>
          </div>
          <article id="content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </main>
        <br />
        <a href="/">⤌ Kembali</a>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        slug
        date(formatString: "dddd, DD MMMM YYYY", locale: "id")
        template
      }
      fields {
        slug
        date(formatString: "dddd, DD MMMM YYYY", locale: "id")
      }
    }
  }
`;
