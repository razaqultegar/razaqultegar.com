import Head from 'next/head';

export default ({ title, description, image, url, keywords, type }) => (
  <Head>
    <meta name="twitter:site" content={`@razaqultegar`} />
    <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {title && <meta name="og:type" content={type} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={`https://razaqultegar.com${image}`} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);
