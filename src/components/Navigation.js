import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navigation extends Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <header>
        <nav>
          <a href="/">Razaqul Tegar</a>
        </nav>
        <div className="right">
          {menuLinks.map(link => (
            <Link key={link.name} to={link.link} className="menu-link">
              {link.name}
            </Link>
          ))}
        </div>
      </header>
    );
  }
}
