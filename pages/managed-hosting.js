import React from 'react';
import Link from 'next/link';
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
          Unchained Managed Hosting
        </h1>
        <div className="flex-between nowrap">
          <img className="undraw" src="../static/img/undraw_cloud_hosting_aodd.svg" alt="cloud hosting" />
          <p>
          Let us host the Unchained Engine for you so you can concentrate on
          your business. We use Docker Swarm and a bunch of modern Software to setup
          a scalable Unchained infrastructure for you. It doesn&apos;t matter to us
          where the datacenter is.
          </p>
        </div>

        <ul>
          <li>Bring your own Datacenter or go with us (We use Exoscale.ch)</li>
          <li>Traefik as Reverse Proxy https://traefik.io</li>
          <li>Auto issuance and renewal of SSL certificates</li>
          <li>MongoDB in a Replicaset Configuration</li>
          <li>On-Premise Setup of the Unchained Control Panel</li>
          <li>Multi Instance Setup of the Unchained Engine</li>
          <li>
            Automatical daily Database Backups to a Cloud of your
            choice (like Amazon, Microsoft)
          </li>
          <li>Desaster recovery process and health status widget for your website</li>
          <li>Setup and Configuration of: Domains, DNS</li>
          <li>Maintenance of the Infrastructure parts (Docker + Ubuntu)</li>
          <li>Monitoring and Incident Management with open-source tools</li>
        </ul>

        <h4>Most important:</h4>
        <p>
          We setup the whole infrastructure in a way that a seamless handover is possible
          in a planned way, so you could basically let us setup the whole stack and then take
          over for maintenance and monitoring.
        </p>
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
