import React, { Component } from "react";
import Helmet from "react-helmet";
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
        {children}
      </>
    );
  }
}
