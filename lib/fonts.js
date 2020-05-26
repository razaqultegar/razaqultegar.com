import css from 'styled-jsx/css';

// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/zeit/next.js/issues/10549
export default css.global`
  @font-face {
    font-family: 'Neue Haas Display Light';
    font-display: block;
    src: url(https://res.cloudinary.com/limbodigital/raw/upload/v1589579098/fonts/NeueHaasDisplay-Light_qwblaz.woff2)
      format('woff2');
  }

  @font-face {
    font-family: 'Neue Haas Display Medium';
    font-display: block;
    src: url(https://res.cloudinary.com/limbodigital/raw/upload/v1589579097/fonts/NeueHaasDisplay-Mediu_k4csup.woff2)
      format('woff2');
  }

  @font-face {
    font-family: 'Neue Haas Display Bold';
    font-display: block;
    src: url(https://res.cloudinary.com/limbodigital/raw/upload/v1589484746/fonts/NeueHaasDisplay-Bold_ksypdg.woff2)
      format('woff2');
  }
`;
