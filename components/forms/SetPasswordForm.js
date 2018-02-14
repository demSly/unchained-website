import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, mapProps, pure } from 'recompose';
import { withApollo } from 'react-apollo';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import { resetPassword } from '../../lib/accounts';
import withFormErrorHandlers from '../../lib/hoc/withFormErrorHandlers';
import withFormSchema from '../../lib/hoc/withFormSchema';
import PasswordField from './PasswordField';
import ErrorsField from './ErrorsField';

const SetPasswordForm = ({ intl, ...props }) => (
  <AutoForm {...props}>
    <div className="fieldset">
      <PasswordField
        id="set-password-new-password"
        autoComplete="new-password"
        name="newPassword"
        inlineLabel
        placeholder={intl.formatMessage({ id: 'new_password' })}
      />
    </div>
    <ErrorsField />
    <SubmitField className="button button--full-width" value={intl.formatMessage({ id: 'save' })} />
  </AutoForm>
);

export default compose(
  injectIntl,
  withApollo,
  withFormErrorHandlers,
  withFormSchema({
    newPassword: String,
  }),
  withHandlers({
    onSubmit: ({ client, token, intl }) => async ({ newPassword }) => {
      try {
        await resetPassword({ newPassword, token }, client);
        return true;
      } catch (e) {
        throw new Error(intl.formatMessage({ id: 'error_set_password' }));
      }
    },
    onSubmitSuccess: ({ intl, router }) => () => {
      alert(intl.formatMessage({ id: 'set_password_success' })); // eslint-disable-line
      router.push('/');
    },
  }),
  mapProps(({
    mutate, client, token, ...props
  }) => (props)),
  pure,
)(SetPasswordForm);
