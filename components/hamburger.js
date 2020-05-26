import React, { Component } from 'react';
import Link from 'next/link';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteOpen: false
    };
  }

  handleMenu = () => {
    this.setState({ siteOpen: !this.state.siteOpen });
  };

  render() {
    const { siteOpen } = this.state;

    return (
      <>
        <button
          aria-label="Click to reveal menu"
          aria-hidden="true"
          className="hamburger"
          onClick={this.handleMenu}
        >
          <span className="patty"></span>
          <span className="patty"></span>
          <span className="patty"></span>
          <span className="patty"></span>
          <span className="patty"></span>
          <style jsx>{`
            .hamburger {
              position: absolute;
              display: block;
              width: 30px;
              height: 30px;
              margin-top: 18px;
              padding: 0;
              top: 0;
              right: 0;
              background: 0 0;
              overflow: hidden;
              opacity: 0;
            }

            .hamburger .patty {
              display: block;
              position: absolute;
              width: 100%;
              height: 1px;
              left: 0;
              top: 14px;
              background: #fff;
              opacity: 1;
            }

            .hamburger.expand {
              z-index: 2;
            }

            @media (max-width: 600px) {
              .hamburger {
                opacity: 1;
              }

              .hamburger .patty {
                opacity: 1;
              }

              .hamburger .patty:nth-child(1) {
                -webkit-transform: translateY(-12px);
                transform: translateY(-12px);
              }

              .hamburger .patty:nth-child(2) {
                -webkit-transform: translateY(-6px);
                transform: translateY(-6px);
              }

              .hamburger .patty:nth-child(3) {
                -webkit-transform: translateY(0);
                transform: translateY(0);
              }

              .hamburger .patty:nth-child(4) {
                -webkit-transform: translateY(6px);
                transform: translateY(6px);
              }

              .hamburger .patty:nth-child(5) {
                -webkit-transform: translateY(12px);
                transform: translateY(12px);
              }

              .hamburger.on_press .patty,
              .hamburger:hover .patty {
                -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s linear;
                transition: opacity 0.15s linear, transform 0.15s linear;
              }

              .hamburger.on_press .patty:nth-child(1),
              .hamburger:hover .patty:nth-child(1) {
                -webkit-transform: translateY(-14px);
                transform: translateY(-14px);
              }

              .hamburger.on_press .patty:nth-child(2),
              .hamburger:hover .patty:nth-child(2) {
                -webkit-transform: translateY(-7px);
                transform: translateY(-7px);
              }

              .hamburger.on_press .patty:nth-child(3),
              .hamburger:hover .patty:nth-child(3) {
                -webkit-transform: translateY(0);
                transform: translateY(0);
              }

              .hamburger.on_press .patty:nth-child(4),
              .hamburger:hover .patty:nth-child(4) {
                -webkit-transform: translateY(7px);
                transform: translateY(7px);
              }

              .hamburger.on_press .patty:nth-child(5),
              .hamburger:hover .patty:nth-child(5) {
                -webkit-transform: translateY(14px);
                transform: translateY(14px);
              }
            }
          `}</style>
        </button>
        <div className={`site-menu ${siteOpen ? 'site-open' : ''}`}>
          <div className="menu-col menu">
            <div className="menu-col-inner">
              <ul className="menu-primary">
                <li>
                  <Link href="/portfolio">
                    <a>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tentang">
                    <a>Tentang</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kontak">
                    <a>Kontak</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button
            aria-label="Close Menu"
            className="menu-close is-active"
            onClick={this.handleMenu}
          ></button>
          <style jsx>{`
            .site-menu {
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              overflow: hidden;
              background: #fff;
              z-index: 500;
              -webkit-overflow-scrolling: touch;
            }

            .site-menu.site-open {
              display: block;
              opacity: 1;
            }

            .menu-col {
              float: left;
              width: 50%;
              height: 100%;
              overflow: auto;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }

            .menu-col .menu-col-inner {
              width: 75%;
              margin: 0 auto;
              padding: 90px 0;
            }

            .menu-col.menu {
              background: #000;
            }

            .menu {
              font-size: 20px;
              font-family: 'Neue Haas Display Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
              font-weight: normal;
              line-height: 1.4;
            }

            .menu ul {
              padding: 0;
              list-style: none;
            }

            .menu-primary {
              margin: 9vh 0;
              font-size: 40px;
            }

            .menu-primary a {
              color: #fff;
            }

            .menu-primary a.on_press,
            .menu-primary a:hover {
              opacity: 0.6;
            }

            .menu-primary li + li {
              margin: 25px 0 0;
            }

            .menu-close {
              position: absolute;
              display: block;
              width: 30px;
              height: 30px;
              padding: 0;
              top: 36px;
              right: 40px;
              background: 0 0;
              overflow: hidden;
            }

            .menu-close:after,
            .menu-close:before {
              display: block;
              content: ' ';
              position: absolute;
              width: 100%;
              height: 1px;
              left: 0;
              top: 14px;
              background: #fff;
              opacity: 1;
              -webkit-transition: -webkit-transform 0.3s linear, background 0.15s linear;
              transition: transform 0.3s linear, background 0.15s linear;
            }

            .menu-close.is-active:before {
              -webkit-transform: rotate(-135deg);
              transform: rotate(-135deg);
            }

            .menu-close.is-active:after {
              -webkit-transform: rotate(-225deg);
              transform: rotate(-225deg);
            }

            .menu-close.on_press:after,
            .menu-close.on_press:before,
            .menu-close:hover:after,
            .menu-close:hover:before {
              opacity: 0.6;
            }

            @media (max-width: 830px) {
              .menu-primary {
                font-size: 30px;
              }
            }

            @media (max-width: 767px) {
              .menu-col .menu-col-inner {
                padding: 40px 0;
              }

              .menu-primary {
                margin: 0 0 30px !important;
                font-size: 20px;
              }

              .menu-primary li + li {
                margin: 10px 0 0;
              }
            }

            @media screen and (max-height: 700px), screen and (max-width: 767px) {
              .menu-col {
                width: 100%;
              }

              .menu-primary {
                margin: 40px 0;
              }
            }

            @media screen and (max-height: 850px) {
              .menu-primary {
                margin: 7vh 0;
                font-size: 30px;
              }
            }

            @media screen and (max-height: 700px) {
              .menu-col .menu-col-inner {
                padding: 40px 0;
              }

              .menu-primary {
                font-size: 20px;
              }

              .menu-primary li + li {
                margin: 15px 0 0;
              }
            }

            @media (max-width: 600px) {
              .menu-close {
                top: 23px;
                right: 25px;
              }
            }

            @media screen and (max-height: 550px) {
              .menu-col .menu-col-inner {
                padding: 40px 0 0;
              }
            }

            @media screen and (max-height: 480px) {
              .menu-primary {
                float: left;
                width: 50%;
                margin: 0 !important;
              }
            }
          `}</style>
        </div>
      </>
    );
  }
}

export default Hamburger;
