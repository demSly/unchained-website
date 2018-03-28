import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import withProducts from '../lib/withProducts';
import withLoadingComponent from '../lib/withLoadingComponent';
import ShopListItem from './ShopListItem';

const ShopList = ({ products }) =>
  (
    <div className="product-overview">
      {products && products.map(product => (
        <Link
          key={product._id}
          href={{ pathname: '/product', query: { _id: product._id } }}
          as={`/product/${product.texts && product.texts.slug}`}
          passHref
          prefetch
        >
          <ShopListItem {...product} />
        </Link>
        ))}
      <style jsx>{`
        .product-overview {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
    `}</style>
    </div>
  );

export default compose(
  withProducts,
  withLoadingComponent,
)(ShopList);
