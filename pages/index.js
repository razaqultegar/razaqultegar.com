import React from 'react';
import NextLink from 'next/link';

import MainLayout from '../layouts/main-layout';
import PostHighlight from '../components/PostHighlight';

import { frontMatter as tryMinimalism } from './journal/trying-minimalism-concept.mdx';
import { frontMatter as centralJava } from './journal/triple-s-central-java.mdx';

const Index = () => {
  const Intro = () => (
    <div className="intro markup">
      <p>
        I'm Razaqul, Full Stack Developer and Development Lead of{' '}
        <a href="https://limbodigital.id">@DLD</a> where I worked for this moment. I also a former
        intern at <a href="https://turing.com">@turing</a> (working on remotely). In my free time
        I've built and maintain various open-source projects of my own like: this Websites, Angular
        Electron Kit, Simple Slug Packages and any more. You can find me on{' '}
        <a href="https://twitter.com/razaqultegar">Twitter</a> or{' '}
        <a href="mailto:myrazaqul@gmail.com">write an email</a>. (I'm not on Facebook, LinkedIn, or
        Instagram).
      </p>
      <style jsx>{`
        .intro {
          --bg-opacity: 1;
          --text-opacity: 1;
          background-color: ivory;
          background-color: rgba(255, 255, 240, var(--bg-opacity));
          color: #4a5568;
          color: rgba(74, 85, 104, var(--text-opacity));
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );

  return (
    <MainLayout>
      <Intro />
      <div
        style={{
          height: '6px',
          backgroundColor: '#f16563',
          boxShadow: '0 3px 0 #f16563dd, 0 3px 0 #000',
          marginBottom: '1.25rem'
        }}
      />
      <div className="highlights-wrapper">
        <div className="highlights-content">
          <h1>Annual Recap</h1>
        </div>
        <div className="highlights-content">
          <h2>
            <NextLink
              href="/journal"
              passHref
            >
              <a className="link">see all journal</a>
            </NextLink>
          </h2>
        </div>
      </div>
      <section className="x-grid-4 highlights">
        <PostHighlight {...tryMinimalism} />
        <PostHighlight {...centralJava} />
      </section>
      <style jsx>{`
        .x-grid-4 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 2rem;
          grid-row-gap: 0.5rem;
          justify-items: stretch;
          align-items: stretch;
        }

        .highlights-wrapper {
          display: table;
          width: 100%;
        }

        .highlights-content {
          display: table-cell;
        }

        .highlights-content:last-child {
          text-align: right;
        }

        .highlights-content h1 {
          color: #555;
          font-size: 22px;
          font-weight: 300;
          margin: 0.67em 0;
          padding-top: 0;
          padding-bottom: 0;
        }

        .highlights-content h2 {
          font-size: 12px;
          margin-top: 0;
          margin-bottom: 0;
        }

        .highlights {
          margin-top: 0.8rem;
        }

        @media (max-width: 1200px) {
          .x-grid-4 {
            grid-column-gap: 0.5rem;
            grid-row-gap: 0.5rem;
          }
        }

        @media (max-width: 900px) {
          .x-grid-4 {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 0.5rem;
            grid-row-gap: 0.5rem;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Index;
