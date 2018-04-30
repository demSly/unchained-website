import React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import OrderDetails from '../components/OrderDetails';

const Order = ({ order, router }) => (
  <PageLayout
    title={order.meta_title}
    metaDescription={order.meta_description}
  >
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <OrderDetails orderId={router.query._id} otp={router.query.otp} />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  withRouter,
  connectI18n,
  withRegion('order'),
)(Order));
