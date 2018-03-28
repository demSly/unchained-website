import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query payPalToken {
      me {
       _id
       cart {
         _id
         total {
           amount
           currency
         }
         payment {
           _id
           ... on OrderPaymentPaypal {
             clientToken
           }
         }
       }
     }
    }
  `),
  mapProps(({ data: { me, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    payPalToken: (me && me.cart && me.cart.payment) || {},
    total: (me && me.cart && me.cart.total) || {},
    loading: !me && (loading || loadingPredecessor),
    ...rest,
  })),
);
