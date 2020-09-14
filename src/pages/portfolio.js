import React, { Component } from 'react';
import { graphql } from 'gatsby';

import SimpleLayout from '../components/simple-layout';
import PageHeader from '../components/page-header';
import portfolio from '../portfolio.json';

export default class Portfolio extends Component {
  render() {
    const title = `Portfolio | ${this.props.data.site.siteMetadata.title} - ${this.props.data.site.siteMetadata.description}`;

    return (
      <SimpleLayout
        name="software"
        location={this.props.location}
        type="website"
        title={title}
        desc="Razaqul Tegar Portfolio"
        image="/icons/portfolio.png"
      >
        <PageHeader image="/icons/portfolio.png">
          Semuanya dimulai dengan aplikasi, cepat dan ramah pengguna. Itu membawa saya ke kota baru,
          ide-ide baru, dan orang-orang baru.
        </PageHeader>

        {this.renderProjects()}
      </SimpleLayout>
    );
  }

  renderProjects() {
    return (
      <main className="projects pv4 x-sans">
        <h1 className="x-sans fw3 tc pv0 mid-gray">Portfolio</h1>

        <div className="recent">
          <h3>Aktif Bekerja</h3>
          {portfolio.recent.map(p => this.renderRecentProject(p))}
        </div>

        <div className="clients">
          <h3>Klien Terbaru Saya Mengatakan:</h3>
          <div className="superhuman">
            <img src="https://cldup.com/Wj7n50mV13.png" alt="" />
            <span className="quote">&#x201c;</span>
            <p>
              Azer is a phenomenal problem solver, and a great asset on any engineering team. He
              worked with us on a very high risk project, and it's now in production for all of our
              users.
              <br />
              <br />
              Conrad Irwin
              <br />
              CTO of Superhuman
            </p>

            <div className="x-clear" />
          </div>
        </div>

        <div className="opensource">
          <h3>Sumber Terbuka</h3>

          {portfolio.opensource.map(p => this.renderRecentProject(p))}

          <a href="https://github.com/azer" className="github">
            Selengkapnya di Github &#10230;
          </a>
        </div>

        <div className="tea">
          <div className="triangle" />
          <img src="https://c1.staticflickr.com/5/4464/37192502570_f88f06f162_z.jpg" alt="" />
          <div className="circle" />
          <div className="caption">
            This is my home-office in Berlin, where I turn tea into software.
          </div>
        </div>

        <div className="x-clear" />

        <div className="websites">
          <h3>Website</h3>

          {portfolio.websites.map(p => this.renderRecentProject(p))}
        </div>

        <div className="old">
          <h3>Tua / Mati</h3>

          {portfolio.old.map(p => this.renderRecentProject(p))}
        </div>
      </main>
    );
  }

  renderRecentProject(portfolio) {
    return (
      <div className="recent-project">
        {portfolio.logo ? this.renderLogo(portfolio) : null}
        {portfolio.screenshot ? this.renderScreenshot(portfolio) : null}
        <a href={portfolio.link}>{portfolio.title}</a>—{portfolio.description}
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
  query PortfolioQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
