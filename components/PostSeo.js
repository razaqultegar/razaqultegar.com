import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const PostSeo = ({ thumbnail, title, summary, publishedAt, url }) => {
  const date = new Date(publishedAt).toISOString();
  const thumbnailImage = {
    url: `https://razaqultegar.com${thumbnail}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Razaqul Tegar`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [thumbnailImage]
        }}
      />
      <ArticleJsonLd
        authorName="Razaqul Tegar"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[thumbnailImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Razaqul Tegar"
        title={title}
        url={url}
      />
    </>
  );
};

export default PostSeo;
