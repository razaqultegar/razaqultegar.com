import NextHead from 'next/head'

const Head = ({
  title = 'Razaqul Tegar',
  description = "Hi, I'm Razaqul Tegar. Cofounder and COO on Limbo Digital.",
  image = 'og.png',
  children,
}) => {
  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel="preload"
        href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://razaqultegar.com" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@razaqultegar" />
      <meta name="apple-mobile-web-app-title" content="Razaqul Tegar" />
      <meta name="author" content="Razaqul Tegar" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for razaqultegar.com"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />

      {/* Dynamic favicon */}
      <link
        rel="alternate icon"
        type="image/png"
        href="/favicons/favicon.png"
        key="dynamic-favicon-alternate"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicons/favicon.svg"
        key="dynamic-favicon"
      />
      {children}
    </NextHead>
  )
}

export default Head
