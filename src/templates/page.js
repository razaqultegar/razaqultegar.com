import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import config from "../utils/SiteConfig";

export default class PageTemplate extends Component {
  render() {
    const pageNode = this.props.data.markdownRemark;
    const page = pageNode.frontmatter;

    return (
      <Layout>
        <Helmet>
          <title>{`${page.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <main className="post">
          <div className="entry-title">
            <h1 className="post-title">{page.title}</h1>
            <p>{page.desc}</p>
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
      html
      excerpt
      frontmatter {
        title
        desc
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
