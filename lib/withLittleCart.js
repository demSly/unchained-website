import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query littleCart {
      me {
       _id
       cart {
         _id
         items {
           _id
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
           quantity
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
