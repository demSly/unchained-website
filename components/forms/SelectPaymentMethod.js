import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SelectPaymentMethod = ({
  paymentProvider, supportedPaymentProviders, selectPaymentMethod, intl, disabled,
}) => (
  <div className="radio">
    {supportedPaymentProviders && supportedPaymentProviders
      .map(({ _id, type }) => (
        <label className="radio__label" htmlFor={_id} key={_id}>
          <input
            disabled={disabled}
            className="radio__input"
            id={_id}
            type="radio"
            name="paymentProviderId"
            value={_id}
            checked={_id === (paymentProvider && paymentProvider._id)}
            onChange={selectPaymentMethod}
          />
          <span className="radio__span">
            {intl.formatMessage({ id: `payment_type_${type.toLowerCase()}` })}
          </span>
          {type === 'CARD' && (
          <span>
            <img className="cc-icon" src="../static/img/icon/cc/visa.svg" alt="visa icon" />
            <img className="cc-icon" src="../static/img/icon/cc/mastercard.svg" alt="mastercard icon" />
            <img className="cc-icon" src="../static/img/icon/cc/amex.svg" alt="amex icon" />
          </span>
          )}
        </label>
      ))}
    <style jsx>
      {`
      .cc-icon {
        width: 51px;
        height: 32px;
        margin-left: .25em;
      }
      @media (max-width: 640px) {
        .cc-icon {
          width: 38px;
          height: 24px;
        }
      }
      .cc-icon:first-of-type {
        margin-left: 1em;
      }
      .radio__input {
        float: left;
      }
      .radio__label {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: .75em 0;
      }
      .radio__span {
        display: block;
        margin-left: .75em;
      }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  graphql(gql`
    mutation setOrderPaymentProvider($orderId: ID!, $paymentProviderId: ID!) {
      setOrderPaymentProvider(orderId: $orderId, paymentProviderId: $paymentProviderId) {
       _id
       payment {
         _id
         provider {
           _id
           type
         }
       }
     }
    }
  `, {
    name: 'setOrderPaymentProvider',
    options: {
      refetchQueries: [
        'checkoutCart',
        'checkoutCartItems',
      ],
    },
  }),
  withHandlers({
    selectPaymentMethod: ({
      orderId, setOrderPaymentProvider,
    }) => async event => setOrderPaymentProvider({
      variables: {
        paymentProviderId: event.currentTarget.value,
        orderId,
      },
    }),
  }),
  pure,
)(SelectPaymentMethod);
