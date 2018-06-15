import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>
    <div className="wrap wrap--narrow mv7">
      <section id="partners" className="section">
        <h2 className="mt7">Unchained Platform Technology</h2>

        <div className="wrap wrap--vertical-padding">
          <h2>Our incomplete features & plugin list</h2>
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

          <p>* Examples of crazy plugins possible, built during the e-commerce project.
            Every plugin is implementable by a Junior Javascript developer in less than a day
          </p>
        </div>
      </section>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
