import React from 'react';
import { compose } from 'recompose';
import Link from 'next/link';
import { injectIntl } from 'react-intl';
import withLittleCart from '../lib/withLittleCart';
import variables from '../styles/variables';
import productCover from '../lib/productCover';

const CartDropdown = ({
  cart: { items }, intl, className, hidden,
}) => (
  <div className={`dropdown ${hidden ? 'hidden' : ''} ${className || ''}`}>
    <div className="cart__items">
      {(!items || items.length === 0) && (
        <div className="cart__empty">
          {intl.formatMessage({ id: 'your_bag_is_empty' })}
        </div>
      )}
      {items && items.map(({ _id, product: { texts, media }, quantity }) => (
        <div className="cart__item" key={_id}>
          <div className="item__img">
            <img src={productCover(media).url} alt={productCover(media).title} />
          </div>
          <div className="item__info">
            {texts && texts.title}
            {' '}
            <span className="item__qty">
              {quantity}
            </span>
          </div>
        </div>
      ))}
      {(items && items.length > 0) && (
        <Link href="/checkout">
          <input type="submit" value={intl.formatMessage({ id: 'checkout' })} className="button button--secondary button--full-width mt1" />
        </Link>
      )}
    </div>
    <style jsx>
      {`

      .cart__item {
        display: flex;
        align-items: center;
      }

      .cart__item + .cart__item {
        border-top: 1px solid ${variables.grayColor};
        margin-top: .5em;
        padding-top: .5em;
      }

      .item__img {
        max-width: 70px;
        margin-right: 16px;
      }

      .item__info {
        font-size: 16px;
      }

      .item__qty {
        color: ${variables.darkGrayColor};
      }

      .item__qty::before {
        content: "x";
        font-size: .75em;
      }

      .cart__items {
        padding: 1em;
      }
      .cart__empty {
        text-align: center;
      }

    `}
    </style>

  </div>
);

export default compose(
  withLittleCart,
  injectIntl,
)(CartDropdown);
