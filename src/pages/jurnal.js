import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import PageHeader from '../components/page-header';
import SimpleLayout from '../components/simple-layout';

export default class Jurnal extends Component {
  render() {
    return (
      <SimpleLayout
        name="jurnal"
        location={this.props.location}
        type="website"
        title={`Jurnal | ${this.props.data.site.siteMetadata.title} - ${this.props.data.site.siteMetadata.description}`}
        desc="Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Web Developer."
        url="https://razaqultegar.com/jurnal"
        image="/icons/jurnal.png"
      >
        <PageHeader image="/icons/jurnal.png">
          Catatan tentang membangun perangkat lunak. Mencari apa yang belum saya ketahui. Teknologi,
          Linux, dan perjalanan yang jarang.
        </PageHeader>

        {this.renderRecentlyPosted(this.props.data.allMarkdownRemark.edges.slice(0, 3))}
        {this.renderArchive(this.props.data.allMarkdownRemark.edges.slice(3))}
      </SimpleLayout>
    );
  }

  renderArchive(posts) {
    return (
      <section className="section archive x-auto">
        <ul className="list pl0">
          {posts.map(post => {
            return [
              <li className="x-sans mid-gray mv4">
                <Link
                  className="x-sans no-underline dark-gray hover-near-black f4 lh-copy"
                  to={post.node.frontmatter.path}
                  key={post.node.id}
                >
                  <aside className="silver x-mono">
                    {new Date(post.node.frontmatter.date).getFullYear()}
                  </aside>
                  <main>{post.node.frontmatter.title}</main>
                </Link>
              </li>
            ];
          })}
        </ul>
      </section>
    );
  }

  renderRecentlyPosted(posts) {
    return (
      <div className="featured pv4">
        <h1 className="x-sans fw3 tc pv0 mid-gray">Jurnal Terbaru</h1>
        <div className="x-grid-3 featured-grid mt4">
          {posts.map(post => {
            const bg = {
              backgroundImage: `url(${post.node.frontmatter.image})`
            };

            return (
              <Link
                to={post.node.frontmatter.path}
                className="no-underline dark-gray hover-near-black"
                key={post.node.id}
              >
                <header style={bg} className="cover br3 bg-center" />
                <h2 className="x-sans f3 fw5 tc mb0">{post.node.frontmatter.title}</h2>
                <h3 className="x-serif f5 tc mt2 mid-gray lh-copy">{post.node.frontmatter.desc}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query JurnalQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            desc
            image
            path
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;
