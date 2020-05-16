import fontTheme from '../lib/fonts';
import NProgress from '../components/nprogress';
import 'bootstrap/dist/css/bootstrap.min.css';

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
