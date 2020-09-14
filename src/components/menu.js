import React, { Component } from 'react';
import { Link } from 'gatsby';

import links from '../menu.json';

export default class Menu extends Component {
  render() {
    return (
      <header className="menu x-sans f4 fw4">
        <div className="inner pb4 relative x-viewport">
          <a className="absolute x-inherit hover-near-black no-underline gray" href="/">
            Razaqul Tegar
          </a>
          <div className="links tr">
            {this.props.footer ? this.renderLink({ to: '/', title: 'Homepage' }) : null}
            {links.map((l, i) => this.renderLink(l, i))}
          </div>
          <div className="x-clear" />
        </div>
      </header>
    );
  }

  renderLink(l) {
    const location = this.props.location && this.props.location.pathname;

    if (l.className === 'footer-link' && !this.props.footer) return;

    const render = /^\w+:/.test(l.to) ? this.renderGlobalLink : this.renderLocalLink;

    return [render.call(this, l.to, l.title, location === l.to || location === l.to + '/')];
  }

  renderGlobalLink(to, title, selected) {
    return (
      <a className={this.renderLinkClass(selected)} href={to} target="_blank" rel="noreferrer">
        {title}
      </a>
    );
  }

  renderLocalLink(to, title, selected) {
    return (
      <Link className={this.renderLinkClass(selected)} to={to}>
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
