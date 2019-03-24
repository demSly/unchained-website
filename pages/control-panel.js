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
      <div className="button-group mt0 mb3">
        <Link href="/engine">
          <a className="button">Engine</a>
        </Link>
        <Link href="/control-panel">
          <a className="button">Control Panel</a>
        </Link>
        <Link href="/consulting">
          <a className="button">Consulting</a>
        </Link>
        <Link href="/managed-hosting">
          <a className="button">Managed Hosting</a>
        </Link>
      </div>
      <section className="section">
        <h1>
          Unchained Control Panel
        </h1>
        <div className="flex-between nowrap">
          <img className="undraw" src="../static/img/undraw_control_panel1_20gm.svg" alt="control panel" />
          <div>
            <p>
              The Unchained Control Panel is our Web UI to all data management API&apos;s
              that the unchained engine provides out of the box.
            </p>
            <ul>
              <li>Products, Users & Assortment management</li>
              <li>Analytics, logs & reporting on orders</li>
              <li>Compatibility and feature parity with the unchained engine</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb7 db">

        <div>
          <h2>
Features
          </h2>
          <div className="features">
            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/17- employee-smart-tag.svg" alt="" />
                <h3>
                  Users
                </h3>
              </div>
              <p>Manage Users</p>
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
              <p>Manage Products</p>
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
                Faceted Search Filters
                </h3>
              </div>
              <p>Manage Filters</p>
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
              <p>Manage Assortments</p>
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
              <p>Manage Quotations / Requests for Proposals</p>
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
              <p>Manage Orders</p>
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
                  Logs
                </h3>
              </div>
              <p>See rich application logs, allowing you to drill down by</p>
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
                <img className="feature-set__icon" src="../static/img/50- business-graph-2.svg" alt="" />
                <h3>
                  Analytics
                </h3>
              </div>
              <p>Observe key indices</p>
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
        <div className="text-center mt3">
          <a className="button mt3">
              Back to Platform overview
          </a>
        </div>
      </Link>
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
