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
        <h1>The Unchained Engine</h1>
        <p>To fully concentrate on the product development, unchained will not build storefronts and websites for sellers. We are going to build SaaS services to complement and fund the development of our open source software.</p>
      </section>

      <section className="section">

        <div>
          <h2>Are we there yet? And where is this going?</h2>
          <div className="feature-set">
            <h3>Delivery</h3>
            <ul>
              <li>Downloadable Products</li>
              <li>E-Mail the order to a third-party logistics provider&apos;s central inbox</li>
              <li>Upload orders as CSV to a FTP host*</li>
              <li>Transfer orders electronically to any other system</li>
              <li>Post (Yellowcube), UPS, DHL Comissioning*</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>Documents</h3>
            <ul>
              <li>Generate PDF&apos;s locally through a local bookkeeping system
                (SAP R/3, Abacus, ...)
              </li>
              <li>Generate PDF&apos;s through SaaS services (Smallinvoice)</li>
              <li>Generate a new XML file for external processing</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>Messaging</h3>
            <ul>
              <li>Send Order Confirmations and Invoices by E-Mail, SMS or Whatsapp</li>
              <li>Send User Registration Notifications via Slack</li>
              <li>Twitter new orders anonymized*</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>Payments</h3>
            <ul>
              <li>Bitcoin, Ether & more cryptocurrencies</li>
              <li>Invoice</li>
              <li>Stripe</li>
              <li>PostFinance</li>
              <li>PayPal</li>
              <li>Bonity-checked invoices (Deltavista)</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>Pricing</h3>
            <ul>
              <li>B2B Users special price</li>
              <li>Date range dependent special prices</li>
              <li>Dynamic tax rate retrieval</li>
              <li>Product, Payment, Order or Delivery prices confiurable</li>
              <li>Weather-dependent barbeque sausage price*</li>
              <li>Order total weight dependent charges, dynamically calculated by UPS*</li>
              <li>Prices that depend on Languages, countries, users, order quantities, ...*</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>Discounts</h3>
            <ul>
              <li>Christmas & Black Friday Discounts</li>
              <li>Percentage reducing discount codes</li>
              <li>Absolute amount reducing discount codes</li>
              <li>Swear word dependent daily discounts based on Donald Trump Twitter feed*</li>
              <li>Lottery or random prices: Every 1000th buyer gets the stuff free of charge*</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>Warehousing</h3>
            <ul>
              <li>ERP as Inventory Management*</li>
              <li>Manage Inventory in Google Docs</li>
              <li>Fire Just-in-time Production of any goods*</li>
              <li>Real-time quantities (see an event get sold out live)*</li>
            </ul>
          </div>

          <div className="feature-set">
            <h3>And so much more</h3>
            <ul>
              <li>One shop for one world (Multi-country support)</li>
              <li>Price your products in any currency or crypto-currency you like. $XLM maybe?</li>
              <li>Multi-language support</li>
              <li>Dynamic catalogs</li>
            </ul>
          </div>

          <small className="mt3 db">* Examples of crazy plugins possible, built during projects.
            Every plugin is implementable by a Junior Javascript developer in less than a day
          </small>
        </div>
      </section>
    </div>

    <style jsx>{`
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
