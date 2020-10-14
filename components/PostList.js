import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';

const PostList = frontMatter => {
  const { title, summary, publishedAt, category, readingTime } = frontMatter;

  const slug = frontMatter.__resourcePath.replace('journal/', '').replace('.mdx', '');

  return (
    <article key={`journal/${slug}`} style={{ marginBottom: '3rem' }}>
      <div className={`border-${category}`} />
      <header className="post-header">
        <NextLink href={`journal/${slug}`} passHref>
          <a>
            <h1>{title}</h1>
          </a>
        </NextLink>
        <p>
          <span style={{ textTransform: 'capitalize' }}>{category}</span> -{' '}
          <time>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</time> by {'Razaqul Tegar'} -{' '}
          {readingTime.text}
        </p>
      </header>
      <div className="markup post-content">
        <p>{summary}</p>
        <p style={{ marginTop: '1.5rem' }}>
          <NextLink href={`journal/${slug}`} passHref>
            <a>Read more</a>
          </NextLink>
        </p>
      </div>
    </article>
  );
};

export default PostList;
