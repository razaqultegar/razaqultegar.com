import { MDXProvider } from '@mdx-js/tag';
import formatDate from 'date-fns/format';
import indonesia from 'date-fns/locale/id';

import Page from './page';
import SocialMeta from './social-meta';
import { code } from './code';

import Facebook from './icons/facebook';
import Twitter from './icons/twitter';

export default meta => ({ children }) => {
  const date = meta.date ? new Date(meta.date) : new Date();

  return (
    <MDXProvider components={code}>
      <Page title={`${meta.title} | Razaqul Tegar - Full Stack Developer`}>
        <SocialMeta image={`${meta.thumbnail}`} {...meta} />
        <article>
          <div className="article-header">
            <h1 className="article-title">{meta.title}</h1>
            <div className="article-meta">
              <div className="date">
                {formatDate(date, 'dddd, D MMMM YYYY', { locale: indonesia })}
              </div>
              <a
                href={`https://www.facebook.com/sharer.php?u=${meta.url}`}
                className="article-share"
                target="_blank"
              >
                <span className="icon">
                  <Facebook />
                </span>
                <span className="icon-text">Share</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${meta.url}`}
                className="article-share"
                target="_blank"
              >
                <span className="icon">
                  <Twitter />
                </span>
                <span className="icon-text">Tweet</span>
              </a>
            </div>
          </div>
          <div className="article-thumbnail">
            <img src={meta.thumbnail} />
          </div>
          <div className="article-body">{children}</div>
          <style jsx>{`
            article {
              max-width: 1020px;
              margin: 0 auto 40px auto;
            }

            .article-header {
              max-width: 640px;
              border-top: 3px solid #000;
              margin: 0 auto 20px auto;
            }

            .article-title {
              font-size: 2rem;
              line-height: 1.3;
              text-decoration: none;
              margin: 15px 0 15px 0;
              word-break: break-word;
            }

            .article-meta {
              font-family: 'Neue Haas Display Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
              font-size: 0.8125rem;
              font-weight: 600;
              line-height: 1.7;
            }

            .date {
              display: inline;
            }

            .article-share {
              cursor: pointer;
              margin-left: 10px;
            }

            .article-share:hover {
              opacity: 0.4;
            }

            .article-share .icon {
              padding: 0 5px;
            }

            .article-share .icon-text {
              display: none;
            }

            .article-thumbnail img {
              display: block;
              height: auto;
              width: 100%;
            }

            .article-body {
              max-width: 800px;
              font-family: 'Lora', Georgia, serif;
              font-size: 1.125rem;
              line-height: 1.7;
              margin: 30px auto 0 auto;
            }

            @media only screen and (min-width: 700px) {
              .article-title {
                font-size: 3.125rem !important;
              }

              .article-share .icon-text {
                display: inline;
              }
            }

            @media only screen and (min-width: 1000px) {
              .article-header {
                max-width: inherit;
                margin: 0 0 20px;
              }
            }
          `}</style>
        </article>
      </Page>
    </MDXProvider>
  );
};
