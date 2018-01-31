import React from 'react';
import { compose, withProps } from 'recompose';
import SimpleSchema from 'simpl-schema';
import connectApollo from '../lib/hoc/connectApollo';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import RegisterForm from '../components/forms/RegisterForm';

const Signup = ({ intl }) => (
  <PageLayout title={intl.formatMessage({ id: 'register' })} className="pinguin-bg">
    <Redirect to="/" ifLoggedIn />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <div className="box">
        <h1>{intl.formatMessage({ id: 'register' })}</h1>
        <RegisterForm />
      </div>
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withProps({
    schema: new SimpleSchema({
      email: String,
      password: String,
    }),
  }),
)(Signup));
