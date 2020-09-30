import React, { Component } from 'react';
import { Link } from 'gatsby';

import links from '../menu.json';

export default class BurgerMenu extends Component {
  toggle() {
    this.setState({
      open: !(this.state && this.state.open)
    });
  }

  render() {
    const classes = ['burger-menu', 'x-sans'];
    if (this.state && this.state.open) classes.push('open');

    return (
      <div className={classes.join(' ')}>
        <button className="hamburger" aria-label="Toggle Menu" onClick={() => this.toggle()} />
        <div className="header">
          <h1>
            <Link to="/">Razaqul Tegar</Link>
          </h1>
        </div>

        <div className="burger-content">
          <h2 className="x-mono">Menu</h2>
          {links.map(l => this.renderLink(l))}
        </div>
      </div>
    );
  }

  renderLink(l) {
    return (
      <Link className="button x-sans" to={l.to} key={l.title}>
        {l.title}
      </Link>
    );
  }
}
