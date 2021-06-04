import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ status }) => {
  return (
    <Page title={status || 'Error'}>
      <Head>
        <title>404 — Razaqul Tegar</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>Halaman tidak ditemukan.</h1>

          <p>
            <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
              <p>
                Itu tidak ada, tidak pernah ada. Saya bernostalgia untuk tempat
                yang tidak pernah ada.
              </p>

              <footer>
                — Aaron Swartz,{' '}
                <Link external href="http://www.aaronsw.com/weblog/visitingmit">
                  <cite>I Love the University</cite>
                </Link>
              </footer>
            </blockquote>
          </p>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || '?'}</span>
          <p>An error occurred.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
