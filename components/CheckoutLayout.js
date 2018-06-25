import React from 'react';
import { compose, pure } from 'recompose';
import { injectIntl } from 'react-intl';
import Link from 'next/link';
import Layout from './Layout';
import variables from '../styles/variables';
import PageModalButton from './PageModalButton';

const CheckoutLayout = ({ intl, children, ...props }) => (
  <Layout {...props}>
    <div className="wrap wrap--checkout">
      <Link href="/shop">
        <a className="back-button">
          <img className="mr05" src="/static/img/icon/left-arrow-hexagon.svg" alt="left arrow icon" />
          <img
            className="logo"
            src="/static/img/unchained-logo-black.png"
            alt="unchained logo"
          />
        </a>
      </Link>
    </div>
    <div className="site-content">
      {children}
    </div>
    <div className="wrap wrap--bottom-padding">
      <div className="checkout-footer">
        <PageModalButton regionId="terms" title={intl.formatMessage({ id: 'terms' })} className="no-button checkout-footer__link" />
        <PageModalButton regionId="returnpolicy" title={intl.formatMessage({ id: 'return_policy' })} className="no-button checkout-footer__link" />
      </div>
    </div>

    <style jsx>
      {`
      @media (min-width: 1400px) {
        .back-button {
          margin-left: -1.5em;
        }
      }
      .wrap--checkout {
        width: 100%;
        padding-bottom: 0;
      }
      @media (min-width: 1024px) {
        .wrap--checkout {
          margin-top: 2em;
        }
      }
      .wrap--bottom-padding {
        width: 100%;
      }
      .logo {
        max-width: 32px;
        opacity: .7;
      }
      .checkout-footer {
        font-size: 80%;
        padding-top: 1em;
        border-top: 1px solid ${variables.lineGrayColor};
      }
      .checkout-footer__link + .checkout-footer__link {
        margin-left: 1em;
      }
    `}
    </style>
    <style jsx global>
      {`
      .checkout-footer__link + .checkout-footer__link {
        margin-left: 1em;
      }
    `}
    </style>
  </Layout>
);

export default compose(
  injectIntl,
  pure,
)(CheckoutLayout);
