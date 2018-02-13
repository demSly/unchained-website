import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

const ForgotPassword = ({ forgotpassword }) => (
  <PageLayout title={forgotpassword.title} className="bg-image" metaDescription={forgotpassword.text}>
    <Redirect to="/" ifLoggedIn />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <div className="box">
        <h1>{forgotpassword.title}</h1>
        <p>{forgotpassword.text}</p>
        <ForgotPasswordForm />
      </div>
    </div>
  </PageLayout>

);

export default connectApollo(compose(
  connectI18n,
  withRegion('forgotpassword'),
)(ForgotPassword));
