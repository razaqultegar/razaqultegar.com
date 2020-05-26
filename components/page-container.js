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

          body {
            background-color: rgba(0, 0, 0, 0.05);
            font-size: 1.125rem;
            line-height: 1.7;
            margin: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0 0 10px;
          }

          p {
            font-family: 'Lora', Georgia, serif;
            margin: 0 0 30px;
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

          blockquote {
            border-left: 3px solid #000;
            margin: auto auto 30px;
          }

          blockquote p {
            color: #000;
            font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 1.625rem;
            line-height: 1.7;
            padding-left: 20px;
          }

          ins {
            background-color: #fff9c0;
            text-decoration: none;
          }

          code {
            font-size: 13px;
          }

          ul,
          ol {
            margin: 0 0 30px;
          }

          button {
            border: none;
            outline: none;
          }

          main {
            background-color: #fff;
            padding: 40px 20px;
          }

          .article-body a, #pages a {
            color: #000;
            font-weight: 400;
            text-decoration: underline;
          }

          .article-body a:hover, #pages a:hover {
            color: rgba(0, 0, 0, 0.4);
            text-decoration: none;
          }

          @media only screen and (min-width: 700px) {
            blockquote p {
              font-size: 1.75rem;
            }
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
