import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withHandlers, pure } from 'recompose';
import productCover from '../lib/productCover';
import Price from './Price';

const CheckoutCartItem = ({
  _id, total, texts, media, quantity, removeItem, decreaseItemQuantity, increaseItemQuantity,
}) => (
  <div className="cart__item" key={_id}>
    <div className="item__img">
      <img src={productCover(media).url} alt={productCover(media).title} />
    </div>
    <div className="item__right">
      <div className="item__name-and-price">
        <div className="item__name">
          {texts && texts.title}
        </div>
        <div className="item__price">
          <Price {...total} />
        </div>
      </div>
      <div className="quantity-stepper">
        <button type="button" onClick={quantity === 1 ? removeItem : decreaseItemQuantity} className="no-button">
          <img src="../static/img/icon/subtract-hexagon-1.svg" alt="subtract icon" />
        </button>
        <span>
          {quantity}
        </span>
        <button type="button" onClick={increaseItemQuantity} className="no-button">
          <img src="../static/img/icon/add-hexagon-1.svg" alt="plus icon" />
        </button>
      </div>
    </div>
    <style jsx>
      {`
      .cart__item {
        display: flex;
        margin-bottom: 1em;
        font-size: 16px;
      }
      .item__img {
        width: 70px;
        margin-right: 10px;
      }
      .item__right {
        width: 100%;
      }
      .item__name-and-price {
        display: flex;
        justify-content: space-between;
      }
      .item__name {
        max-width: calc(100% - 110px);
        margin-right: .5em;
      }

      .quantity-stepper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80px;
        margin-top: .5em;
      }
    `}
    </style>
  </div>
);

export default compose(
  graphql(gql`
    mutation updateCartItemQuantity($itemId: ID!, $quantity: Int!) {
      updateCartItemQuantity(itemId: $itemId, quantity: $quantity) {
       _id
       quantity
       total {
         amount
         currency
       }
       order {
         _id
         itemsTotal: total(category: ITEMS) {
           amount
           currency
         }
         taxesTotal: total(category: TAXES) {
           amount
           currency
         }
         discountsTotal: total(category: DISCOUNTS) {
           amount
           currency
         }
         paymentTotal: total(category: PAYMENT) {
           amount
           currency
         }
         deliveryTotal: total(category: DELIVERY) {
           amount
           currency
         }
         netTotal: total {
           amount
           currency
         }
         discounts {
           _id
           total {
             amount
             currency
           }
         }
       }
     }
    }
  `, { name: 'updateCartItemQuantity' }),
  graphql(gql`
    mutation removeCartItem($itemId: ID!) {
      removeCartItem(itemId: $itemId) {
       _id
       quantity
     }
    }
  `, {
    name: 'removeCartItem',
    options: {
      refetchQueries: [
        'littleCart',
        'checkoutCart',
        'checkoutCartItems',
      ],
    },
  }),
  withHandlers({
    increaseItemQuantity: ({
      quantity, _id, updateCartItemQuantity,
    }) => async () => updateCartItemQuantity({
      variables: { itemId: _id, quantity: quantity + 1 },
      optimisticResponse: {
        __typename: 'Mutation',
        updateCartItemQuantity: {
          __typename: 'OrderItem',
          _id,
          quantity: quantity + 1,
        },
      },
    }),
    decreaseItemQuantity: ({
      quantity, _id, updateCartItemQuantity,
    }) => async () => updateCartItemQuantity({
      variables: { itemId: _id, quantity: quantity - 1 },
      optimisticResponse: {
        __typename: 'Mutation',
        updateCartItemQuantity: {
          __typename: 'OrderItem',
          _id,
          quantity: quantity - 1,
        },
      },
    }),
    removeItem: ({
      _id, removeCartItem,
    }) => async () => removeCartItem({ variables: { itemId: _id } }),
  }),
  pure,
)(CheckoutCartItem);
