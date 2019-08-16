import React, { Component } from "react";
import config from "../utils/SiteConfig";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; 2018 Razaqul Tegar | <a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a> • <a href={config.repo} target="_blank" rel="noopener noreferrer">Kode sumber</a></p>
      </footer>
    );
  }
}
