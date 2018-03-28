import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, mapProps, pure } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import { changePassword } from '../../lib/accounts';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/withFormInProgressHandlers';
import withLoadingComponent from '../../lib/withLoadingComponent';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import withCurrentUser from '../../lib/withCurrentUser';
import PasswordField from './PasswordField';
import TextField from './TextField';
import ErrorsField from './ErrorsField';

const SetPasswordForm = ({ intl, inProgress, ...props }) => (
  <AutoForm {...props}>
    <div className="fieldset">
      <TextField
        inlineLabel
        autoComplete="email"
        id="forgotpassword-email-field"
        name="email"
        placeholder={intl.formatMessage({ id: 'email' })}
      />
      <PasswordField
        half
        inlineLabel
        id="profile-form-old-password"
        autoComplete="old password"
        name="oldPassword"
        placeholder={intl.formatMessage({ id: 'current_password' })}
      />
      <PasswordField
        half
        inlineLabel
        id="profile-form-new-password"
        autoComplete="new password"
        name="newPassword"
        placeholder={intl.formatMessage({ id: 'new_password' })}
      />
      <ErrorsField />
      <SubmitField className="button" value={intl.formatMessage({ id: 'save' })} />
    </div>
  </AutoForm>
);

export default compose(
  injectIntl,
  withCurrentUser,
  withLoadingComponent,
  withFormErrorHandlers,
  withApollo,
  withFormModel(({ currentUser }) => ({
    email: currentUser.email,
  })),
  withFormSchema({
    newPassword: { type: String, optional: true },
    oldPassword: { type: String, optional: true },
    email: { type: String, optional: true },
  }),
  graphql(gql`
    mutation updateEmail($email: String!) {
      updateEmail(email: $email) {
       _id
       email
     }
    }
  `),
  withHandlers({
    onSubmit: ({ client, mutate, intl }) => async ({ oldPassword, newPassword, email }) => {
      try {
        await mutate({ variables: { email } });
        if (newPassword) {
          await changePassword({ oldPassword, newPassword }, client);
        }
        return true;
      } catch (e) {
        throw new Error(intl.formatMessage({ id: 'error_update_profile' }));
      }
    },
  }),
  mapProps(({
    mutate, client, token, currentUser, loading, inProgress, ...props
  }) => ({
    disabled: inProgress,
    inProgress,
    ...props,
  })),
  withFormInProgressHandlers,
  pure,
)(SetPasswordForm);
