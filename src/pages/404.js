import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default class Custom404 extends Component {
  render() {
    const { data } = this.props;
    const siteMetadata = data.site.siteMetadata;

    return (
      <div className="custom404-layout">
        <Helmet
          title={`Page not found | ${siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: siteMetadata.description
            },
            { property: 'og:title', content: 'Page not found' },
            {
              property: 'og:description',
              content: siteMetadata.description
            }
          ]}
        />
        <div className="custom404-wrapper">
          <div className="custom404-image">
            <img src="/images/404.png" alt="‘Computer says no’ woman from Little Britain" />
          </div>
          <div className="custom404-content">
            <h1>404</h1>
            <p>
              Computer says no. <Link to="/">Go home</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query Custom404PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
