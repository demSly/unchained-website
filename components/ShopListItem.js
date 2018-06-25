import React from 'react';
import { mapProps } from 'recompose';
import variables from '../styles/variables';
import Price from './Price';
import productCover from '../lib/productCover';

const ShopListItem = ({
  title,
  subtitle,
  cover: { url, title: coverTitle },
  price,
  isTaxable,
  isNetPrice,
  ...rest
}) => (
  <a className="product" {...rest}>
    <img src={url} alt={coverTitle} />
    <h3>
      {title}
    </h3>
    <p className="price">
      <Price {...price} />
    </p>
    <style jsx>
      {`
        .product {
          background-color: white;
          text-align: center;
          padding: 10px;
        }
        @media ${variables.mq.medium} {
          .product {
            width: 32.6%;
          }
          .product:hover h3 {
            color: ${variables.primaryColor} !important;
          }
        }
        .product + .product {
          margin-left: 10px;
        }
        h1 {
          color: ${variables.primaryColor};
        }
        h3 {
          text-transform: uppercase;
          margin-bottom: .5em;
        }
        @media ${variables.mq.big} {
          h3 {
            font-size: 30px;
          }
        }

        .price {
          margin-top: 0;
        }

      `}
    </style>
  </a>
);

export default mapProps(({
  simulatedPrice, catalogPrice, texts, media, ...rest
}) => {
  const priceConfiguration = (simulatedPrice && simulatedPrice.price.amount > 0)
    ? simulatedPrice
    : catalogPrice;
  return {
    title: texts && texts.title,
    ...priceConfiguration,
    cover: productCover(media),
    ...rest,
  };
})(ShopListItem);
