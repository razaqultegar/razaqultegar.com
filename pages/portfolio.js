import React, { Component } from 'react';
import { NextSeo } from 'next-seo';

import MainLayout from '../layouts/main-layout';
import portfolio from '../data/portfolio.json';

const url = 'https://razaqultegar.com/portfolio';
const title = 'Portfolio – Razaqul Tegar';
const description =
  'It all began with a spreadsheets app, fast and user-friendly one. That took me to a new city, new ideas, and new people.';

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            title,
            description
          }}
        />
        <MainLayout>
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
                <img src="/static/images/dewo-triatmoko.jpeg" alt="Dewo Triatmoko" />
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
        </MainLayout>
      </>
    );
  }

  renderRecentProject(portfolio) {
    return (
      <div className="recent-project" key={portfolio.title}>
        <a href={portfolio.link} key={portfolio.title}>
          {portfolio.title}
        </a>{' '}
        — {portfolio.description}
      </div>
    );
  }
}
