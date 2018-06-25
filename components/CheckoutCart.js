import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, pure } from 'recompose';
import withCheckoutCartItems from '../lib/withCheckoutCartItems';
import withLoadingComponent from '../lib/withLoadingComponent';
import CheckoutCartItem from './CheckoutCartItem';
import CheckoutCartDiscountItem from './CheckoutCartDiscountItem';
import AddCartDiscountForm from './forms/AddCartDiscountForm';
import Price from './Price';
import variables from '../styles/variables';

const CheckoutCart = ({
  intl, cart: {
    items, itemsTotal, _id: orderId, taxesTotal,
    discountsTotal, grossTotal, deliveryTotal, paymentTotal, discounts,
  },
}) => (
  <div className="checkout-cart">
    <div className="checkout-cart__title">
      {intl.formatMessage({ id: 'checkout_items_in_cart' })}
    </div>
    <div className="cart__items">
      {items && items.map(({
        _id, total, product: { texts, media }, quantity,
      }) => (
        <CheckoutCartItem
          key={_id}
          _id={_id}
          total={total}
          texts={texts}
          media={media}
          orderId={orderId}
          quantity={quantity}
        />
      ))}
    </div>

    {discounts && discounts.map(({
      total,
      _id, interface: discountInterface,
    }) => (!discountInterface ? (
      <CheckoutCartDiscountItem
        key={_id}
        _id={_id}
        interfaceId={discountInterface && discountInterface._id}
        isManualRemovalAllowed={discountInterface
          ? discountInterface.isManualRemovalAllowed : true}
        total={total}
      />
    ) : (
      <span />
    )
    ))
      }

    {(!discounts || discounts.length === 0) && (
      <AddCartDiscountForm />
    )}

    <div className="total-lines">
      <div className="flex-between total-line">
        <div className="total-line__name">
          {intl.formatMessage({ id: 'checkout_cart_total' })}
        </div>
        <div className="total-line__price">
          <Price {...(itemsTotal && ({
            amount: itemsTotal.amount + (discountsTotal ? discountsTotal.amount : 0),
            currency: itemsTotal.currency,
          }))}
          />
        </div>
      </div>

      <div className="flex-between total-line">
        <div className="total-line__name">
          {intl.formatMessage({ id: 'delivery_fees' })}
        </div>
        <div className="total-line__price">
          {(!deliveryTotal || deliveryTotal.amount === 0) ? (
            <span>
              {intl.formatMessage({ id: 'free_of_charge' })}
            </span>
          ) : (
            <Price
              amount={deliveryTotal.amount}
              currency={deliveryTotal.currency}
            />
          )}
        </div>
      </div>
      <div className="flex-between total-line">
        <div className="total-line__name">
          {intl.formatMessage({ id: 'payment_fees' })}
        </div>
        <div className="total-line__price">
          {(!paymentTotal || paymentTotal.amount === 0) ? (
            <span>
              {intl.formatMessage({ id: 'free_of_charge' })}
            </span>
          ) : (
            <Price
              amount={paymentTotal.amount}
              currency={paymentTotal.currency}
            />
          )}
        </div>
      </div>
    </div>

    <div className="flex-between order-total">
      <div>
        <div>
          {intl.formatMessage({ id: 'order_total' })}
        </div>
        {(taxesTotal && taxesTotal.amount > 0) ? (
          <div className="taxes">
            {intl.formatMessage({ id: 'including' })}
&nbsp;
            <Price
              amount={taxesTotal.amount}
              currency={taxesTotal.currency}
            />
&nbsp;
            {intl.formatMessage({ id: 'vat' })}
          </div>
        ) : (
          <div className="taxes">
            {intl.formatMessage({ id: 'excluding' })}
            {' '}
            {intl.formatMessage({ id: 'vat' })}
          </div>
        )}
      </div>
      {(grossTotal && grossTotal.amount > 0) && (
        <div className="total">
          <Price
            amount={grossTotal.amount}
            currency={grossTotal.currency}
          />
        </div>
      )}
    </div>

    <style jsx>
      {`
      @media (min-width: 1024px) {
        .checkout-cart {
          margin-left: 1em;
          width: 30%;
        }
      }
      @media (min-width: 1220px) {
        .checkout-cart {
          margin-left: 2.5em;
        }
      }
      .checkout-cart__title {
        padding-top: 1.25em;
        padding-bottom: 1.25em;
        text-transform: uppercase;
      }

      .checkout-cart__total {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: .5em;
        padding-bottom: .5em;
      }
      .step-total {
        width: 160px;
        text-align: right;
      }
      .cart__items {
        padding: 0;
        border-bottom: 1px solid ${variables.lineGrayColor};
      }
      .total-lines {
        padding: .75em 0;
        border-top: 1px solid ${variables.lineGrayColor};
      }
      .total-line + .total-line {
        margin-top: .25em;
      }
      .total-line__name {
        font-size: 16px;
      }
      .total-line__price {
        font-size: 16px;
      }
      .total {
        text-align: right;
      }
      .taxes {
        font-size: 14px;
      }
      .order-total {
        border-top: 1px solid #E0E0E0;
        border-bottom: 4px double #E0E0E0;
        padding: .5em 0;
      }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  withCheckoutCartItems,
  withLoadingComponent,
  pure,
)(CheckoutCart);
