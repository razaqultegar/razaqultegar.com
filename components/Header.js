import React, { Component } from 'react';
import NextLink from 'next/link';

import menu from '../data/menu.json';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="brand">
          <figure className="brand-logos">
            <NextLink href="/" title="Razaqul Tegar" passHref>
              <a>
                <img src="/static/images/avatar.png" alt="Razaqul Tegar" />
              </a>
            </NextLink>
          </figure>
          <div className="brand-text">
            <NextLink href="/" title="Razaqul Tegar" passHref>
              <a>
                <h1>Razaqul Tegar</h1>
                <p>Full Stack Developer</p>
              </a>
            </NextLink>
          </div>
        </div>
        <nav className="mobile-menu">
          <input type="checkbox" id="mobile-menu-toggle" />
          <label htmlFor="mobile-menu-toggle" style={{ top: '-6em', right: '0' }}>
            Menu
          </label>
          <div id="menus">
            <ul className="primary">{menu.primary.map(l => this.renderLink(l))}</ul>
            <ul className="secondary">{menu.secondary.map(l => this.renderLink(l))}</ul>
          </div>
        </nav>
      </header>
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
        <NextLink href={to} passHref>
          <a>{title}</a>
        </NextLink>
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

export default Header;
