import React from 'react';
import { compose, withProps } from 'recompose';
import { withRouter } from 'next/router';
import connectApollo from '../lib/hoc/connectApollo';
import connectI18n from '../lib/hoc/connectI18n';
import withProduct from '../lib/hoc/withProduct';
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
  withProps(({ url }) => ({
    productId: url.query._id,
    slug: url.query.name,
  })),
  withProduct,
)(Product));
