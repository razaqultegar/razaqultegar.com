import Head from 'next/head';
import Router from 'next/router';
import { trackPageview } from '../lib/analytics';

Router.events.on('routeChangeComplete', url => {
  trackPageview(url);
});

export default function PageContainer({ title, description, children }) {
  return (
    <main>
      <Head>
        <title>{title || `Full Stack Developer`}</title>
        {description !== false && (
          <meta name="description" content={description || `Full Stack Developer`} />
        )}
      </Head>
      {children}
      <style jsx global>
        {`
          *,
          :after,
          :before {
            box-sizing: border-box;
          }

          ::selection {
            background: #f7ff7c;
            text-shadow: none;
          }

          body {
            margin: 0;
            font-size: 1.125rem;
            line-height: 1.7;
            background-color: #fff;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0 0 10px;
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:hover {
            color: #000;
            text-decoration: none;
          }

          img {
            border: 0;
            margin: 0;
            max-width: 100%;
          }

          main {
            padding: 40px 20px;
          }

          @media only screen and (min-width: 1024px) {
            main {
              padding: 40px 80px;
            }
          }
        `}
      </style>
    </main>
  );
}
