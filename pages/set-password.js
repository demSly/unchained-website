import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import Redirect from '../components/Redirect';
import SetPasswordForm from '../components/forms/SetPasswordForm';

const SetPassword = ({ setnewpassword, url }) => (
  <PageLayout title={setnewpassword.title} className="pinguin-bg">
    <Redirect to="/" ifLoggedIn />
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <div className="box">
        <h1>{setnewpassword.title}</h1>
        <SetPasswordForm token={url.query.reset} />
      </div>
    </div>
  </PageLayout>

);

export default connectApollo(compose(
  connectI18n,
  withRegion('setnewpassword'),
)(SetPassword));
