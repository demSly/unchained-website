import React from 'react';
import connectApollo from '../lib/hoc/connectApollo';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import ProfileForm from '../components/forms/ProfileForm';
import Redirect from '../components/Redirect';

const Profile = ({ intl }) => (
  <PageLayout title={intl.formatMessage({ id: 'account_settings' })}>
    <Redirect to="/login?redirect=/profile" ifLoggedIn={false} />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>{intl.formatMessage({ id: 'account_settings' })}</h1>
      <ProfileForm />
    </div>
  </PageLayout>
);

export default connectApollo(connectI18n(Profile));
