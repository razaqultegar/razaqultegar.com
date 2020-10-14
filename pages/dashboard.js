import React from 'react';
import { NextSeo } from 'next-seo';

import MainLayout from '../layouts/main-layout';
import TopTracks from '../components/TopTracks';

const url = 'https://razaqultegar.com/dashboard';
const title = 'Dashboard – Razaqul Tegar';
const description =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

const Dashboard = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://razaqultegar.com/static/images/dashboard.jpg',
              alt: description,
              width: 1280,
              height: 720
            }
          ]
        }}
      />
      <MainLayout>
        <div className="page-header markup">
          <h1>Dashboard</h1>
        </div>
        <div className="markup" style={{ marginBottom: '1.5rem' }}>
          <p>
            This is my personal dashboard, built with Next.js API routes deployed as serverless
            functions. I use this dashboard to track various metrics across platforms like Unsplash,
            YouTube, GitHub, and more. Want to build your own? Check out my blog series.
          </p>
          <h2>Top Tracks</h2>
          <p>
            Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
          </p>
        </div>
        <TopTracks />
      </MainLayout>
    </>
  );
};

export default Dashboard;
