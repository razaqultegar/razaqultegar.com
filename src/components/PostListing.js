import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = postEdges
      .filter(postEdge => postEdge.node.frontmatter.template === 'post')
      .map(postEdge => {
        return {
          path: postEdge.node.fields.slug,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.fields.date,
        }
      })
    return postList
  }

  render() {
    const postList = this.getPostList()

    return (
      <ul>
        {postList.map(post => {
          return (
            <li key={post.title}>
              <Link to={post.path}>{post.title}</Link>
              <span> - {post.date}</span>
            </li>
          )
        })}
      </ul>
    )
  }
}
