import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

export default class Index extends Component {
  render() {

    return (
      <Layout>
        <Helmet title="Halaman tidak ditemukan – Razaqul Tegar" />
        <header>
          <h1>Halaman tidak ditemukan</h1>
        </header>
        <main>
          <p>Halaman yang Anda cari tidak dapat ditemukan. Cobalah mengganti pencarian Anda, atau <a href="/">kembali ke halaman awal</a>.</p>
        </main>
      </Layout>
    );
  }
}
