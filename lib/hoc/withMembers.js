import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultMembers = [];

export default compose(
  graphql(gql`
    query members {
      members {
        _id
        name
        position
        avatar {
          url
          thumbnail(height: 100, width: 100)
        }
      }
    }
  `),
  mapProps(({ data: { members, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    members: members || defaultMembers,
    loading: !members && (loading || loadingPredecessor),
    ...rest,
  })),
);
