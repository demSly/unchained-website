import { compose, mapProps, withHandlers, withState } from 'recompose';

export default compose(
  withState('isSubmitInProgress', 'updateIsSubmitting', false),
  withHandlers({
    onSubmit: ({ onSubmit, updateIsSubmitting }) => (formData) => {
      updateIsSubmitting(true);
      return onSubmit && onSubmit(formData);
    },
    onSubmitFailure: ({ onSubmitFailure, updateIsSubmitting }) => (error) => {
      updateIsSubmitting(false);
      return onSubmitFailure && onSubmitFailure(error);
    },
    onSubmitSuccess: ({ onSubmitSuccess, updateIsSubmitting }) => (result) => {
      updateIsSubmitting(false);
      return onSubmitSuccess && onSubmitSuccess(result);
    },
  }),
  mapProps(({
    // strip mapError && updateMappedError, rename mappedError to error
    isSubmitInProgress, updateIsSubmitting, ...rest
  }) => ({
    inProgress: isSubmitInProgress,
    ...rest,
  })),
);
