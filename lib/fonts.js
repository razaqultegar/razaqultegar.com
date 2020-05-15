import css from 'styled-jsx/css';

// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/zeit/next.js/issues/10549
export default css.global`
  @font-face {
    font-family: 'Lora';
    font-display: block;
    src: url(https://res.cloudinary.com/dmbfslxdl/raw/upload/v1589489059/fonts/Lora-Regular_i1kgco.ttf)
      format('ttf');
  }

  @font-face {
    font-family: 'Neue Haas Display Light';
    font-display: block;
    src: url(https://res.cloudinary.com/dmbfslxdl/raw/upload/v1589490262/fonts/NeueHaasDisplay-Light_yzpnab.woff2)
      format('woff2');
  }
  
  @font-face {
    font-family: 'Neue Haas Display Bold';
    font-display: block;
    src: url(https://res.cloudinary.com/dmbfslxdl/raw/upload/v1589484746/fonts/NeueHaasDisplay-Bold_ksypdg.woff2)
      format('woff2');
  }
`;
