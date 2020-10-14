import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';

const SearchList = frontMatter => {
  const { title, publishedAt, category } = frontMatter;
  const slug = frontMatter.__resourcePath.replace('journal/', '').replace('.mdx', '');

  return (
    <li key={slug} style={{ marginBottom: '1.5rem' }}>
      <strong style={{ fontSize: '1.125rem' }}>
        <NextLink href={`journal/${slug}`} passHref>
          <a>{title}</a>
        </NextLink>
      </strong>
      <br />
      <NextLink href={`journal/${slug}`} passHref>
        <a>
          <span style={{ textTransform: 'capitalize' }}>{category}</span> -{' '}
          {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
        </a>
      </NextLink>
    </li>
  );
};

export default SearchList;
