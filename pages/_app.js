import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import * as gtag from '../lib/analytics';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import '../styles/main.css';
import '../styles/fonts.css';

const App = ({ Component, pageProps }) => {
  Router.events.on('routeChangeComplete', url => gtag.pageview(url));

  return (
    <MDXProvider>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#da532c" name="theme-color" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
        {process.env.GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        )}
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
