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
      <div className="button-group mt0 mb3">
        <Link href="/engine">
          <a className="button">Engine</a>
        </Link>
        <Link href="/control-panel">
          <a className="button">Control Panel</a>
        </Link>
        <Link href="/consulting">
          <a className="button disabled">Consulting</a>
        </Link>
        <Link href="/managed-hosting">
          <a className="button">Managed Hosting</a>
        </Link>
      </div>
      <section className="section">
        <div className="flex-between nowrap">
          <div className="flex-between nowrap">
            <img className="undraw mr3 w40" src="../static/img/undraw_upload_87y9.svg" alt="" />
            <h1>
              Unchained Consulting
            </h1>
          </div>
          <small>
            Sometimes you need a little help with your projects and of course we don&apos;t
            let you stay in the rain.
          </small>
        </div>

        <ul>
          <li>
            Architectural Workshop: Let us help you define the software architecture
            on the base of unchained
          </li>
          <li>Project Support: Let one of our engineers work on your project.</li>
          <li>Support: We answer tickets through e-mail or our system</li>
          <li>Training: Training offerings you will find here.</li>
        </ul>

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
