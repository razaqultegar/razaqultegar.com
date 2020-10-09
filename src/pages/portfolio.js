import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import portfolio from '../data/portfolio.json';

export default class Portfolio extends Component {
  render() {
    const { data } = this.props;
    const siteMetadata = data.site.siteMetadata;

    return (
      <Layout>
        <Helmet
          title={`Portfolio | ${siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: siteMetadata.description
            },
            { property: 'og:title', content: 'Portfolio' },
            {
              property: 'og:description',
              content: siteMetadata.description
            }
          ]}
        />
        <div className="markup page-header">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio">
          <div className="recent">
            <h3>Actively Working On</h3>
            {portfolio.recent.map(p => this.renderRecentProject(p))}
          </div>
          <div className="clients">
            <h3>My Client Says:</h3>
            <div className="superhuman">
              <img src="/images/dewo-triatmoko.jpeg" alt="Dewo Triatmoko" />
              <span className="quote">&#x201c;</span>
              <p>
                Tegar is a young person who has the potential and talent in problem solving. He
                worked with us in a very high-risk project, and now it is running to manage all of
                our customers.
                <br />
                <br />
                Dewo Triatmoko
                <br />
                Operations Head BTPN Syariah
              </p>
              <div style={{ clear: 'both' }} />
            </div>
          </div>
          <div className="opensource">
            <h3>Open Source</h3>
            {portfolio.opensource.map(p => this.renderRecentProject(p))}
            <a href="https://github.com/razaqultegar" className="github">
              More On Github &#10230;
            </a>
          </div>
          <div style={{ clear: 'both' }} />
          <div className="websites">
            <h3>Websites</h3>
            {portfolio.websites.map(p => this.renderRecentProject(p))}
          </div>
          <div className="old">
            <h3>Other</h3>
            {portfolio.others.map(p => this.renderRecentProject(p))}
          </div>
        </div>
      </Layout>
    );
  }

  renderRecentProject(portfolio) {
    return (
      <div className="recent-project" key={portfolio.title}>
        {portfolio.logo ? this.renderLogo(portfolio) : null}
        {portfolio.screenshot ? this.renderScreenshot(portfolio) : null}
        <a href={portfolio.link} key={portfolio.title}>
          {portfolio.title}
        </a>{' '}
        — {portfolio.description}
      </div>
    );
  }

  renderLogo(portfolio) {
    return (
      <div className="logo">
        <img src={portfolio.logo} alt={portfolio.title} />
      </div>
    );
  }

  renderScreenshot(portfolio) {
    const css = {
      backgroundImage: `url(${portfolio.screenshot})`
    };

    return (
      <div className="screenshot">
        <div className="screenshot-img" style={css} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query PortfolioPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
