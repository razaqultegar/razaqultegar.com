import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Layout from '../styles/index';
import BurgerMenu from './burger-menu';
import Menu from './menu';

export default class SimpleLayout extends Component {
  render() {
    const classes = ['simple-layout', this.props.name || ''];

    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Layout>
        <div className={classes.join(' ')}>
          <Helmet title={this.props.title}>
            <meta name="description" content={this.props.desc} />
            <meta property="og:title" content={this.props.title} />
            <meta property="og:type" content={this.props.type} />
            <meta property="og:title" content={this.props.title} />
            <meta property="og:url" content={this.props.url || 'https://razaqultegar.com'} />
            <meta property="og:description" content={this.props.desc} />
            <meta property="og:image" content={this.props.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@razaqultegar" />
            <meta name="twitter:creator" content="@razaqultegar" />
            <meta name="twitter:title" content={this.props.title} />
            <meta name="twitter:description" content={this.props.desc} />
            <meta name="twitter:image" content={this.props.image} />
            <link rel="canonical" href={this.props.url || 'https://razaqultegar.com'} />
            <link rel="icon" type="image/png" href="/icons/index.jpg" />
          </Helmet>
          <BurgerMenu location={this.props.location} />
          <Menu location={this.props.location} />
          <div className={`x-viewport x-auto pt4 ${this.props.fullwidth ? 'x-fullwidth' : ''}`}>
            {this.props.children}
          </div>
          <footer className="pv4 x-sans f4 mid-gray footer">
            <div className="x-viewport">
              <a href="https://github.com/razaqultegar" target="_blank" rel="noopener noreferrer">Github</a>
              <i />
              <a href="https://twitter.com/razaqultegar" target="_blank" rel="noopener noreferrer">Twitter</a>
              <button onClick={scrollTop} className="top">
                ↑
              </button>
            </div>
          </footer>
        </div>
      </Layout>
    );
  }
}
