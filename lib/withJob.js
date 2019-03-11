import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query getJob($slug: String!) {
      job(slug: $slug) {
        _id
        slug
        title
        workload
        location
        content
        skills
        tasks
        compensation
        features
      }
    }
  `),
  mapProps(({ data: { job, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    job: job || {},
    loading: !job && (loading || loadingPredecessor),
    ...rest,
  })),
);
