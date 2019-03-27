import React from 'react';
import { injectIntl } from 'react-intl';
import { compose } from 'recompose';
import ActiveLink from './ActiveLink';

// active matching, wait for: https://github.com/zeit/next.js/pull/2352

const Menu = ({ intl, hidden, ...props }) => (
  <div className={`menu ${hidden ? 'hidden' : ''}`} {...props}>
    <div className="menu__items">
      <ActiveLink activeClassName="active" href="/developers">
        <a className="menu__link">
          {intl.formatMessage({ id: 'developers' })}
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/platform">
        <a className="menu__link">
          {intl.formatMessage({ id: 'platform' })}
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/showcase">
        <a className="menu__link">
          {intl.formatMessage({ id: 'showcase' })}
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/partners">
        <a className="menu__link">
          partners
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/about">
        <a className="menu__link">
          {intl.formatMessage({ id: 'about' })}
        </a>
      </ActiveLink>
      <a className="menu__link menu__link--phone" href="tel:+41435051846">
Call us
        <br />
        {' '}
+41 43 505 18 46
      </a>
    </div>
    <style jsx global>
      {`
      .menu-items {
        height: 100vh;
      }

      .menu__link--phone {
        opacity: .7;
        font-size: 12px;
        text-align: right;
        line-height: 1.1;
      }
      .menu__link--phone:hover {
        opacity: .9;
      }
      .menu__link {
        text-transform: lowercase;
        font-size: 15px;
      }

      @media (min-width: 1220px) {
        .menu-switch {
          display: none !important;
        }
        .menu__items {
          font-size: 21px;
        }
        .menu__link {
          display: inline-block;
        }
        .menu__link + .menu__link {
          margin-left: 1em;
        }
        .menu {
          order: 1;
        }
        .lang-switch {
          order: 2;
        }
      }

      @media (max-width: 1023px) {
        .menu__link--phone {
          margin-top: 3em !important;
          text-align: center;
          line-height: 1.5;
        }
        .menu.hidden {
          opacity: 0;
          transform: translateY(-16px);
          z-index: -1;
          position: absolute;
          pointer-events: none;
        }
        .menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          background-color: #FFF;
          box-shadow: 0 2px 9px 5px rgba(0,0,0,.21);
          transform: translateY(0);
          opacity: 1;
          transition: .3s ease-in-out all;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .menu__items {
          padding: 1.75em 1em 2em;
          font-size: 21px;
          max-height: 500px;
          overflow: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
        }
        .menu__link {
          display: block;
          margin: 1.25em;
        }
      }

      @media (min-width: 1024px) {
        .menu__link--phone {
          margin-left: 8em !important;
          margin-right: .25em;
        }

        .menu-switch {
          display: none !important;
        }
        .menu__items {
          font-size: 18px;
        }
        .menu__link + .menu__link {
          margin-left: 1.5em;
        }

        /* Underline From Center */
        .menu__link {
          display: inline-block;
          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px transparent;
          position: relative;
          overflow: hidden;
        }
        .menu__link:before {
          content: "";
          position: absolute;
          z-index: -1;
          left: 50%;
          right: 50%;
          bottom: 0;
          background: #00F5BC;
          height: 2px;
          -webkit-transition-property: left, right;
          transition-property: left, right;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
        }
        .menu__link:hover:before, .menu__link:focus:before, .menu__link:active:before, .menu__link.active:before {
          left: 0;
          right: 0;
        }
      }

    `}
    </style>

  </div>
);
export default compose(injectIntl)(Menu);
