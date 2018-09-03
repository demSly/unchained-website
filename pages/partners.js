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
          Invested Partners
        </h2>
        <div className="partner">
          <a href="https://www.silbury.com/">
            <img src="../static/img/silbury.jpg" alt="silbury logo" />
          </a>
        </div>
        <div className="partner">
          <a href="https://www.fivelines.ch/">
            <img src="../static/img/fivelines.png" alt="fivelines logo" />
          </a>
        </div>
      </section>
    </div>
    <style jsx>
      {`
      .partner img {
        max-width: 250px;
        max-height: 250px;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partners'),
)(Partners));
