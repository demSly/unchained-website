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

    <div className="wrap mt7 mb7">
      <div className="button-group mt0 mb3">
        <Link href="/engine">
          <a className="button disabled">Engine</a>
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

        <div className="flex-between nowrap">
          <img className="undraw w40 mr3" src="../static/img/undraw_server_status_5pbv.svg" alt="server status" />
          <div>
            <h1>
          Unchained Engine
            </h1>
            <p>
              The Unchained Engine is our core product and is written in Node.js ES6.
              It exposes all data exclusively through a GraphQL API (headless). The web
              application is served stateless and therefore container friendly.
            </p>
          </div>
        </div>

        <h2>
          Core Values
        </h2>
        <div className="d-flex flex-wrap">
          <div className="w-lg-48">
            <h3>
            Open Source
            </h3>
            <p>
            Usage of OSS prevents vendor lock-in. Using software that is open to
            the public leads to communities that help each other, the software is
            resilient to economic issues like bankruptcy of the software owner.
            </p>
          </div>
          <div className="w-lg-48">
            <h3>
              Headless & Hackable
            </h3>
            <p>
              Non-hackable software (like SaaS) use the technique of &quot;customizing&quot;,
              meaning they provide a massive control panel where every aspect of the
              software can be configured, themed or disabled.
              Sadly there is always something that needs some extra development work
              and people need to hire somebody to create a plugin.
              In Unchained Engine, the software flow is changed through code and not through UI.
              This means a software developer is always required to configure the platform.
               It&apos;s called &quot;hackable&quot; software and allows to configure even parts of
               the software that were not intended to get configured by the core developers.
            </p>
          </div>

          <div className="w-lg-48 mt3">
            <h2>
              Software Stack in detail
            </h2>
            <img className="feature-set__icon" src="../static/img/nodejs-new-pantone-black.svg" alt="Node JS Logo" />
            <h3>
            Node.js ES6
            </h3>
            <p>
            We use the most popular programming language in the web because we think
            it&quot;s key for a hackable software. If you have a hackable software but no coder,
            what&quot;s the point then? As the project manager
            you&quot;ll propably always find somebody that can program in Javascript, while
            finding people that code in GoLang are rare. To increase the stability
            and longevity of our stack we further have selected Meteor.js as the build tool.
            </p>
          </div>

          <div className="w-lg-48 mt7">
            <img className="feature-set__icon" src="../static/img/tech/GraphQL_Logo.svg" alt="GraphQL Logo" />
            <h3>
              Apollo GraphQL Server
            </h3>
            <p>
              GraphQL is the new REST. Having a schema on the API helps with connecting systems
              in a micro-service architecture and makes it extremely easy to implement
              in client apps
              for all kind of operating systems and programming languages.
            </p>
          </div>
          <div className="w-lg-48">

            <h3>
            MongoDB
            </h3>
            <p>
            We&quot;ve chosen MongoDB because it is the most popular NoSQL DBMS out there.
            With a schema-less database, development of plugins and extensions
            that need to extend the existing data structure are much easier to develop.
              <a href="/faq">
              More infos about why Meteor.js or MongoDB you can find in our FAQ
              </a>
            </p>
          </div>

        </div>
      </section>


      <section className="section">

        <div>
          <h2>
