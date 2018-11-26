import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query checkoutCartItems {
      me {
       _id
       cart {
         _id
         itemsTotal: total(category: ITEMS) {
           amount
           currency
         }
         taxesTotal: total(category: TAXES) {
           amount
           currency
         }
         discountsTotal: total(category: DISCOUNTS) {
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
         grossTotal: total {
           amount
           currency
         }
         discounts {
           _id
           trigger
           interface {
             _id
             isManualRemovalAllowed
           }
           total {
              amount
              currency
            }
         }
         items {
           _id
           quantity
           total {
             amount
             currency
           }
           product {
             _id
             ... on SimpleProduct {
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
             }
           }
         }
       }
     }
    }
  `),
  mapProps(({ data: { me, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    cart: (me && me.cart) || {},
    loading: (!me || !me.cart) && (loading || loadingPredecessor),
    ...rest,
  })),
);
