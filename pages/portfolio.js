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
          <style jsx>{`
            .portfolio a {
              text-decoration: none;
              border-bottom: 1px dotted #ccc;
            }

            .portfolio a:hover {
              border-bottom: none;
            }

            .portfolio .clients,
            .portfolio .old,
            .portfolio .recent,
            .portfolio .websites {
              margin: 50px auto 30px;
            }

            .portfolio .recent h3,
            .portfolio .clients h3,
            .portfolio .opensource h3,
            .portfolio .websites h3,
            .portfolio .old h3 {
              color: #888;
              font-size: 16px;
              font-weight: 500;
              text-transform: uppercase;
              margin: 20px 2px;
            }

            .portfolio .clients {
              color: #333;
            }

            .portfolio .clients .superhuman {
              padding-top: 20px;
            }

            .portfolio .clients img {
              width: 100px;
              border-radius: 50%;
              float: left;
            }

            .portfolio .clients .quote {
              position: absolute;
              margin: -35px 0 0 10px;
              font: 150px Tiempos text regular;
              color: #22e9ab;
            }

            .portfolio .clients p {
              display: block;
              float: right;
              width: calc(100% - 120px);
              padding-top: 50px;
              font-weight: 500;
              font-size: 16px;
              line-height: 1.7;
              color: #666;
            }

            .portfolio .opensource {
              width: 100%;
              background: #fffbe5;
              padding: 25px 50px;
              margin: 50px 0 0;
            }

            .portfolio .opensource a.github {
              font-size: 14px;
              text-transform: uppercase;
              text-align: right;
              border: 0;
              background: transparent;
              color: #666;
              width: 215px;
            }
          `}</style>
        </MainLayout>
      </>
    );
  }

  renderRecentProject(portfolio) {
    return (
      <div key={portfolio.title} style={{ color: '#666', marginBottom: '25px', lineHeight: '1.5rem' }}>
        <a href={portfolio.link} key={portfolio.title} style={{ color: '#111', fontWeight: '500', borderBottom: '1px dotted #999892' }}>
          {portfolio.title}
        </a>{' '}
        — {portfolio.description}
      </div>
    );
  }
}
