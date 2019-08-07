import React, { Component } from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import config from "../utils/SiteConfig";
import favicon from '../../static/logos/logo-48.png'
import "../styles/main.scss";

export default class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main>{children}</main>
      </>
    );
  }
}
