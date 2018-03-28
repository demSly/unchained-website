import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultOrders = [];

export default compose(
  graphql(gql`
    query myOrders {
      me {
        _id
        orders {
          _id
          status
          ordered
          orderNumber
          total {
            amount
            currency
          }
          payment {
            _id
            status
          }
        }
      }
    }
  `),
  mapProps(({ data: { me, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    orders: (me && me.orders) || defaultOrders,
    loading: !me && (loading || loadingPredecessor),
    ...rest,
  })),
);
