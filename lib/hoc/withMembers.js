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
        description
        avatar {
          url
          thumbnail(height: 390, width: 622)
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
