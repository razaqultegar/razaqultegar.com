import React from 'react';
import { NextSeo } from 'next-seo';

import MainLayout from '../layouts/main-layout';
import PostList from '../components/PostList';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as listItems } from './journal/**/*.mdx';

const url = 'https://razaqultegar.com/journal';
const title = 'Journal – Razaqul Tegar';
const description =
  "Notes about building software. Looking for what I don't know yet. Technology, Linux, and rarely travel.";

const Journal = () => {
  const items = listItems.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <MainLayout>
        {items.map(frontMatter => (
          <PostList key={frontMatter.title} {...frontMatter} />
        ))}
      </MainLayout>
    </>
  );
};

export default Journal;
