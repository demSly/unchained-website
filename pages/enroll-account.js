import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import SetPasswordForm from '../components/forms/SetPasswordForm';

const EnrollAccount = ({ enrollaccount, url }) => (
  <PageLayout title={enrollaccount.title} className="bg-image">
    <Redirect to="/" ifLoggedIn />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <div className="box">
        <h1>{enrollaccount.title}</h1>
        <SetPasswordForm token={url.query.token} />
      </div>
    </div>
  </PageLayout>

);

export default connectApollo(compose(
  connectI18n,
  withRegion('enrollaccount'),
)(EnrollAccount));
