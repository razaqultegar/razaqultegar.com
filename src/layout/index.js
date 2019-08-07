import React, { Component } from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
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
        <Navigation menuLinks={config.menuLinks} />
        <main>{children}</main>
      </>
    );
  }
}
