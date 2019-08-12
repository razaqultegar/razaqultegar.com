import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import config from "../utils/SiteConfig";

export default class PageTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark;
    const page = postNode.frontmatter;

    if (!page.id) {
      page.id = slug
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${page.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <main className="post">
          <div className="entry-title">
            <h1 className="post-title">{page.title}</h1>
            <p>{page.desc}</p>
          </div>
          <article
            id="content"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
        </main>
        <br />
        <a href="/">⤌ Kembali</a>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        desc
        slug
        template
        date(formatString: "dddd, MMMM DD, YYYY")
      }
      fields {
        slug
        date(formatString: "dddd, MMMM DD, YYYY")
      }
    }
  }
`;
