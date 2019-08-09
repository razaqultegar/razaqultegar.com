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
          desc: pageEdges.node.frontmatter.desc
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
              <span> - {page.desc}</span>
            </li>
          );
        })}
        <li>
          <a href="https://anchor.fm/skod">Podcast SKOD</a><span> - Kanal podcast tongkrongan saya</span>
        </li>
      </ul>
    );
  }
}
