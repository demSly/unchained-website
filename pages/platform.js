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

    <div className="wrap wrap--narrow wrap--vertical-padding">
      <section className="section">
        <div className="flex-between nowrap">
          <img className="undraw" src="../static/img/undraw_product_tour_foyt.svg" alt="product tour" />
          <h1>
            Platform overview
          </h1>
        </div>

        <div className="flex-between">
          <div className="platform-feature">
            <h2>
              Unchained Engine
            </h2>
            <p>
              Open-source digital commerce engine
            </p>
            <Link href="/engine">
              <span className="link">More infos about the Engine</span>
            </Link>
          </div>
          <div className="platform-feature">
            <h2>
              Control Panel
            </h2>
            <p>
              Our cloud-based admin ui to view, edit and analyze data on the unchained engine
            </p>
            <Link href="/control-panel">
              <span className="link">More infos about the Control Panel</span>
            </Link>
          </div>
          <div className="platform-feature">
            <h2>
              Professional Services
            </h2>
            <p>
              Support, Training, Events, Partnerships
            </p>
            <Link href="/professional-services">
              <span className="link">More infos about our Services</span>
            </Link>
          </div>
          <div className="platform-feature">
            <h2>
              Managed Hosting
            </h2>
            <p>
              Containerized Managed Hosting through Docker Swarm, bring your own datacenter
            </p>
            <Link href="/managed-hosting">
              <span className="link">More infos about the Managed Hosting</span>
            </Link>
          </div>
        </div>

      </section>
    </div>

    <style jsx>
      {`
        h2 {
          margin-top: 2em;
        }
      .advantages {
        padding-bottom: 2em;
      }
      @media (min-width: 768px) {
        .advantages {
          display: flex;
        }
        .advantage {
          display: flex;
          justify-content: space-between;
        }
      }


      .advantage {
        margin-top: 2.5em;
        padding: 2em 1.5em;
        background-image: linear-gradient(to top left, ${variables.grayColor}, white);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 90%;
        box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 4px 14px rgba(0,0,0,.1);
      }

      .advantage h2 {
        margin-top: 0;
        margin-bottom: 0;
      }

      .advantage h3 {
        margin-top: 0;
      }


      .advantage p {
        margin-top: .25em;
        margin-bottom: 0;
      }

      .advantage-img {
        width: 120px;
        height: 120px;
        margin-right: .5em;
      }

      @media (min-width: 768px) {
        .advantage p {
          max-width: 80%;
        }
      }
    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
