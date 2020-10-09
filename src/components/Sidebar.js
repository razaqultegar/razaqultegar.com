import React, { Component } from 'react';
import { Link } from 'gatsby';

import menu from '../data/menu.json';

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <div id="menus" className="sidebar-menu">
          <ul className="primary">{menu.primary.map(l => this.renderLink(l))}</ul>
          <ul className="secondary">{menu.secondary.map(l => this.renderLink(l))}</ul>
        </div>
        <div className="widget">
          <div id="blm">
            <span>
              <span className="blm-wrap">
                <a
                  href="https://blacklivesmatter.com"
                  className="blm-img"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Black_Lives_Matter_logo.svg"
                    alt="Black Lives Matter"
                    border="0"
                    style={{ maxWidth: '130px' }}
                  />
                </a>
                <a href="https://blacklivesmatter.com" target="_blank" rel="noopener noreferrer">
                  This website fully supports the Black Lives Matter movement
                </a>
              </span>
            </span>
          </div>
        </div>
      </nav>
    );
  }

  renderLink(l) {
    const location = this.props.location && this.props.location.pathname;
    const render = /^\w+:/.test(l.to) ? this.renderGlobalLink : this.renderLocalLink;

    return [render.call(this, l.to, l.title, location === l.to || location === l.to + '/')];
  }

  renderLocalLink(to, title) {
    return (
      <li key={title}>
        <Link to={to}>{title}</Link>
      </li>
    );
  }

  renderGlobalLink(to, title) {
    return (
      <li key={title}>
        <a href={to} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    );
  }
}
