import React from 'react';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';
import Moment from 'react-moment';
import variables from '../styles/variables';
import withOrder from '../lib/hoc/withOrder';
import withLoadingComponent from '../lib/hoc/withLoadingComponent';
import productCover from '../lib/productCover';
import Price from './Price';

const OrderDetails = ({
  intl,
  totalQuantity,
  order: {
    orderNumber, ordered, items, total, itemsTotal,
    taxesTotal, deliveryTotal, paymentTotal, discountsTotal,
  },
}) => (
  <div>
    <div>
      <h1 className="order__title">{intl.formatMessage({ id: 'order' })} {orderNumber}</h1>
      <p className="order__date"><Moment format="llll">{ordered}</Moment></p>
      <p className="order__count">{totalQuantity} {intl.formatMessage({ id: 'article' })}</p>
    </div>
    <div className="order__items">
      {items && items.map(({
        _id, product: { media, texts }, total: itemTotal, quantity, unitPrice,
        }) =>
      (
        <div className="order__item" key={_id}>
          <div className="item__quantity">{quantity} x</div>
          <img className="item__image" src={productCover(media).url} alt={productCover(media).title} />
          <div className="item__title">{texts && texts.title}</div>
          <span className="item__unit-price">
            <Price {...unitPrice} />
          </span>
          <span className="item__price">
            <Price {...itemTotal} />
          </span>
        </div>
       ))
     }
    </div>
    <div className="order-totals">
      <div className="order__subtotal">
        <div className="label">{intl.formatMessage({ id: 'discounts' })}</div>
        <div className="total">
          <Price {...discountsTotal} />
        </div>
      </div>
      <div className="order__subtotal">
        <div className="label">{intl.formatMessage({ id: 'subtotal' })}</div>
        <div className="total">
          <Price
            amount={(itemsTotal.amount + (discountsTotal ? discountsTotal.amount : 0))}
            currency={itemsTotal.currency}
          />
        </div>
      </div>
      <div className="order__shipping">
        <div className="label">{intl.formatMessage({ id: 'delivery_fees' })}</div>
        <div className="total">
          <Price {...deliveryTotal} />
        </div>
      </div>
      <div className="order__shipping">
        <div className="label">{intl.formatMessage({ id: 'payment_fees' })}</div>
        <div className="total">
          <Price {...paymentTotal} />
        </div>
      </div>
      <div className="order__total">
        <div className="label">{intl.formatMessage({ id: 'total' })}</div>
        <div className="total">
          <Price {...total} />
        </div>
      </div>
      <div className="order__vat">
        <div className="label">{intl.formatMessage({ id: 'included_tax' })}</div>
        <div className="total">
          <Price {...taxesTotal} />
        </div>
      </div>
    </div>
    <style jsx>{`
      .order-totals > div {
        line-height: 2.5;
      }
      .order__item {
        padding-top: .375em;
        padding-bottom: .5em;
        border-top: 1px solid ${variables.lineGrayColor};
      }
      .item__quantity {
        float: left;
        font-size: 1.125em;
        line-height: 58px;
        width: 52px;
        text-align: right;
        font-weight: ${variables.fontWeight.bold};
      }
      .item__image {
        width: 58px;
        height: 58px;
        float: left;
        margin-left: .5em;
        margin-right: .5em;
      }
      .item__title {
        font-weight: ${variables.fontWeight.bold};
        line-height: 1.1;
      }
      .item__unit-price {
        font-size: 14px;
      }
      .item__price {
        margin-top: .25em;
        float: right;
        font-size: 16px;
        white-space: nowrap;
      }
      .order__title {
        font-size: 32px;
      }
      .order__subtotal {
        border-top: 1px solid ${variables.lineGrayColor};
      }
      .order__total {
        font-weight: ${variables.fontWeight.bold};
        border-top: 1px solid ${variables.lineGrayColor};
      }
      .order__vat {
        border-top: 1px solid ${variables.lineGrayColor};
        border-bottom: 1px solid ${variables.lineGrayColor};
      }
      .label {
        display: inline-block;
      }
      .total {
        float: right;
      }

      @media ${variables.mq.medium} {
      }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  withOrder,
  withLoadingComponent,
  withProps(({ order: { items } }) => {
    const totalQuantity = items && items
      .reduce((oldValue, item) => (oldValue + item.quantity), 0);
    return {
      totalQuantity,
    };
  }),
)(OrderDetails);
