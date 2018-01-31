import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import Price from './Price';

const CheckoutCartDiscountItem = ({
  intl, isManualRemovalAllowed, interfaceId, total, onClick,
}) => (
  <div className="coupon-wrap">
    <div className="success-message clearfix">
      <small className="coupon-price">(<Price {...total} />)</small>
      <div>
        <img className="v-mid mr05" src="../static/img/icon/check-hexagon-2.svg" alt="check icon" />
        {interfaceId ? (
          <small>{intl.formatMessage({ id: interfaceId.split('.').join('_') })}</small>
        ) : (
          <small>{intl.formatMessage({ id: 'unknown_discount_interface' })}</small>
        )}
      </div>
      {isManualRemovalAllowed && (
        <small>
          <button className="link no-button mv05" onClick={onClick}>
            {intl.formatMessage({ id: 'remove_coupon' })}
          </button>
        </small>
      )}
    </div>
    <style jsx>{`
      .success-message {
        width: 100%;
      }
      .coupon-price {
        line-height: 2;
        display: block;
        float: right;
      }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  graphql(gql`
    mutation removeCartDiscount($discountId: ID!) {
      removeCartDiscount(discountId: $discountId) {
       _id
     }
    }
  `, {
    name: 'removeCartDiscount',
    options: {
      refetchQueries: [
        'littleCart',
        'checkoutCartItems',
      ],
    },
  }),
  withHandlers({
    onClick: ({ _id, removeCartDiscount }) => async () =>
      removeCartDiscount({
        variables: { discountId: _id },
      }),
  }),
  pure,
)(CheckoutCartDiscountItem);
