import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-wrapper">
        <Sidebar />
        <main className="layout-content">{children}</main>
      </div>
    </>
  );
}
