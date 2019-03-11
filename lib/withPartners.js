import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultPartners = [];

export default compose(
  graphql(gql`
    query partners {
      partners {
        _id
        name
        logo {
          url
        }
        text
        website
        type
      }
    }
  `),
  mapProps(({ data: { partners, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    partners: partners || defaultPartners,
    loading: !partners && (loading || loadingPredecessor),
    ...rest,
  })),
);
