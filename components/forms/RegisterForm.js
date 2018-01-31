import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, mapProps, pure } from 'recompose';
import { createUser } from 'meteor-apollo-accounts';
import { withApollo } from 'react-apollo';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import withFormErrorHandlers from '../../lib/hoc/withFormErrorHandlers';
import withFormSchema from '../../lib/hoc/withFormSchema';
import PasswordField from './PasswordField';
import TextField from './TextField';
import ErrorsField from './ErrorsField';

const Login = ({ intl, ...props }) => (
  <AutoForm {...props} autoComplete="off">
    <div className="fieldset">
      <TextField
        inlineLabel
        autoComplete="new-email"
        id="signup-email-field"
        name="email"
        placeholder={intl.formatMessage({ id: 'email' })}
      />
      <PasswordField
        inlineLabel
        autoComplete="new-password"
        id="signup-password-field"
        name="password"
        placeholder={intl.formatMessage({ id: 'password_instruction' })}
      />
    </div>
    <ErrorsField />
    <SubmitField className="button button--full-width" value={intl.formatMessage({ id: 'register' })} />
  </AutoForm>
);

export default compose(
  injectIntl,
  withApollo,
  withFormErrorHandlers,
  withFormSchema({
    email: String,
    password: String,
  }),
  withHandlers({
    onSubmit: ({ client, intl }) => async ({ email, password }) => {
      try {
        const result = await createUser({ email, password }, client);
        return result;
      } catch (e) {
        throw new Error(intl.formatMessage({ id: 'error_register' }));
      }
    },
  }),
  mapProps(({ mutate, client, ...props }) => (props)),
  pure,
)(Login);
