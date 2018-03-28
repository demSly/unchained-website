import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query checkoutCartDelivery {
      me {
       _id
       cart {
         _id
         country {
           name
         }
         contact {
           emailAddress
         }
         address {
           firstName
           lastName
           company
           postalCode
           countryCode
           city
           addressLine
         }
         delivery {
           _id
           ... on OrderDeliveryShipping {
             address {
               firstName
               lastName
               company
               postalCode
               countryCode
               city
               addressLine
             }
           }
         }
       }
     }
    }
  `),
  mapProps(({ data: { me, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    cart: (me && me.cart) || {},
    loading: !me && (loading || loadingPredecessor),
    ...rest,
  })),
);
