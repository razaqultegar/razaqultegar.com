import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Halaman tidak ditemukan – Razaqul Tegar" />
        <SEO />
        <header>
          <h1>Halaman tidak ditemukan</h1>
        </header>
        <main>
          <p>
            Halaman yang Anda cari tidak dapat ditemukan. Cobalah mengganti
            pencarian Anda, atau <a href="/">⤌ Kembali ke halaman awal</a>.
          </p>
        </main>
      </Layout>
    );
  }
}
