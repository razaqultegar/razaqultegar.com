import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import MainLayout from '../layouts/main-layout';
import SearchResults from '../components/SearchResults';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as listItems } from './journal/**/*.mdx';

const url = 'https://razaqultegar.com/search';
const title = 'Search – Razaqul Tegar';
const description =
  "Notes about building software. Looking for what I don't know yet. Technology, Linux, and rarely travel.";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const filteredJournal = listItems
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter(frontMatter => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

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
        <div className="markup page-header">
          <h1>Search</h1>
        </div>
        <input
          type="text"
          autofocus="true"
          placeholder="Laravel, PHP, JavaScript,…"
          className="search-form"
          onChange={e => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <ul className="search-result">
            {filteredJournal.map(frontMatter => (
              <SearchResults key={frontMatter.title} {...frontMatter} />
            ))}
            {!filteredJournal.length && <p className="no-results">Nothing here…</p>}
          </ul>
        )}
        <style jsx>{`
          .search-form {
            --bg-opacity: 1;
            background-color: #f7fafc;
            background-color: rgba(247, 250, 252, var(--bg-opacity));
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-bottom: 0.5rem;
            padding-top: 0.75rem;
            width: 100%;
            --border-opacity: 1;
            border-color: #edf2f7;
            border-color: rgba(237, 242, 247, var(--border-opacity));
            border-top-width: 4px;
            border-bottom-width: 4px;
            border-top: transparent;
            margin-bottom: 1rem;
          }

          .search-form:focus {
            --border-opacity: 1;
            border-color: #e2e8f0;
            border-color: rgba(226, 232, 240, var(--border-opacity));
            outline: 0;
          }

          .no-results {
            --text-opacity: 1;
            color: #4a5568;
            color: rgba(74, 85, 104, var(--text-opacity));
            margin-top: 0.5rem;
          }
        `}</style>
      </MainLayout>
    </>
  );
};

export default Search;
