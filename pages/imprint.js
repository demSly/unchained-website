import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Imprint = ({ imprint }) => (
  <PageLayout title={imprint.title}>
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>{imprint.title}</h1>
      <address dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: imprint.address,
        }}
      />
      <br />
      <small>Development</small>
      <p>This is a Joint-venture of <a className="link underline" href="http://www.fliptation.ch">Fliptation GmbH</a> & <a className="link underline" href="http://www.reactive.one">Reactive Code GmbH</a>.
      Visit <a className="link underline" href="http://www.fivelines.ch">fivelines</a> for information about our professional services
      </p>
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('imprint'),
)(Imprint));
