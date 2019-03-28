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

    <div className="wrap mt7">
      <div className="button-group mt0 mb3">
        <Link href="/engine">
          <a className="button">Engine</a>
        </Link>
        <Link href="/control-panel">
          <a className="button disabled">Control Panel</a>
        </Link>
        <Link href="/consulting">
          <a className="button">Consulting</a>
        </Link>
        <Link href="/managed-hosting">
          <a className="button">Managed Hosting</a>
        </Link>
      </div>
      <section className="section">
        <div className="flex-between nowrap">
          <img className="undraw w40 mr3" src="../static/img/undraw_control_panel1_20gm.svg" alt="control panel" />
          <div>
            <h1>
            Unchained Control Panel
            </h1>
            <p>
              The Unchained Control Panel is our Web UI to all data management API&apos;s
              that the unchained engine provides out of the box. Managed Products, Collections, Users & Orders.
            </p>
            <p>Compatibility and feature parity with the unchained engine.</p>
          </div>
        </div>
      </section>
    </div>
    <div className="wrap">

      <section className="mb7 db">

        <div>
          <h2>
Control Panel Features
          </h2>
          <div className="features">
            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/17- employee-smart-tag.svg" alt="" />
                <h3>
                  Users
                </h3>
              </div>
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
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/05- sneakers.svg" alt="" />
                <h3>
                Products & Variants
                </h3>
              </div>
              <ul>
                <li>Add simple, multi-variant and bundle products</li>
                <li>Edit base prices by country/currency</li>
                <li>Edit texts and images for multiple languages</li>
                <li>Edit warehousing relevant data and other meta data</li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/31- programming-search-for-setting.svg" alt="" />
                <h3>
                Faceted Filters
                </h3>
              </div>
              <ul>
                <li>Add indexable filters for faceted search</li>
                <li>Edit texts and images for multiple languages</li>
                <li>Edit values</li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/40- easy-to-use-2.svg" alt="" />
                <h3>
                Assortments
                </h3>
              </div>
              <ul>
                <li>
                  Structure your products into deep assortments
                </li>
                <li>
                  Assign Faceted Search Filters on all hierarchical levels
                </li>
                <li>
                  Append custom text and images on all hierarchical levels
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/32- work-laptop-male-african-american-1.svg" alt="" />
                <h3>
                  Quotation Management
                </h3>
              </div>
              <ul>
                <li>
                  See open RFP and generated offer documents
                </li>
                <li>
                  Manually confirm elligibility for a request
                </li>
                <li>
                  Reject quotations
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/48- office-working-desk-female-asian-2.svg" alt="" />
                <h3>
                  Order Management
                </h3>
              </div>
              <ul>
                <li>
                See order data and generated documents
                </li>
                <li>
                Manually confirm orders
                </li>
                <li>
                Delete carts
                </li>
                <li>
                Mark orders as paid
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/63- graph-area.svg" alt="" />
                <h3>
                  Analytics & Logs
                </h3>
              </div>
              <p>Observe key indices and see rich application logs, allowing you to drill down by</p>
              <ul>
                <li>
                User
                </li>
                <li>
                Product
                </li>
                <li>
                Order
                </li>
                <li>
                Quotation
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/05- engineer-setting-maintenance.svg" alt="" />
                <h3>
                  Settings
                </h3>
              </div>
              <ul>
                <li>
                  Manage all Languages, Countries, Currencies
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
        </div>
      </section>
      <Link href="/platform">
        <div className="text-center mb3">
          <a className="button mb3">
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
