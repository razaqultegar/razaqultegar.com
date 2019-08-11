import React, { Component } from "react";
import config from "../utils/SiteConfig";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; 2018 Razaqul Tegar | <a href="/rss.xml">RSS</a> • <a href={config.repo}>Kode sumber</a></p>
      </footer>
    );
  }
}
