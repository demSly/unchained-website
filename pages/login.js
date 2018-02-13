import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import LoginForm from '../components/forms/LoginForm';

const Login = ({ login, intl }) => (
  <PageLayout
    title={login.meta_title}
    metaDescription={login.meta_description}
    className="bg-image"
  >
    <Redirect to="/" ifLoggedIn />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <div className="box">
        <h1>{intl.formatMessage({ id: 'login' })}</h1>
        <LoginForm />
      </div>
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('login'),
)(Login));
