const title = 'Razaqul Tegar – Full Stack Developer';
const description =
  'Razaqul Tegar is a lucky young man born in Banyumas, January 30th. Now doing his professional career as a Full Stack Developer';

const SEO = {
  title,
  description,
  canonical: 'https://razaqultegar.com',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://razaqultegar.com',
    title,
    description,
    images: [
      {
        url: 'https://razaqultegar.com/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@razaqultegar',
    site: '@razaqultegar',
    cardType: 'summary_large_image'
  }
};

export default SEO;
