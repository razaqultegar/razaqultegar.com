import { memo } from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="menu-wrap">
      <Link href="/">
        <a className="brand">
          Razaqul Tegar <img src="/static/medias/waving-hands.svg" />
        </a>
      </Link>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link href="/portfolio">
              <a className="menu-link">
                Portfolio
              </a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/tentang">
              <a className="menu-link">Tentang</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/kontak">
              <a className="menu-link">Kontak</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .menu-wrap {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 1rem 0;
          flex-flow: row nowrap;
          justify-content: flex-start;
        }

        .brand {
          display: inline-block;
          transition: all 300ms ease-in-out;
          color: #fff;
          font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 22px;
          text-transform: uppercase;
        }

        @media only screen and (min-width: 992px) {
          .menu {
            font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            display: flex !important;
            flex-basis: auto;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }

          .menu-list {
            display: flex;
            flex-direction: row;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .menu-item .menu-link {
            color: #fff;
            padding-bottom: 1px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
            transition: all 200ms ease-in-out;
            position: relative;
            margin-left: 1.2rem;
            margin-right: 1.2rem;
            display: block;
            border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
          }

          .menu-item:first-child .menu-link {
            margin-left: 0;
          }

          .menu-item:last-child .menu-link {
            margin-right: 0;
          }

          .menu-item .menu-link:focus,
          .menu-item .menu-link:hover {
            color: rgba(255, 255, 255, 0.5);
          }

          .brand img {
            margin-top: -6px;
            margin-left: 5px;
            -webkit-animation: handshake 2s ease-in-out 0s infinite;
            -moz-animation: handshake 2s ease-in-out 0s infinite;
            -o-animation: handshake 2s ease-in-out 0s infinite;
            animation: handshake 2s ease-in-out 0s infinite;
            transform-origin: 50% 100%;
          }

          @-webkit-keyframes handshake {
            0% {
              transform: rotate(0deg);
            }
            5% {
              transform: rotate(-22deg);
            }
            10% {
              transform: rotate(22deg);
            }
            15% {
              transform: rotate(-22deg);
            }
            20% {
              transform: rotate(22deg);
            }
            25% {
              transform: rotate(-22deg);
            }
            30% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          @-moz-keyframes handshake {
            0% {
              transform: rotate(0deg);
            }
            5% {
              transform: rotate(-22deg);
            }
            10% {
              transform: rotate(22deg);
            }
            15% {
              transform: rotate(-22deg);
            }
            20% {
              transform: rotate(22deg);
            }
            25% {
              transform: rotate(-22deg);
            }
            30% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          @-o-keyframes handshake {
            0% {
              transform: rotate(0deg);
            }
            5% {
              transform: rotate(-22deg);
            }
            10% {
              transform: rotate(22deg);
            }
            15% {
              transform: rotate(-22deg);
            }
            20% {
              transform: rotate(22deg);
            }
            25% {
              transform: rotate(-22deg);
            }
            30% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          @keyframes handshake {
            0% {
              transform: rotate(0deg);
            }
            5% {
              transform: rotate(-22deg);
            }
            10% {
              transform: rotate(22deg);
            }
            15% {
              transform: rotate(-22deg);
            }
            20% {
              transform: rotate(22deg);
            }
            25% {
              transform: rotate(-22deg);
            }
            30% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        }

        @media only screen and (max-width: 991px) {
          .menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            visibility: hidden;
            z-index: 9;
          }

          .brand img {
            margin-top: -6px;
            margin-left: 5px;
          }
        }
      `}</style>
    </nav>
  );
}

export default memo(Navbar);
