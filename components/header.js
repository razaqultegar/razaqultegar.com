import { memo } from 'react';

import Nav from './navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <Nav />
      </div>
      <style jsx>{`
        .header {
          background-color: #000;
          padding: 0 20px;
          transition: all 300ms ease-in-out;
        }

        .header-wrap {
          position: relative;
        }

        @media only screen and (min-width: 1024px) {
          .header {
            padding: 0 80px;
          }
        }
      `}</style>
    </header>
  );
};

export default memo(Header);
