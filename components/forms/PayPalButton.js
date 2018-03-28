import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withHandlers, withProps, pure, renderNothing, branch } from 'recompose';
import paypal from 'paypal-checkout';
import braintree from 'braintree-web';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const PayPalButtonElement = paypal.Button.driver('react', { React, ReactDOM });

const PayPalButton = ({
  client, environment, payment, onAuthorize, className, style, onError, onCancel,
}) => (
  <div className={className}>
    <PayPalButtonElement
      braintree={braintree}
      env={environment}
      client={client}
      payment={payment}
      commit
      onAuthorize={onAuthorize}
      onError={onError}
      onCancel={onCancel}
      style={style}
    />
  </div>
);

export default compose(
  branch(({ payPalToken }) => !payPalToken.clientToken, renderNothing),
  withProps(({ payPalToken, total }) => ({
    environment: (publicRuntimeConfig.NODE_ENV === 'production') ? 'production' : 'sandbox',
    style: {
      label: 'pay',
      size: 'medium', // small | medium | large | responsive
      shape: 'rect', // pill | rect
      color: 'black', // gold | blue | silver | black
      tagline: false,
    },
    client: (publicRuntimeConfig.NODE_ENV === 'production') ? {
      production: payPalToken.clientToken,
    } : {
      sandbox: payPalToken.clientToken,
    },
    payment: (data, actions) => actions.payment.create({
      payment: {
        transactions: [
          {
            amount: { total: total.amount / 100, currency: total.currency },
          },
        ],
      },
    }),
  })),
  withHandlers({
    onAuthorize: ({ onNonceReceived }) => (data) => {
      onNonceReceived({ paypalPaymentMethodNonce: data.nonce });
    },
  }),
  pure,
)(PayPalButton);
