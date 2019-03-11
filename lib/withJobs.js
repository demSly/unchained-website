import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultJobs = [];

export default compose(
  graphql(gql`
    query jobs {
      jobs {
        _id
        slug
        title
        workload
        location
      }
    }
  `),
  mapProps(({ data: { jobs, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    jobs: jobs || defaultJobs,
    loading: !jobs && (loading || loadingPredecessor),
    ...rest,
  })),
);
