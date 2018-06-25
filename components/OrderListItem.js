import React from 'react';
import Link from 'next/link';
import { injectIntl } from 'react-intl';
import Moment from 'react-moment';
import variables from '../styles/variables';
import Price from './Price';

const OrderListItem = ({
  intl, _id, total, status, payment, ordered, orderNumber,
}) => (
  <Link href={`/order?_id=${_id}`}>
    <a className="order">
      <div className="flex-between">
        <div className="order__title">
          {intl.formatMessage({ id: 'order' })}
          {' '}
          {orderNumber}
        </div>
        <div className="order__date">
          <Moment format="llll">
            {ordered}
          </Moment>
        </div>
      </div>
      <div className="order__total">
        <Price {...total} />
        <span className="order__quantity">
(
          {intl.formatMessage({ id: `order_status_${status.toLowerCase()}` })}
)
        </span>
      </div>
      <div className="flex-between">
        <div className="order__payment">
          {intl.formatMessage({ id: 'bill' })}
        </div>
        <div className="order__status">
          {intl.formatMessage({ id: 'status' })}
:
          {intl.formatMessage({ id: `payment_status_${payment.status.toLowerCase()}` })}
        </div>
      </div>
      <style jsx>
        {`
          .order__title {
            font-weight: ${variables.fontWeight.bold};
          }
          .order {
            display: block;
            padding-top: .5em;
            padding-bottom: .5em;
            border-top: 1px solid ${variables.lineGrayColor};
          }
          .order__quantity {
            margin-left: 1em;
            font-style: italic;
            color: ${variables.darkGrayColor};
          }
      `}
      </style>
    </a>
  </Link>
);

export default injectIntl(OrderListItem);
