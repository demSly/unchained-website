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
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <p className="c-white">
          Just drop us a line if you want to become an
          official partner of Unchained or you are in need of professional services
        </p>
        <div className="text-center">
          <Link href="/contact">
            <a className="button">
                Become a Partner
            </a>
          </Link>
        </div>
      </div>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partners'),
)(Partners));
