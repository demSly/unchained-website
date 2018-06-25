import React from 'react';
import { injectIntl } from 'react-intl';
import {
  compose, withHandlers, mapProps, pure,
} from 'recompose';
import { withApollo } from 'react-apollo';
import Link from 'next/link';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import { loginWithPassword } from '../../lib/accounts';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormSchema from '../../lib/withFormSchema';
import PasswordField from './PasswordField';
import TextField from './TextField';
import ErrorsField from './ErrorsField';

const Login = ({ intl, ...props }) => (
  <AutoForm {...props}>
    <div className="fieldset">
      <TextField
        id="login-email-field"
        name="email"
        autoComplete="email"
        inlineLabel
        placeholder={intl.formatMessage({ id: 'email' })}
      />
      <PasswordField
        id="login-password-field"
        name="password"
        inlineLabel
        autoComplete="current-password"
        placeholder={intl.formatMessage({ id: 'password' })}
      />
    </div>
    <ErrorsField />
    <SubmitField className="button button--full-width" value={intl.formatMessage({ id: 'login' })} />
    <Link href="/signup">
      <a className="links hide">
        {intl.formatMessage({ id: 'register' })}
      </a>
    </Link>
    <Link href="/forgot-password">
      <a className="links">
        {intl.formatMessage({ id: 'forgot_password' })}
      </a>
    </Link>
    <style jsx>
      {`
      .links {
        margin-top: 1em;
        display: block;
        font-size: 14px;
        text-align: center;
      }
    `}
    </style>
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
        await loginWithPassword({ email, password }, client);
        return true;
      } catch (e) {
        throw new Error(intl.formatMessage({ id: 'error_login' }));
      }
    },
  }),
  mapProps(({ mutate, client, ...props }) => (props)),
  pure,
)(Login);
