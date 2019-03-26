import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import connectI18n from '../lib/connectI18n';
import withRegion from '../lib/withRegion';
import CheckoutLayout from '../components/CheckoutLayout';
import CheckoutContent from '../components/Checkout';

const Checkout = ({ checkout }) => (
  <CheckoutLayout title={checkout.title} metaDescription={checkout.subtitle}>
    <div className="wrap wrap--bottom-padding">
      <div className="free-shipping-on-top">
        <img src="../static/img/icon/delivery-package-2.svg" alt="delivery package" />
        <small>
          Free delivery
        </small>
      </div>
      <CheckoutContent />
    </div>
    <style jsx>
      {`
      .free-shipping-on-top {
        margin-bottom: .5em;
        display: flex;
        align-items: flex-start;
      }
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: .5em;
      }
      small {
        display: inline-block;
      }
    `}
    </style>
  </CheckoutLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('checkout'),
)(Checkout));
