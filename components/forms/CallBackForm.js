import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import withFormErrorHandlers from '../../lib/hoc/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/hoc/withFormInProgressHandlers';
import withFormSchema from '../../lib/hoc/withFormSchema';
import TextField from './TextField';
import LongTextField from './LongTextField';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';

const CallBackForm = ({
  schema, onSubmit, model, error, onSubmitFailure, inProgress, onChange,
  onSubmitSuccess,
}) => (
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
        <SubmitField className="button button--primary mv1" value="Send" />
      </div>
    </div>
    <style jsx>{`
      .loader-wrap {
        float: right;
      }
    `}
    </style>
  </AutoForm>
);

export default compose(
  injectIntl,
  withFormErrorHandlers,
  withFormSchema(({ intl }) => ({
    firstName: {
      type: String,
      optional: false,
      label: intl.formatMessage({ id: 'first_name' }),
    },
    lastName: {
      type: String,
      optional: false,
      label: intl.formatMessage({ id: 'last_name' }),
    },
    mobileNumber: {
      type: String,
      optional: false,
      label: intl.formatMessage({ id: 'telephone_number' }),
    },
    orderDate: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'order_date' }),
    },
    studio: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'buy_source' }),
    },
    fnNumber: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'fn_number' }),
    },
    comment: {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'comment' }),
    },
  })),
  graphql(gql`
    mutation sendCallBackRequest($request: CallBackRequestInput!) {
      sendCallBackRequest(request: $request)
    }
  `),
  withHandlers({
    onSubmit: ({ mutate }) => async (request) => {
      await mutate({ variables: { request } });
      return true;
    },
  }),
  withFormInProgressHandlers,
  pure,
)(CallBackForm);
