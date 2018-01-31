import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import ShopList from '../components/ShopList';

const Shop = ({ shop }) => (
  <PageLayout title={shop.title} metaDescription={shop.subtitle}>
    <div className="wrap wrap--vertical-padding">
      <h2>Unchained Shop</h2>
      <ShopList />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('shop'),
)(Shop));
