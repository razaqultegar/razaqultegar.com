import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';

const PostHighlight = frontMatter => {
  const { thumbnail, title, publishedAt } = frontMatter;
  const slug = frontMatter.__resourcePath.replace('journal/', '').replace('.mdx', '');

  return (
    <>
      <NextLink href={`journal/${slug}`} passHref>
        <a className="highlighted-post">
          <header>
            <h4>{format(parseISO(publishedAt), 'yyyy')}</h4>
            <h2>{title}</h2>
          </header>
          <div className="image">
            <img
              src={thumbnail}
              style={{
                height: '100%',
                objectFit: 'cover'
              }}
              alt={title}
            />
          </div>
        </a>
      </NextLink>
      <style jsx>{`
        .highlighted-post {
          padding-top: 5rem;
          border-bottom: 0 !important;
          position: relative;
        }

        .highlighted-post header {
          z-index: 4;
          padding: 1.7rem 0;
          position: absolute;
          top: 0;
          text-align: center;
          background-color: #f4f4f4;
          width: 100%;
        }

        .highlighted-post header h4 {
          color: #999;
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 0.25rem;
        }

        .highlighted-post header h2 {
          margin: 0 auto;
          font-size: 19px;
          line-height: 1.5;
          padding-left: 1rem;
          padding-right: 1rem;
          color: #555;
        }

        .highlighted-post .image {
          z-index: 3;
          height: 15rem;
          width: 100%;
        }

        .highlighted-post .image picture img {
          padding-top: 100px;
        }
      `}</style>
    </>
  );
};

export default PostHighlight;
