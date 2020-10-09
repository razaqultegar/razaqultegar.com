import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

import '../styles/main.css';
import '../styles/fonts.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
