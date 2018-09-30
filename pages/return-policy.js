import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const ReturnPolicy = ({ returnpolicy }) => (
  <PageLayout title={returnpolicy.title} metaDescription={returnpolicy.text}>
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>
        {returnpolicy.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: returnpolicy.text,
        }}
      />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('returnpolicy'),
)(ReturnPolicy));
