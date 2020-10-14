import React, { useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import MainLayout from './main-layout';
import PostSeo from '../components/PostSeo';
import Comment from '../components/Comment';

export default function PostSingle({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath.replace('journal/', '').replace('.mdx', '');
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement('script');
    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute('repo', 'razaqultegar/comments');
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('id', 'utterances');
    commentScript.setAttribute('theme', 'github-light');
    commentScript.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []); // eslint-disable-line

  return (
    <MainLayout>
      <PostSeo url={`https://razaqultegar.com/journal/${slug}`} {...frontMatter} />
      <article className="post-item">
        <header className="post-header">
          <h1>{frontMatter.title}</h1>
          <p>
            <span style={{ textTransform: 'capitalize' }}>{frontMatter.category}</span> -{' '}
            <time>{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}</time> by{' '}
            {'Razaqul Tegar'} - {frontMatter.readingTime.text}
          </p>
          {frontMatter.thumbnail ? (
            <img src={frontMatter.thumbnail} className="post-thumbnail" alt={frontMatter.title} />
          ) : null}
        </header>
        <div className="markup">{children}</div>
      </article>
      <div id="comments-wrapper" style={{ marginBottom: '2rem' }}>
        <div className="markup comments-title" style={{ marginBottom: '2rem' }}>
          <h2>Comments</h2>
        </div>
        <Comment commentBox={commentBox} />
      </div>
    </MainLayout>
  );
}
