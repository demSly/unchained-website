import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import variables from '../styles/variables';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>

    <div className="wrap hero">
      <div className="text-center">
        <h1>
            Platform overview
        </h1>
      </div>
    </div>

    <div className="wrap mb7 position-relative">
      <section>
        <div className="flex-between">
          <Link href="/engine">
            <a className="platform-feature">
              <h2>
                Unchained Engine
              </h2>
              <p>
                The open-source digital commerce engine is our core product
              </p>
              <span className="link">More infos about the Engine</span>
            </a>
          </Link>
          <Link href="/managed-hosting">
            <a className="platform-feature">
              <h2>
              Managed Hosting
              </h2>
              <p>
              Containerized Managed Hosting through Docker Swarm, bring your own datacenter
              </p>

              <span className="link">More infos about Managed Hosting</span>
            </a>
          </Link>
          <Link href="/consulting">
            <a className="platform-feature">
              <h2>
              Commerce Consulting
              </h2>
              <p>
              Developer Support, UX & E-Commerce Consulting, Training, Events, Partnerships
              </p>
              <span className="link">More infos about Consulting</span>
            </a>
          </Link>
          <Link href="/control-panel">
            <a className="platform-feature">
              <h2>
              Control Panel
              </h2>
              <p>
              Our cloud-based admin ui to view, edit and analyze data on the unchained engine
              </p>
              <span className="link">More infos about the Control Panel</span>
            </a>
          </Link>
        </div>

      </section>
    </div>

    {/*
    <section className="c-bg-dark c-white mb1 pb3">
      <div className="wrap">
        <h2>Unchained for SME in CH</h2>
        <p>
          If you need a new online shop and web presence for you small or
          medium enterprise business:
        </p>
        <a className="button button--primary" href="https://getunchained.ch">Unchained Express</a>
      </div>
    </section>
    */}
    <img className="hero-absolute hero-absolute-height" src="../static/img/undraw_product_tour_foyt.svg" alt="product tour" />

    <style jsx>
      {`
    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
