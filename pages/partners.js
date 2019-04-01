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
        <h1 className="text-center">
          Join the Unchained partner program
        </h1>
        <PartnerList />
      </section>
    </div>
    <div className="c-bg-dark">
      <div className="wrap wrap--narrow pv3 text-center">
        <h2 className="c-white">
          Are you a digital commerce
          <br />
          engineer or agency?
        </h2>
        <p className="c-white mb3">
          Drop us a line if you want to be member of our network.
        </p>
        <div className="text-center">
          <Link href="/contact">
            <a className="button button--code">
                Become a Partner
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="color-bg-secondary">
      <section className="wrap">
        <div className="container text-center mt3">
          <h3 className="mb0">Get an overview of our platform</h3>
          <p>Learn about the Unchained Engine, Managed Hosting, our Control Panel & more</p>
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
