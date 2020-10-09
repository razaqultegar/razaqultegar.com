import React, { Component } from 'react';
import { withPrefix } from 'gatsby';

export default class HTML extends Component {
  render() {
    const {
      body,
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      postBodyComponents
    } = this.props;

    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#da532c" />
          {process.env.GOOGLE_SITE_VERIFICATION && (
            <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
          )}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={withPrefix('/favicons/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={withPrefix('/favicons/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={withPrefix('/favicons/favicon-16x16.png')}
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#da532c" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
