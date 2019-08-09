import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../utils/SiteConfig";
import "../styles/main.scss";

export default class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <footer>
          <p>
            &copy; 2018 Razaqul Tegar | <a href="/rss.xml">RSS</a> • <a href={config.repo}>View Source</a>
          </p>
        </footer>
      </>
    );
  }
}
