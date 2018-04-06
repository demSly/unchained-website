import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Merchants = ({ merchants }) => (
  <PageLayout title={merchants.meta_title} metaDescription={merchants.meta_description}>
    <div className="wrap wrap--narrow mv7">
      <section id="merchants" className="section">
        <h1>
          Unchained for Merchants
        </h1>


      </section>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('merchants'),
)(Merchants));
