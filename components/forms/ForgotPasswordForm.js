import React from 'react';
import { injectIntl } from 'react-intl';
import { withRouter } from 'next/router';
import { compose, withHandlers, mapProps, pure } from 'recompose';
import { withApollo } from 'react-apollo';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import { forgotPassword } from '../../lib/accounts';
import withFormErrorHandlers from '../../lib/hoc/withFormErrorHandlers';
import withFormSchema from '../../lib/hoc/withFormSchema';
import TextField from './TextField';
import ErrorsField from './ErrorsField';

const ForgotPassword = ({ intl, ...props }) => (
  <AutoForm {...props}>
    <div className="fieldset">
      <TextField
        autoComplete="email"
        id="forgotpassword-email-field"
        inlineLabel
        name="email"
        placeholder={intl.formatMessage({ id: 'email' })}
      />
    </div>
    <ErrorsField />
    <SubmitField className="button button--full-width" value={intl.formatMessage({ id: 'send_email' })} />
  </AutoForm>
);

export default compose(
  injectIntl,
  withRouter,
  withApollo,
  withFormErrorHandlers,
  withFormSchema({
    email: String,
  }),
  withHandlers({
    onSubmit: ({ client, intl }) => async ({ email }) => {
      try {
        await forgotPassword({ email }, client);
        return true;
      } catch (e) {
        throw new Error(intl.formatMessage({ id: 'error_forgot_password' }));
      }
    },
    onSubmitSuccess: ({ router, intl }) => () => {
      alert(intl.formatMessage({ id: 'email_sent' })); // eslint-disable-line
      router.push('/login');
    },
  }),
  mapProps(({ mutate, client, ...props }) => (props)),
  pure,
)(ForgotPassword);
