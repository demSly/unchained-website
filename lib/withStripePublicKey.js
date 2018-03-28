import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultConfiguration = [];
const extractPublicKeyFromCart = ({ payment }) => {
  const configuration = (payment && payment.provider && payment.provider.configuration)
    || defaultConfiguration;
  return configuration.reduce((current, item) => {
    if (item.key === 'publishableAPIKey') return item.value;
    return current;
  }, '');
};

export default compose(
  graphql(gql`
    query stripePublicKey {
      me {
       _id
       cart {
         _id
         payment {
           _id
           provider {
             _id
             configuration
           }
         }
       }
     }
    }
  `),
  mapProps(({ data: { me, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    stripePublicKey: extractPublicKeyFromCart((me && me.cart) || ''),
    loading: !me && (loading || loadingPredecessor),
    ...rest,
  })),
);
