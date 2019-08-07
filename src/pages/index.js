import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PageHeader from "../components/PageHeader";
import PostListing from "../components/PostListing";
import Layout from "../layout";
import config from "../utils/SiteConfig";

export default class Index extends Component {
  state = {
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges
  };

  render() {
    const { filteredPosts } = this.state;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Full Stack Developer`} />
        <PageHeader>
          <h1>Halo, saya Razaqul Tegar </h1>
          <h2>Saya seorang Full Stack Developer, perokok aktif, kutu buku musiman, kerap berkegiatan di alam terbuka dan sesekali menangkap gerak dengan kamera ponselnya.</h2>
        </PageHeader>
        <hr />
        <div className="columns">
          <div className="">
            <h3>Artikel</h3>
            <PostListing postEdges={filteredPosts} />
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 180)
          fields {
            slug
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            template
          }
        }
      }
    }
  }
`;
