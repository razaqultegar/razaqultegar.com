import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../utils/SiteConfig";
import Footer from "./Footer";
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
        <Footer />
      </>
    );
  }
}
