import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import config from "../utils/SiteConfig";

export default class PageTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext;
    const pageNode = this.props.data.markdownRemark;
    const page = pageNode.frontmatter;

    if (!page.id) {
      page.id = slug;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${page.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <main className="post">
          <div className="entry-title">
            <h1 className="post-title">{page.title}</h1>
          </div>
          <article id="content" dangerouslySetInnerHTML={{ __html: pageNode.html }} />
        </main>
        <br />
        <a href="/">&lt;&lt; Kembali ke Halaman Awal</a>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
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
