import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultQuestions = [];

export default compose(
  graphql(gql`
    query questions {
      questions {
        _id
        question
        answer
      }
    }
  `),
  mapProps(({ data: { questions, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    questions: questions || defaultQuestions,
    loading: !questions && (loading || loadingPredecessor),
    ...rest,
  })),
);
