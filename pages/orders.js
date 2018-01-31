import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import OrderList from '../components/OrderList';

const Orders = ({ intl, orders }) => (
  <PageLayout
    title={orders.meta_title}
    metaDescription={orders.meta_description}
  >
    <Redirect to="/login?redirect=/orders" ifLoggedIn={false} />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>{intl.formatMessage({ id: 'all_orders' })}</h1>
      <OrderList />
    </div>
    <style jsx>{`
      h1 {
        font-size: 32px;
      }
    `}
    </style>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('orders'),
)(Orders));