Features by module
          </h2>
          <div className="features">
            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/07- container-package-logistic-truck.svg" alt="" />
                <h3>
  Delivery
                </h3>
              </div>
              <ul>
                <li>
  Downloadable Products
                </li>
                <li>
  E-Mail the order to a third-party logistics provider&apos;s central inbox
                </li>
                <li>
  Upload orders as CSV to a FTP host*
                </li>
                <li>
  Transfer orders electronically to any other system
                </li>
                <li>
  Post (Yellowcube), UPS, DHL Comissioning*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/65- cloud-server-document-sync.svg" alt="" />
                <h3>
  Documents
                </h3>
              </div>
              <ul>
                <li>
  Generate Documents&apos;s through a local bookkeeping system
                  (SAP R/3, Abacus, ...)
                </li>
                <li>
  Generate Documents&apos;s with HTML Templates
                </li>
                <li>
  Generate Documents&apos;s through SaaS services (Smallinvoice for ex.)
                </li>
                <li>
  Generate a new XML file for external processing
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/14- iphone-message-notification.svg" alt="" />
                <h3>
  Messaging
                </h3>
              </div>
              <ul>
                <li>
  Send Order Confirmations and Invoices by E-Mail, SMS or Whatsapp
                </li>
                <li>
  Send User Registration Notifications via Slack
                </li>
                <li>
  Twitter new orders anonymized*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/01- currency-money-hand-1.svg" alt="" />

                <h3>
                  Payments
                </h3>
              </div>
              <ul>
                <li>
                  Invoice (Post- and prepaid)
                </li>
                <li>
                  Stripe
                </li>
                <li>
                  PostFinance
                </li>
                <li>
                  PayPal
                </li>
                <li>
                 Datatrans
                </li>
                <li>
                  Bonity-checked invoices (Deltavista)
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/09- price-tag.svg" alt="" />
                <h3>
                  Pricing
                </h3>
              </div>
              <ul>
                <li>
                  B2B Users special price
                </li>
                <li>
                  Date range dependent special prices
                </li>
                <li>
                  Dynamic tax rate retrieval
                </li>
                <li>
                  Product, Payment, Order or Delivery prices confiurable
                </li>
                <li>
                  Weather-dependent barbeque sausage price*
                </li>
                <li>
                  Order total weight dependent charges, dynamically calculated by UPS*
                </li>
                <li>
                  Prices that depend on Languages, countries, users, order quantities, ...*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">

                <img className="feature-set__icon" src="../static/img/06- shopping-bag-money.svg" alt="" />
                <h3>
                  Discounts
                </h3>
              </div>
              <ul>
                <li>
                  Christmas & Black Friday Discounts
                </li>
                <li>
                  Percentage reducing discount codes
                </li>
                <li>
                  Absolute amount reducing discount codes
                </li>
                <li>
                  Swear word dependent daily discounts based on Donald Trump Twitter feed*
                </li>
                <li>
                  Lottery or random prices: Every 1000th buyer gets the stuff free of charge*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/05- warehouse-shelf-lift-truck.svg" alt="" />
                <h3>
                  Warehousing
                </h3>
              </div>
              <ul>
                <li>
                  ERP as Inventory Management*
                </li>
                <li>
                  Manage Inventory in Google Docs
                </li>
                <li>
                  Fire Just-in-time Production of any goods*
                </li>
                <li>
                  Real-time quantities (see an event get sold out live)*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/32- work-laptop-male-african-american-1.svg" alt="" />
                <h3>
                  Quotations
                </h3>
              </div>
              <ul>
                <li>
                  Automatically build individual offers in response to RFPs
                </li>
                <li>
                  Quotation workflow to confirm and reject offers
                </li>
                <li>
                  Allow users to digitally negotiate with the vendor
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/02- hand-thumbs-up-like.svg" alt="" />
                <h3>
                  Product Reviews
                </h3>
              </div>
              <ul>
                <li>
                  Allow users to comment on ordered products
                </li>
                <li>
                  Allow users to rate a product
                </li>
                <li>
                  Allow users to post custom data and/or reply to others messages
                </li>
                <li>
                  Intelligent Workflow that allows to scan
                  incomming reviews and controls the obligation for manual approvement.
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/31- programming-search-for-setting.svg" alt="" />
                <h3>
                  Faceted Search
                </h3>
              </div>
              <ul>
                <li>
                  Filters on any hierarchical level
                </li>
                <li>
                  Filters that get filtered by filters (Faceted)
                </li>
                <li>
                  Range, Selection and custom Filter types
                </li>
                <li>
                  Fast (custom index)
                </li>
                <li>
                  Item count prediction
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/08- java-script-developer.svg" alt="" />
                <h3>
                  And so much more
                </h3>
              </div>
              <ul>
                <li>
                  One shop for one world (Multi-country support)
                </li>
                <li>
                  Price your products in any currency you like. $XLM maybe?
                </li>
                <li>
                  Internationalization with multi-language support
                </li>
                <li>
                  Metadata extension on any entity easily possible
                </li>
              </ul>
            </div>
          </div>

          <small className="mt3 db">
* Examples of crazy plugins possible,
built during projects. The plugins usually take only hours to develop.
          </small>
        </div>
      </section>
      <Link href="/platform">
        <div className="text-center">
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
