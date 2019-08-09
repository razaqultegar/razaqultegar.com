import React, { Component } from "react";
import { Link } from "gatsby";

export default class PageListing extends Component {
  getPageList() {
    const { pageEdges } = this.props;
    const pageList = pageEdges
      .filter(pageEdges => pageEdges.node.frontmatter.template === "page")
      .map(pageEdges => {
        return {
          path: pageEdges.node.fields.slug,
          title: pageEdges.node.frontmatter.title,
        };
      });
    return pageList;
  }

  render() {
    const pageList = this.getPageList();

    return (
      <ul>
        {pageList.map(page => {
          return (
            <li key={page.title}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          );
        })}
        <li><a href="https://anchor.fm/skod">Podcast</a></li>
      </ul>
    );
  }
}
