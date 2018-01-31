import React from 'react';
import { compose } from 'recompose';
import withOrders from '../lib/hoc/withOrders';
import withLoadingComponent from '../lib/hoc/withLoadingComponent';
import OrderListItem from './OrderListItem';

const OrderList = ({ orders }) =>
  (
    <div className="order-list">
      {orders && orders
        .filter(({ status }) => (status !== 'OPEN')) // Warenkorb ignorieren
        .map(({ _id, ...order }) => (
          <OrderListItem
            key={_id}
            _id={_id}
            {...order}
          />
        ))}
    </div>
  );

export default compose(
  withOrders,
  withLoadingComponent,
)(OrderList);
