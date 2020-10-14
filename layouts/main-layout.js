import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NowPlaying from '../components/NowPlaying';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-wrapper">
        <Sidebar />
        <main className="layout-content">{children}</main>
        <NowPlaying />
      </div>
    </>
  );
}
