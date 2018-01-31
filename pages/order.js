import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import OrderDetails from '../components/OrderDetails';

const Order = ({ order, url }) => (
  <PageLayout
    title={order.meta_title}
    metaDescription={order.meta_description}
    url={url}
  >
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <OrderDetails orderId={url.query._id} otp={url.query.otp} />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('order'),
)(Order));
