import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const Search = props => {
  const { data } = props;
  const siteMetadata = data.site.siteMetadata;
  const allPosts = data.allMarkdownRemark.edges;

  const emptyQuery = '';

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleInputChange = event => {
    const query = event.target.value;
    const { data } = props;

    const posts = data.allMarkdownRemark.edges || [];

    const filteredData = posts.filter(post => {
      const { title, category } = post.node.frontmatter;

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (category && category.join('').toLowerCase().includes(query.toLowerCase()))
      );
    });

    setState({
      query,
      filteredData
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout>
      <Helmet
        title={`Search | ${siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: siteMetadata.description
          },
          { property: 'og:title', content: 'Search' },
          {
            property: 'og:description',
            content: siteMetadata.description
          }
        ]}
      />
      <div className="markup page-header">
        <h1>Search</h1>
      </div>
      <input
        type="text"
        autofocus=""
        placeholder="Laravel, PHP, JavaScript,…"
        className="search-form"
        onChange={handleInputChange}
      />
      <ul className="search-result">
        {posts.map(({ node }) => {
          const { slug } = node.fields;
          const { title, date, category } = node.frontmatter;

          return (
            <li key={slug} style={{ marginBottom: '1.5rem' }}>
              <strong style={{ fontSize: '1.125rem' }}>
                <Link to={slug}>{title}</Link>
              </strong>
              <br />
              <a
                href="https://freek.dev/1569-aws-vpc-for-software-engineers"
                class="text-sm text-gray-700"
              >
                <span style={{ textTransform: 'capitalize' }}>{category}</span> - {date}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Search;

export const pageQuery = graphql`
  query SearchPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { in: "post" } } }
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 180)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            layout
          }
        }
      }
    }
  }
`;
