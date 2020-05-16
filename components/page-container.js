import Head from 'next/head';
import Router from 'next/router';
import { trackPageview } from '../lib/analytics';

Router.events.on('routeChangeComplete', url => {
  trackPageview(url);
});

export default function PageContainer({ title, description, children }) {
  return (
    <main>
      <Head>
        <title>{title || `Full Stack Developer`}</title>
        {description !== false && (
          <meta name="description" content={description || `Full Stack Developer`} />
        )}
      </Head>
      {children}
      <style jsx global>
        {`
          *,
          :after,
          :before {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-size: 1.125rem;
            line-height: 1.7;
            background-color: #fff;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0 0 10px;
          }

          p {
            font-family: 'Lora', Georgia, serif;
            margin: 0 0 10px;
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:hover {
            color: #000;
            text-decoration: none;
          }

          img {
            border: 0;
            margin: 0;
            max-width: 100%;
          }

          main {
            padding: 40px 20px;
          }

          ins {
            background-color: #fff9c0;
            text-decoration: none;
          }
          
          code {
            font-size: 13px;
          }

          pre.language-terminal code.language-terminal {
            position: relative;
            padding: 1rem;
            font-family: Menlo, 'Roboto Mono', Courier New, monospace;
            border: 1px solid #d8d9da;
            box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.16);
            border-radius: 6px;
            padding-top: 45px;
            margin: 2rem 0;
            font-size: 13px;
            background: white;
            color: #333;
          }

          pre.language-terminal code.language-terminal::before {
            content: '   ';
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            background: #e1e1e1;
            color: #c2c3c4;
            width: 100%;
            font-size: 2.5rem;
            margin: 0;
            line-height: 0;
            padding: 14px 0;
            text-indent: 4px;
            letter-spacing: -15px;
          }

          code[class*='language-'],
          pre[class*='language-'],
          pre code {
            font-family: Menlo, 'Roboto Mono', Courier New, monospace;
            font-size: 13px;
            color: #b3b9c5;
            direction: ltr;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            line-height: 1.7;
            font-weight: 400;
            margin: 2rem 0;
            tab-size: 2;
            hyphens: none;
            border-radius: 4px;
            -webkit-font-smoothing: antialiased;
          }

          pre code {
            display: block;
            padding: 1.5rem;
            overflow: auto;
            background-color: #333;
            border: 0;
            box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.15);
          }

          kbd {
            background-color: #f7f7f7;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px white inset;
            color: #333;
            display: inline-block;
            font-family: Helvetica, Arial, sans-serif;
            line-height: 1.4;
            margin: 0 0.1em;
            padding: 0.1em 0.6em;
            text-shadow: 0 1px 0 white;
            font-size: 14px;
          }

          :not(pre) > code[class*='language-'] {
            padding: 3px 5px;
            color: #111;
          }

          :not(pre) > code {
            padding: 3px 5px;
            border: none;
            font-family: 'Oxygen', sans-serif;
            font-weight: 400;
            color: #111;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.06);
          }

          code[class*='language-css'],
          code[class*='language-scss'],
          code[class*='language-less'],
          code[class*='language-sass'] {
            color: #c9c;
          }

          .filename {
            background: #111;
            padding: 0.5rem 1rem 0.75rem;
            font-size: 1rem;
            color: white;
            font-weight: bold;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            margin-bottom: -2.2rem;
          }

          .token.doctype {
            background: #000;
            color: #fff;
          }

          .token.comment,
          .token.prolog,
          .token.cdata {
            color: #777c85;
          }

          .token.namespace {
            opacity: 0.7;
          }

          .token.string,
          .token.attr-value {
            color: #92d192;
          }

          .token.punctuation {
            color: #d5d8df;
          }

          .token.operator {
            color: #ac8d58;
          }

          .token.variable {
            color: #f2777a;
          }

          .token.property {
            color: #abb2bf;
          }

          .token.entity,
          .token.url,
          .token.symbol,
          .token.number,
          .token.boolean,
          .token.constant,
          .token.regex,
          .token.inserted {
            color: #fca369;
          }

          .token.delimiter {
            background: black;
            color: white;
            padding: 1px 2px;
          }

          .token.atrule {
            color: #62cfcf;
          }

          .token.keyword {
            color: #ffeead;
          }
          
          .language-autohotkey .token.selector {
            color: #fca369;
          }

          .token.attr-name {
            color: #ffd479;
          }

          .token.function {
            color: #62cfcf;
          }

          .language-php .token.function {
            color: white;
          }

          .token.class-name {
            color: #e1a6f2;
          }

          .token.deleted,
          .language-autohotkey .token.tag {
            color: #f2777a;
          }

          .token.tag {
            color: #6ab0f3;
          }

          .language-autohotkey .token.keyword {
            color: #ffeead;
          }

          .token.selector {
            color: #ffd479;
          }

          .token.italic {
            font-style: italic;
          }

          pre[data-line] {
            position: relative;
            padding: 1rem 0;
          }

          .line-highlight {
            position: absolute;
            left: 0;
            right: 0;
            padding: inherit 0;
            margin-top: 1rem;
            /* Same as .prism’s padding-top */
            background: rgba(150, 150, 150, 0.1);
            pointer-events: none;
            line-height: inherit;
            white-space: pre;
          }

          .line-highlight:before,
          .line-highlight[data-end]:after {
            content: attr(data-start);
            position: absolute;
            top: 0.4em;
            left: 0.6em;
            min-width: 1em;
            padding: 0 0.5em;
            background-color: transparent;
            color: transparent;
            font: bold 65%/1.5 sans-serif;
            text-align: center;
            vertical-align: 0.3em;
            border-radius: 999px;
            text-shadow: none;
          }

          .line-highlight[data-end]:after {
            content: attr(data-end);
            top: auto;
            bottom: 0.4em;
          }

          .line-numbers .line-highlight:before,
          .line-numbers .line-highlight:after {
            content: none;
          }
          
          @media only screen and (min-width: 1024px) {
            main {
              padding: 40px 80px;
            }
          }
        `}
      </style>
    </main>
  );
}
