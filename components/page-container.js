import Head from 'next/head';
import Router from 'next/router';
import { trackPageview } from '../lib/analytics';

Router.events.on('routeChangeComplete', url => {
  trackPageview(url);
});

export default function PageContainer({ title, description, children }) {
  return (
    <>
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
            *:before,
            *:after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
              background: #ffffff;
            }

            h1,
            h2,
            h3 {
              margin: 0;
              font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }

            a {
              text-decoration: none;
            }
          `}
        </style>
      </main>
    </>
  );
}
