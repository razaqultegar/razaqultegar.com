import fontTheme from '../lib/fonts';
import NProgress from '../components/nprogress';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
      <style jsx global>
        {fontTheme}
      </style>
    </>
  );
}
