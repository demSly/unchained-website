import React from 'react';
import { compose, mapProps } from 'recompose';
import withOrders from '../lib/hoc/withOrders';
import withLoadingComponent from '../lib/hoc/withLoadingComponent';
import OrderListItem from './OrderListItem';

const OrderList = ({ orders }) =>
  (
    <div className="order-list">
      {orders && orders
        .map(({ _id, ...order }) => (
          <OrderListItem
            key={_id}
            _id={_id}
            {...order}
          />
        ))}
      {(!orders || orders.length === 0) && (
        <p>No orders submitted yet</p>
      )}
    </div>
  );

export default compose(
  withOrders,
  withLoadingComponent,
  mapProps(({ orders }) => {
    (orders || []).filter(({ status }) => (status !== 'OPEN')); // ignore cart
  }),
)(OrderList);
