import React from 'react';
import { compose, withProps } from 'recompose';
import { withRouter } from 'next/router';
import SimpleSchema from 'simpl-schema';
import connectApollo from '../lib/connectApollo';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import RegisterForm from '../components/forms/RegisterForm';

const Signup = ({ intl, router }) => (
  <PageLayout title={intl.formatMessage({ id: 'register' })} className="bg-image">
    <Redirect to={(router.query && router.query.redirect) || '/'} ifLoggedIn />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <div className="box">
        <h1>{intl.formatMessage({ id: 'register' })}</h1>
        <RegisterForm />
      </div>
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  withRouter,
  connectI18n,
  withProps({
    schema: new SimpleSchema({
      email: String,
      password: String,
    }),
  }),
)(Signup));
