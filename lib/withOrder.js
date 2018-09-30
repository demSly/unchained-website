import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query getOrder($orderId: ID!, $otp: String) {
      order(orderId: $orderId, otp: $otp) {
        _id
        status
        ordered
        orderNumber
        total {
          amount
          currency
        }
        itemsTotal: total(category: ITEMS) {
          amount
          currency
        }
        taxesTotal: total(category: TAXES) {
          amount
          currency
        }
        paymentTotal: total(category: PAYMENT) {
          amount
          currency
        }
        deliveryTotal: total(category: DELIVERY) {
          amount
          currency
        }
        discountsTotal: total(category: DISCOUNTS) {
          amount
          currency
        }
        payment {
          _id
          status
        }
        items {
          _id
          quantity
          total {
            amount
            currency
          }
          unitPrice {
            amount
            currency
          }
          product {
            _id
            ... on ProductVisualization {
              media {
                _id
                file {
                  _id
                  url
                }
                texts {
                  _id
                  title
                }
              }
            }
            texts {
              _id
              title
              subtitle
            }
          }
        }
      }
    }
  `),
  mapProps(({ data: { order, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    order: order || {},
    loading: !order && (loading || loadingPredecessor),
    ...rest,
  })),
);
