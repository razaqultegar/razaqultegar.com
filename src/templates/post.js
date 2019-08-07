import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../utils/SiteConfig";

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout location={this.props.location} type="article">
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <section id="main">
          <h1 id="title">{post.title}</h1>
          <span id="date">{post.date}</span>
          <div>
            <article
              id="content"
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            />
          </div>
        </section>
        <aside id="meta">
          <section>
            <h4 id="date">{post.date}</h4>
          </section>
        </aside>
        <hr/><br/>
        <a href="/">&lt;&lt; Kembali ke Halaman Awal</a>
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        slug
        date(formatString: "dddd, MMMM DD, YYYY")
        template
      }
      fields {
        slug
        date(formatString: "dddd, MMMM DD, YYYY")
      }
    }
  }
`;
;
