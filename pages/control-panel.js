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
        <h1>
Unchained Control Panel
        </h1>
        <p>
          Our Unchained Control Panel is our Web UI to all data management API&apos;s
          that the unchained engine provides out of the box. It allows managing
          assortments, products and provides analytics and reporting on orders.
          We provide it to you through a
          Subscription model and ensure compatibility and feature parity with our
          unchained engine.
        </p>
        <p>
          Contact us now if you want to use the engine and our control panel
          before the open source release of unchained engine.
        </p>
      </section>

      <section className="section">

        <div>
          <h2>
Features
          </h2>
          <div className="feature-set">
            <h3>
Users
            </h3>
            <ul>
              <li>
Delete & edit users
              </li>
              <li>
Enroll new users
              </li>
              <li>
See user profiles
              </li>
              <li>
See user logs
              </li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>
Products
            </h3>
            <ul>
              <li>
Manage Products
              </li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>
Assortments
            </h3>
            <ul>
              <li>
Manage Assortments
              </li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>
Orders
            </h3>
            <ul>
              <li>
Manage Orders
              </li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>
Logs
            </h3>
            <ul>
              <li>
See rich application logs, allowing you to drill down by user, product or order
              </li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>
Analytics
            </h3>
            <ul>
              <li>
Observe key indices
              </li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>
More
            </h3>
            <ul>
              <li>
Manage Countries
              </li>
              <li>
Manage Languages
              </li>
              <li>
Manage Payment Providers
              </li>
              <li>
Manage Delivery Providers
              </li>
              <li>
Manage Warehousing Providers
              </li>
            </ul>
          </div>
        </div>
        <Link href="/platform">
          <div className="text-center">
            <a className="button mt3">
                Back to Platform overview
            </a>
          </div>
        </Link>
      </section>
    </div>

    <style jsx>
      {`
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
