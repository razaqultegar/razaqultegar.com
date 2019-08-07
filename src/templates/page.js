import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../utils/SiteConfig";

export default class PageTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const page = postNode.frontmatter;

    if (!page.id) {
      page.id = slug;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${page.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <section id="main">
          <h1 id="title">{page.title}</h1>
          <div>
            <article
              id="content"
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            />
          </div>
        </section>
        <aside id="meta">
          <section>
            <h4 id="date">{page.date}</h4>
          </section>
        </aside>
        <hr/><br/>
        <a href="/">&lt;&lt; Kembali ke Halaman Awal</a>
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
