import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query checkoutCartPayment {
      me {
       _id
       cart {
         _id
         payment {
           _id
           provider {
             _id
             type
           }
         }
         supportedPaymentProviders {
           _id
           type
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
