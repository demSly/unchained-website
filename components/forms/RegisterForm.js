import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, mapProps, pure } from 'recompose';
import { withApollo } from 'react-apollo';
import SubmitField from 'uniforms-unstyled/SubmitField';
import BoolField from 'uniforms-unstyled/BoolField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import { createUser } from '../../lib/accounts';
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
      />
      <PasswordField
        inlineLabel
        autoComplete="new-password"
        id="signup-password-field"
        name="password"
      />
      <div className="field field--required field__input-wrapper">
        <BoolField
          autoComplete="above18"
          id="signup-above18-field"
          name="above18"
        />
      </div>
    </div>
    <ErrorsField />
    <SubmitField className="button button--full-width" value={intl.formatMessage({ id: 'register' })} />
  </AutoForm>
);

export default compose(
  injectIntl,
  withApollo,
  withFormErrorHandlers,
  withFormSchema(({ intl }) => ({
    email: {
      type: String,
      label: intl.formatMessage({ id: 'email' }),
    },
    password: {
      type: String,
      label: intl.formatMessage({ id: 'password_instruction' }),
    },
    above18: {
      type: Boolean,
      label: intl.formatMessage({ id: 'above18' }),
      custom() {
        if (!this.value) return 'required';
        return null;
      },
    },
  })),
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
