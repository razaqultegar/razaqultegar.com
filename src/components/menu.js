import React, { Component } from 'react';
import { Link } from 'gatsby';

import links from '../menu.json';

export default class Menu extends Component {
  render() {
    return (
      <header className="menu x-sans f4 fw4">
        <div className="inner pb4 relative x-viewport">
          <Link className="absolute x-inherit hover-near-black no-underline gray" to="/">
            Razaqul Tegar
          </Link>
          <div className="links tr">
            {links.map((l, i) => this.renderLink(l, i))}
            <a
              href="https://github.com/razaqultegar/notebook"
              className="x-inherit mh3 no-underline hover-near-black gray x-inherit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notebook
            </a>
          </div>
          <div className="x-clear" />
        </div>
      </header>
    );
  }

  renderLink(l) {
    const location = this.props.location && this.props.location.pathname;

    const render = /^\w+:/.test(l.to) ? this.renderGlobalLink : this.renderLocalLink;

    return [render.call(this, l.to, l.title, location === l.to || location === l.to + '/')];
  }

  renderGlobalLink(to, title, selected) {
    return (
      <Link
        className={this.renderLinkClass(selected)}
        to={to}
        key={title}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    );
  }

  renderLocalLink(to, title, selected) {
    return (
      <Link className={this.renderLinkClass(selected)} to={to} key={title}>
        {title}
      </Link>
    );
  }

  renderLinkClass(selected) {
    const classes = ['x-inherit', 'mh3', 'no-underline'];

    if (selected) {
      classes.push('hover-near-black', 'near-black', 'x-default-cursor');
    } else {
      classes.push('hover-near-black', 'gray', 'x-inherit');
    }

    return classes.join(' ');
  }
}
