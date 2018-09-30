import React from 'react';
import { injectIntl } from 'react-intl';
import {
  compose, withHandlers, pure, withState,
} from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/withFormInProgressHandlers';
import withFormSchema from '../../lib/withFormSchema';
import TextField from './TextField';
import LongTextField from './LongTextField';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';

const CallBackForm = ({
  schema, onSubmit, model, error, onSubmitFailure, inProgress, onChange,
  onSubmitSuccess, isSent,
}) => (isSent ? (
  <h3>
Thanks! We will reach out to you
  </h3>
) : (
  <React.Fragment>
    <h2>
Contact us
    </h2>
    <AutoForm
      disabled={inProgress}
      schema={schema}
      onSubmit={onSubmit}
      model={model}
      error={error}
      onSubmitFailure={onSubmitFailure}
      onSubmitSuccess={onSubmitSuccess}
      onChange={onChange}
    >
      <div className="fieldset">
        <TextField
          half
          autoComplete="given-name"
          id="callback-firstName-field"
          name="firstName"
        />
        <TextField
          half
          autoComplete="family-name"
          id="callback-lastName-field"
          name="lastName"
        />
        <TextField
          half
          autoComplete="email"
          id="callback-email-field"
          name="email"
        />
        <TextField
          half
          autoComplete="mobile number tel"
          id="callback-mobileNumber-field"
          name="mobileNumber"
        />
        <LongTextField
          autoComplete="comment"
          id="callback-comment-field"
          name="comment"
        />
        <ErrorsField />
        <div className="loader-wrap">
          {inProgress && (
            <Loading color="#31302E" />
          )}
          <SubmitField className="button button--primary button--blocked mt1 mb3" value="Send" />
        </div>
      </div>
      <style jsx>
        {`
        .loader-wrap {
          float: right;
        }
      `}
      </style>
    </AutoForm>
  </React.Fragment>
));

export default compose(
  injectIntl,
  withFormErrorHandlers,
  withState('isSent', 'updateIsSent', false),
  withFormSchema(({ intl }) => ({
    firstName: {
      type: String,
      optional: false,
      label: intl.formatMessage({ id: 'first_name' }),
    },
    lastName: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'last_name' }),
    },
    mobileNumber: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'telephone_number' }),
    },
    email: {
      type: String,
      optional: false,
      label: intl.formatMessage({ id: 'email' }),
    },
    comment: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'comment' }),
    },
  })),
  graphql(gql`
    mutation sendContactForm($request: ContactFormInput!) {
      sendContactForm(request: $request)
    }
  `),
  withHandlers({
    onSubmit: ({ mutate, updateIsSent }) => async (request) => {
      await mutate({ variables: { request } });
      updateIsSent(true);
      return true;
    },
  }),
  withFormInProgressHandlers,
  pure,
)(CallBackForm);
