import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Privacy = ({ privacy }) => (
  <PageLayout title={privacy.title}>
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>{privacy.title}</h1>
      <address dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: privacy.content,
        }}
      />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('privacy'),
)(Privacy));
