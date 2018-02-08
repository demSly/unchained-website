import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Fundraiser = ({ fundraiser }) => (
  <PageLayout title={fundraiser.meta_title} metaDescription={fundraiser.meta_description}>

    <div className="wrap wrap--narrow mt3">
      <section id="fundraiser" className="section">
        <h2>{fundraiser.title}</h2>
      </section>
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: fundraiser.content,
      }}
      />
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('fundraiser'),
  pure,
)(Fundraiser));
