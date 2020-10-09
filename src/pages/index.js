import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

export default class Home extends Component {
  render() {
    const { data } = this.props;
    const siteMetadata = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;

    const Intro = () => (
      <div className="intro">
        <p>
          I'm Razaqul, Full Stack Developer and Development Lead of{' '}
          <a href="https://limbodigital.id">@DLD</a> where I worked for this moment. I also a former
          intern at <a href="https://turing.com">@turing</a> (working on remotely). In my free time
          I've built and maintain various open-source projects of my own like: this Websites,
          Angular Electron Kit, Simple Slug Packages and any more. You can find me on{' '}
          <a href="https://twitter.com/razaqultegar">Twitter</a> or{' '}
          <a href="mailto:myrazaqul@gmail.com">write an email</a>. (I'm not on Facebook, LinkedIn,
          or Instagram).
        </p>
      </div>
    );

    return (
      <Layout>
        <Helmet
          title={siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: siteMetadata.description
            },
            { property: 'og:title', content: 'Home' },
            {
              property: 'og:description',
              content: siteMetadata.description
            }
          ]}
        />
        <Intro />
        <div
          style={{
            height: '6px',
            backgroundColor: '#f16563',
            boxShadow: '0 3px 0 #f16563dd, 0 3px 0 #000',
            marginBottom: '1.25rem'
          }}
        />
        <div className="highlights-wrapper">
          <div className="highlights-content">
            <h1>Annual Recap</h1>
          </div>
          <div className="highlights-content">
            <h2>
              <Link to="/journal" className="hover-near-black gray x-inherit no-underline">
                see all journal
              </Link>
            </h2>
          </div>
        </div>
        <section className="x-grid-4 highlights">
          {posts.map(({ node }) => {
            const thumbnail = node.frontmatter.thumbnail;
            return (
              <Link to={node.fields.slug} className="highlighted-post" key={node.fields.slug}>
                <header>
                  <h4>{new Date(node.frontmatter.date).getFullYear()}</h4>
                  <h2>{node.frontmatter.title}</h2>
                </header>
                <div className="image">
                  <Img
                    fluid={thumbnail.childImageSharp.fluid}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    alt={node.frontmatter.title}
                  />
                </div>
              </Link>
            );
          })}
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { highlighted: { in: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            highlighted
            title
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1140) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
