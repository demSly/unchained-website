import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, getContext } from 'recompose';
import variables from '../styles/variables';
import withLittleCart from '../lib/withLittleCart';
import CartDropdown from './CartDropdown';

const CartSwitch = ({ isCartToggled, cartItemCount, toggleCart }) => ((cartItemCount > 0) ? (
  <div className={`switch ${cartItemCount > 0 ? 'active' : ''} ${isCartToggled ? 'open' : ''}`}>
    <span className="badge">{cartItemCount}</span>
    <button className="switch__button no-button" type="button" onClick={toggleCart}>
      <span className="cart-caret" />
      <span className="cart">
        <img
          src="/static/img/icon/shopping-bag-3.svg"
          alt="shopping basket"
        />
        <span className="cart-indicator" />
      </span>
    </button>
    <CartDropdown hidden={!isCartToggled} />
    <style jsx>{`
      img {
        vertical-align: middle;
      }
      .badge {
        display: none;
      }
      .cart {
        position: relative
      }
      .cart-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 7px;
        height: 7px;
        margin-top: 1px;
        margin-left: -4px;
        border-radius: 50%;
        visibility: hidden;
        opacity: 0;
        background-color: ${variables.secondaryColor};
      }
      .active .cart-indicator {
        visibility: visible;
        opacity: 1;
      }
    `}
    </style>
  </div>
) : null);

export default compose(
  getContext({
    isCartToggled: PropTypes.bool,
    toggleCart: PropTypes.func,
  }),
  withLittleCart,
  withProps(({ cart }) => ({
    cartItemCount: (cart && cart.items && cart.items
      .reduce((currentValue, item) => currentValue + item.quantity, 0)
    ),
  })),
)(CartSwitch);
