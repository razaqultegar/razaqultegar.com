import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageListing from '../components/PageListing'
import PostListing from '../components/PostListing'
import config from '../utils/SiteConfig'

export default class Index extends Component {
  state = {
    filteredPosts: this.props.data.index.edges,
    filteredPages: this.props.data.index.edges,
  }

  render() {
    const { filteredPosts, filteredPages } = this.state

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Full Stack Developer`} />
        <SEO />
        <header>
          <h1>RAZAQUL TEGAR</h1>
          <p className="header">Saya adalah pengembang dari <a href="https://www.panda.id">Panda SID</a>, Junior Full Stack Developer, perokok aktif, kutu buku musiman, dan kerap berkegiatan di alam terbuka dan sesekali menangkap gerak dengan kamera ponselnya.</p>
          <p>Anda dapat menemukan saya di <a href="https://github.com/razaqultegar/" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://twitter.com/razaqultegar" target="_blank" rel="noopener noreferrer">Twitter</a> atau bisa mengirimkan <a href="mailto:myrazaqul@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>.</p>
        </header>
        <main>
          <h2>Artikel</h2>
          <PostListing postEdges={filteredPosts} />
          <h2>Halaman</h2>
          <PageListing pageEdges={filteredPages} />
        </main>
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    index: allMarkdownRemark(
      limit: 50
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 180)
          fields {
            slug
            date(formatString: "DD MMMM YYYY", locale: "id")
          }
          frontmatter {
            title
            desc
            date(formatString: "DD MMMM YYYY", locale: "id")
            template
          }
        }
      }
    }
  }
`
