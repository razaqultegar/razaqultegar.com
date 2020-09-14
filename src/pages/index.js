import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import SimpleLayout from '../components/simple-layout';
import PageHeader from '../components/page-header';

export default class Homepage extends Component {
  highlightedPosts() {
    return this.props.data.allMarkdownRemark.edges.filter(e => {
      return e.node.frontmatter.highlighted;
    });
  }

  recentPosts() {
    return this.props.data.allMarkdownRemark.edges.slice(0, 5);
  }

  render() {
    return (
      <SimpleLayout
        name="index"
        location={this.props.location}
        title={`${this.props.data.site.siteMetadata.title} - ${this.props.data.site.siteMetadata.description}`}
        desc="Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Web Developer."
        type="website"
        image="/icons/index.jpg"
      >
        <PageHeader image="/icons/index.jpg">
          <strong>Razaqul Tegar</strong> – Full Stack Developer. Pernah magang di{' '}
          <a href="https://turing.com" target="_blank" rel="noreferrer">
            @turing
          </a>
          . Kepala Pengembang di{' '}
          <a href="https://limbodigital.id" target="_blank" rel="noreferrer">
            @dld
          </a>
          . Bekerja Global, Bangga Indonesia 🇮🇩
        </PageHeader>
        <div className="pt4 highlights-wrapper">
          <div className="dt w-100">
            <div className="dtc">
              <h1 className="x-sans fw3 pv0 mid-gray">Rekap Tahunan</h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">
                <Link
                  to="jurnal"
                  key="jurnal"
                  className="hover-near-black gray x-inherit no-underline"
                >
                  semua jurnal
                </Link>
              </h2>
            </div>
          </div>
          <section className="x-grid-3 mt4 highlights">
            {this.highlightedPosts().map((post, ind) => this.renderHighlightedPost(post, ind))}
          </section>
        </div>
      </SimpleLayout>
    );
  }

  renderHighlightedPost(post) {
    const img = {
      backgroundImage: `url(${post.node.frontmatter.image})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };

    return (
      <a href={post.node.frontmatter.path} className="highlighted-post x-noborder relative">
        <header className="absolute top-0 tc bg-near-white w-100">
          <h4 className="x-mono silver mt0 mb1">
            {new Date(post.node.frontmatter.date).getFullYear()}
          </h4>
          <h2 className="f5 lh-copy ph3 mid-gray w-95">{post.node.frontmatter.title}</h2>
        </header>
        <div className="w-100 image">
          <div className="w-100 h-100" style={img} />
        </div>
      </a>
    );
  }
}

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            highlighted
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;
