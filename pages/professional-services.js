import Link from 'next/link';
import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>

    <div className="wrap wrap--narrow wrap--vertical-padding">
      <section className="section">
        <h1>
          Unchained Professional Services
        </h1>
        <p>
          Sometimes you need a little help with your projects and of cours we don&apos;t
          let you stay in the rain.
        </p>

        <ul>
          <li>
            Architectural Workshop: Let us help you define the software architecture
            on the base of unchained
          </li>
          <li>Project Support: Let one of our engineers work on your project.</li>
          <li>Support: We answer tickets through e-mail or our system</li>
          <li>Training: Training offerings you will find here.</li>
        </ul>

        To get access to these services, it&apos;s required that you join us as an
        official unchained partner:
        <Link href="/partner-program">
          <div className="text-center">
            <a className="button mt3">
                Partner Program
            </a>
          </div>
        </Link>
      </section>
      <Link href="/platform">
        <div className="text-center">
          <a className="button mt3">
              Back to Platform overview
          </a>
        </div>
      </Link>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
