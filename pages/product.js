import React from 'react';
import { withRouter } from 'next/router';
import { compose, withProps } from 'recompose';
import connectApollo from '../lib/connectApollo';
import connectI18n from '../lib/connectI18n';
import withProduct from '../lib/withProduct';
import PageLayout from '../components/PageLayout';
import ProductDetails from '../components/ProductDetails';

const Product = ({
  productId, slug, product = {}, ...rest
}) => (
  <PageLayout
    title={product.texts && product.texts.title}
    metaDescription={product.texts && product.texts.subtitle}
    {...rest}
  >
    <div className="wrap wrap--vertical-padding">
      <ProductDetails productId={productId} slug={slug} />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  withRouter,
  connectI18n,
  withProps(({ router }) => ({
    productId: router.query._id,
    slug: router.query.name,
  })),
  withProduct,
)(Product));
