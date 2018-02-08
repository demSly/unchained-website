import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Imprint = ({ imprint }) => (
  <PageLayout title={imprint.title}>
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>{imprint.title}</h1>
      <address dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: imprint.address,
        }}
      />
      <p><a className="link underline" href="mailto:hello@unchained.shop">hello@unchained.shop</a></p>
      <br />
      <p>Web Design & Shop Development by <a className="link underline" href="http://www.fliptation.ch">Fliptation GmbH</a> & <a className="link underline" href="http://www.reactive.one">Reactive Code GmbH</a></p>
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('imprint'),
)(Imprint));
