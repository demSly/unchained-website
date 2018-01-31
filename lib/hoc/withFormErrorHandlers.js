import { compose, mapProps, withHandlers, withState } from 'recompose';

export default compose(
  withState('mappedError', 'updateMappedError', null),
  withHandlers({
    mapError: ({ updateMappedError }) => (error) => {
      const graphQLError = error.graphQLErrors && error.graphQLErrors[0];
      if (graphQLError) {
        updateMappedError(graphQLError);
      } else {
        updateMappedError(error);
      }
    },
  }),
  withHandlers({
    onChange: ({ updateMappedError }) => () => {
      updateMappedError(null);
    },
    onSubmitFailure: ({ mapError }) =>
      mapError,
  }),
  mapProps(({
    // strip mapError && updateMappedError, rename mappedError to error
    mappedError, mapError, updateMappedError, ...rest
  }) => ({
    error: mappedError,
    ...rest,
  })),
);
