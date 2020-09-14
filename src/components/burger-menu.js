import React, { Component } from 'react';
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
            <a href="/">Razaqul Tegar</a>
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
    if (l.className === 'footer-link') return;

    return (
      <a className="button x-sans" href={l.to}>
        {l.title}
      </a>
    );
  }
}
