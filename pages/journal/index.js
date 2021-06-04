import React from 'react'

import Page from '@components/page'
import PostsList from '@components/posts-list'
import getPosts from '@lib/get-posts'

const Journal = ({ posts }) => {
  return (
    <Page title="Jurnal" description="Menulis tentang pengalaman.">
      <article>
        <ul>
          <PostsList posts={posts} />
        </ul>
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Journal
