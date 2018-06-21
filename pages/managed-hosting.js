import React from 'react';
import { compose } from 'recompose';
import variables from '../styles/variables';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>

    <div className="wrap wrap--vertical-padding">
      <section className="section">
        <h1>Unchained Managed Hosting</h1>
        <p>Let us host the Unchained Engine for you so you can concentrate on
          your business. We use Docker Swarm and a bunch of modern Software to setup
          a scalable Unchained infrastructure for you. It doesn't matter to us
          where the datacenter is.
        </p>

        - Bring your own Datacenter or go with us (We use Exoscale.ch)
        - Traefik as Reverse Proxy https://traefik.io
        - Auto issuance and renewal of SSL certificates
        - MongoDB in a Replicaset Configuration
        - On-Premise Setup of the Unchained Control Panel
        - Multi Instance Setup of the Unchained Engine
        - Automatical daily Database Backups to a Cloud of your choice (like Amazon, Microsoft)
        - Desaster recovery process and health status widget for your website
        - Setup and Configuration of: Domains, DNS
        - Maintenance of the Infrastructure parts (Docker + Ubuntu)
        - Monitoring and Incident Management with open-source tools

        Most important:
        We setup the whole infrastructure in a way that a seamless handover is possible
        in a planned way, so you could basically let us setup the whole stack and then take
        over for maintenance and monitoring.
      </section>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
