import React from 'react';
import { compose } from 'recompose';
import { Link } from '../routes';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Home = ({ home }) => (
  <PageLayout title={home.meta_title} metaDescription={home.meta_description}>

    <div className="wrap hero">
      <h2 className="hero-text text-center">Weather-dependent barbeque sausage pricing</h2>
      <p className="text-center">Unchained lets you create the coolest e-commerce experiences on earth. Now.</p>
      <img className="hero-img" src="../static/img/robot-hand.svg" alt="robot hand" />
    </div>

    <p />
    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <div className="text-center">
          <h1 className="mt0 c-black">Token Generation Event</h1>
          <Link href="/fundraiser">
            <a className="button hero-button">
              Invest now
            </a>
          </Link>
          <p className="mt0 c-black">Pre-sale has started</p>
        </div>
      </div>
    </div>


    <div className="product-portfolio">
      <div className="product-portfolio__item product--one-black">
        <Link route="product" params={{ name: 'one-black' }} >
          <a className="unit">
            <div className="unit__copy c-white">
              <h2 className="unit__header">Headless Architecture</h2>
              <h3 className="unit__subheader">Choose your decoupled CMS, connect the unchained API with your site, experience true customization</h3>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </Link>
      </div>
      <div className="product-portfolio__item product--one-white">
        <Link route="product" params={{ name: 'one-white' }} >
          <a className="unit">
            <div className="unit__copy">
              <h2 className="unit__header">Easy Payment Integration</h2>
              <h3 className="unit__subheader">One file, one payment provider. Credit Cards, PayPal, Bitcoins and more</h3>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </Link>
      </div>
      <div className="product-portfolio__item product--oeco">
        <Link route="product" params={{ name: 'oeco' }} >
          <a className="unit">
            <div className="unit__copy">
              <h2 className="unit__header">Choose your CRM, ERP etc.</h2>
              <h3 className="unit__subheader">Integrate all your tools via our next-generation GraphQL API</h3>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </Link>
      </div>
      <div className="product-portfolio__item product-4">
        <div className="unit">
          <div className="unit__copy">
            <h2 className="unit__header">Faster & more flexible</h2>
            <h3 className="unit__subheader">Ready to scale your business</h3>
          </div>
          <div className="unit__image-wrap">
            <figure className="unit__image" />
          </div>
        </div>
      </div>
    </div>

    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h2>Next-generation e-commerce platform</h2>
      <p>Unchained is different. The system is built in a way that it&apos;s
        really easy for a developer to
        change the behavior but impossible to do it without programming knowledge
         (unless explicitly engineered for a use case).
        This enables developing partners to enable any kind of business logic and
         true flexibility in their e-commerce projects:
      </p>

      <p><strong>No limits for business logic requirements</strong></p>
      <p><strong>Complete freedom in how your user interface should look like</strong></p>
      <p>
        <strong>Connect the data of any legacy and
        enterprise software the way you want it
        </strong>
      </p>


      <h2>Our incomplete features & plugin list</h2>
      <div className="feature-set">
        <h3>No-limit Delivery</h3>
        <ul>
          <li>Downloadable Products</li>
          <li>E-Mail the order to a third-party logistics provider&apos;s central inbox</li>
          <li>Upload orders as CSV to a FTP host*</li>
          <li>Transfer orders electronically to any other system</li>
          <li>Post (Yellowcube), UPS, DHL Comissioning*</li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>No-limit Documents</h3>
        <ul>
          <li>Generate PDF&apos;s locally through a local bookkeeping system
            (SAP R/3, Abacus, ...)
          </li>
          <li>Generate PDF&apos;s through SaaS services (Smallinvoice)</li>
          <li>Generate a new XML file for external processing</li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>No-limit Messaging</h3>
        <ul>
          <li>Send Order Confirmations and Invoices by E-Mail, SMS or Whatsapp</li>
          <li>Send User Registration Notifications via Slack</li>
          <li>Twitter new orders anonymized*</li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>No-limit Payments</h3>
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
        <h3>No-limit Pricing</h3>
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
        <h3>No-limit Discounts</h3>
        <ul>
          <li>Christmas & Black Friday Discounts</li>
          <li>Percentage reducing discount codes</li>
          <li>Absolute amount reducing discount codes</li>
          <li>Swear word dependent daily discounts based on Donald Trump Twitter feed*</li>
          <li>Lottery or random prices: Every 1000th buyer gets the stuff free of charge*</li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>No-limit Warehousing</h3>
        <ul>
          <li>ERP as Inventory Management*</li>
          <li>Google Docs Inventory*</li>
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

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">open-source, available on <a className="link" href="https://github.com/unchainedshop">Github*</a></h2>
      <p className="text-center">* The Unchained Engine OSS Release <a className="link" href="https://github.com/unchainedshop/unchained-evolution">follows Q3 2018</a></p>
    </div>

    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <div className="text-center">
          <h1 className="mt0 c-black">I&apos;m a</h1>
          <Link href="/agencies">
            <a className="button">
                Developer / Agency
            </a>
          </Link>
          <Link href="/contact">
            <a className="button">
                Merchant
            </a>
          </Link>
          <Link href="/fundraiser">
            <a className="button">
                Investor
            </a>
          </Link>
          <p className="mt0 c-black">Choose your role to get more information</p>
        </div>
      </div>
    </div>

    <style jsx>{`

      .feature-set ul li a,
      .link {
        color: blue;
        text-decoration: underline;
      }

      .c-bg-dark .link {
        color: white;
      }

      @media (min-width: 740px) {
        .feature-set {
          display: flex;
          justify-content: flex-start;
        }
        .feature-set h3 {
          min-width: 200px;
        }
      }

      .button {
        margin-right: 1.5em;
        margin-bottom: 1em;
      }

      @media (min-width: 1024px) {
        .button + .button {
          margin-left: 1.5em;
        }
      }

      .milestone {
        margin-top: 1.5em;
      }

      .phase {
        margin-top: 2.5em;
      }

      .hero-img {
        margin-top: 1em;
        max-width: 500px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .hero-text {
        line-height: 1.3;
      }
      @media (max-width: 767px) {
        .hero-text {
          font-size: 1.25em;
        }
      }
      @media (min-width: 1025px) {
        .hero-text {
          margin-left: auto;
          margin-right: auto;
          max-width: 50%;
        }
      }

    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('home'),
)(Home));
