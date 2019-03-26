import React from 'react';
import {
  compose, withHandlers, getContext, withState, withProps,
} from 'recompose';
import { withApollo, graphql } from 'react-apollo';
import { injectIntl } from 'react-intl';
import { withRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Slider from 'react-slick';
import Markdown from 'react-remarkable';
import variables from '../styles/variables';
import loginAsGuest from '../lib/accounts/loginAsGuest';
import withProduct from '../lib/withProduct';
import withCurrentUser from '../lib/withCurrentUser';
import withLoadingComponent from '../lib/withLoadingComponent';
import Price from './Price';

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

const defaultProduct = {};

const ProductDetails = ({
  intl, product, addToCart, isAddInProgress, isBuyable, priceConfiguration,
}) => (
  <div className="product">
    <div className="product__item">
      <Slider className="animated fadeIn" {...settings}>
        {product.media && product.media.map(({ _id, file, texts }) => (
          <img key={_id} className="product__image" src={file.url} alt={texts && texts.title} />
        ))}
      </Slider>
    </div>
    <div className="product__item">
      <h2>
        {product.texts && product.texts.title}
      </h2>
      <small>
        {product.texts && product.texts.subtitle}
      </small>
      <p className="price">
        <Price {...(priceConfiguration && priceConfiguration.price)} />
      </p>
      <small className="price-details">
        {priceConfiguration && priceConfiguration.isTaxable && (
          <span>
            {intl.formatMessage({ id: 'price_incl_vat' })}
            <br />
          </span>
        )}
        {isBuyable && (
          <span>
            <img className="v-mid mr05 w16px" src="../static/img/unchained-logo-black.png" alt="" />
          </span>
        )}
      </small>
      <div className="loader-wrap">
        {isAddInProgress && (
          <div className="loader" title="0">
            <svg
              version="1.1"
              id="loader-1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              enableBackground="new 0 0 40 40"
              xmlSpace="preserve"
            >
              <path
                opacity="0.2"
                fill="#343434"
                d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
              />
              <path
                fill="#343434"
                d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
      C22.32,8.481,24.301,9.057,26.013,10.047z"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        )}
        {isBuyable ? (
          <button type="button" className="button c-white" onClick={addToCart}>
            {intl.formatMessage({ id: 'add_to_cart' })}
          </button>
        ) : (
          <Link href="/support#studio-finder">
            <a className="button">
              {intl.formatMessage({ id: 'to_the_studiofinder' })}
            </a>
          </Link>
        )}
      </div>
      <div className="product__description">
        <Markdown source={product.texts && product.texts.description} />
      </div>
    </div>
    <style jsx>
      {`
      .product__description {
        margin-top: 3.2em;
        font-size: 14px;
        line-height: 1;
      }
      .loader {
        width: 100%;
        background-color: ${variables.darkColor};
      }
      .price-details {
        display: block;
        margin-bottom: 1em;
      }
      .price {
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 0;
      }
      .button {
        display: block;
        margin-left: 0;
        padding: .75em 1em;
        width: 100%;
        font-size: .875em;
        color: #454545;
        background-color: ${variables.secondaryColor};
      }

      .product {
      }

      @media ${variables.mq.medium} {
        .product {
          display: flex;
          justify-content: space-between;
        }
        .product__item {
          width: 48%;
        }
      }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  withApollo,
  withRouter,
  withCurrentUser,
  withProduct,
  withLoadingComponent,
  withState('isAddInProgress', 'updateIsAddInProgress', false),
  withProps(({ product }) => {
    const { simulatedPrice, catalogPrice } = product || defaultProduct;
    const priceConfiguration = (simulatedPrice && simulatedPrice.price.amount > 0)
      ? simulatedPrice
      : catalogPrice;
    return {
      priceConfiguration,
      isBuyable: !(product && product.tags && product.tags.indexOf('nocheckout') !== -1),
    };
  }),
  graphql(gql`
    mutation addToCart($productId: ID!) {
      addCartProduct(productId: $productId) {
       _id
       quantity
     }
    }
  `, {
    options: {
      refetchQueries: [
        'littleCart',
        'checkoutCart',
        'checkoutCartItems',
      ],
    },
  }),
  getContext({
    isCartToggled: PropTypes.bool,
    toggleCart: PropTypes.func,
  }),
  withHandlers({
    addToCart: ({
      isCartToggled, currentUser, toggleCart, mutate, router,
      product, updateIsAddInProgress, client,
    }) => async () => {
      router.prefetch('/checkout');
      updateIsAddInProgress(true);
      if (!currentUser._id) {
        await loginAsGuest(client);
      }
      await mutate({ variables: { productId: product._id } });
      if (!isCartToggled) {
        toggleCart();
      }
      updateIsAddInProgress(false);
    },
  }),
)(ProductDetails);
