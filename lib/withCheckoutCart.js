import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query checkoutCart {
      me {
       _id
       cart {
         _id
         contact {
           emailAddress
         }
         address {
           city
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
