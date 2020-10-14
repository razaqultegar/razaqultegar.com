import React from 'react';
import NextLink from 'next/link';

const Error = () => {
  return (
    <div className="custom404-layout">
      <div className="custom404-wrapper">
        <div className="custom404-image">
          <img src="/static/images/404.png" alt="‘Computer says no’ woman from Little Britain" />
        </div>
        <div className="custom404-content markup">
          <h1>404</h1>
          <p>
            Computer says no.{' '}
            <NextLink href="/" passHref>
              <a>Go home</a>
            </NextLink>
          </p>
        </div>
      </div>
      <style jsx>{`
        .custom404-layout {
          display: flex;
          max-width: 64rem;
          min-height: 100vh;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          padding-bottom: 4rem;
        }

        .custom404-wrapper {
          align-items: flex-end;
        }

        .custom404-wrapper .custom404-image {
          margin-bottom: 1rem;
        }

        .custom404-wrapper .custom404-content {
          --text-opacity: 1;
          color: #000;
          color: rgba(0, 0, 0, var(--text-opacity));
          line-height: 1;
          text-align: center;
        }

        .custom404-wrapper .custom404-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .custom404-wrapper .custom404-content p {
          --text-opacity: 1;
          color: #4a5568;
          color: rgba(74, 85, 104, var(--text-opacity));
          font-size: 1.25rem;
        }

        @media (min-width: 768px) {
          .custom404-wrapper {
            display: flex;
          }

          .custom404-wrapper .custom404-image {
            margin-bottom: 0;
          }

          .custom404-wrapper .custom404-content {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default Error;
