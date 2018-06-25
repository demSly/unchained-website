import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Partners = ({ partners }) => (
  <PageLayout title={partners.meta_title} metaDescription={partners.meta_description}>
    <div className="wrap mt7">
      <section id="partners" className="section">
        <h2>
Invested Partner
        </h2>
        <a href="https://www.silbury.com/">
          <img src="../static/img/silbury.jpg" alt="silbury logo" />
        </a>

      </section>
    </div>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partners'),
)(Partners));
