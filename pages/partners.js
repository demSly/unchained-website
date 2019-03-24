import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import PartnerList from '../components/PartnerList';

const Partners = ({ partners }) => (
  <PageLayout title={partners.meta_title} metaDescription={partners.meta_description}>
    <div className="wrap wrap--narrow mt7">
      <section id="partners" className="section">
        <h1>
          Successfully working together with our partners
        </h1>
        <PartnerList />
      </section>
    </div>
    <div className="c-bg-primary">
      <div className="wrap wrap--narrow pv3 text-center">
        <small className="c-white">
          Do you need a Partner in E-Commerce?
          <br />
          Drop us a line iy you want to be member of our network.
        </small>
        <div className="text-center mt1">
          <Link href="/contact">
            <a className="button">
                Become a Partner
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="color-bg-secondary">
      <section className="wrap">
        <div className="container text-center mt3">
          <h4>Get an overview of our platform</h4>
          <Link href="/platform">
            <a className="button button--secondary mb3">Platform overview</a>
          </Link>
        </div>
      </section>

    </div>
    <style jsx>
      {`
        .color-bg-secondary {
          border-bottom: 0;
        }
        `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partners'),
)(Partners));
