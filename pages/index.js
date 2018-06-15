import React from 'react';
import { compose } from 'recompose';
import { Link } from '../routes';
import connectApollo from '../lib/connectApollo';
import variables from '../styles/variables';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Home = ({ home }) => (
  <PageLayout title={home.meta_title} metaDescription={home.meta_description}>

    <div className="snake-attack">
      <div className="wrap hero">
        <div className="hero__one">
          <h1 className="hero__title">Redefine Commerce every day.</h1>
          <h1 className="hero-text">
            <span>Unchained is a developer-first centered platform for multi-channel ecommerce.</span>
            <span> Now we can build all the crazy pricing, discount, sales ideas the marketing department ever dreamed of.</span>
            <span> Install the Unchained Engine, connect all your backend systems & start selling on any internet connected device.</span>
          </h1>
          <a href="/" className="button">Contact us</a>
        </div>
        <div className="icons">
          <img className="icon" src="../static/img/08- java-script-developer.svg" alt="" />
          <img className="icon" src="../static/img/06- desktop-imac-pen-tablet-notebook.svg" alt="" />
          <img className="icon" src="../static/img/15- web-programming-design-construction-3.svg" alt="" />
          <img className="icon" src="../static/img/11- digital-cash-payment.svg" alt="" />
          <img className="icon" src="../static/img/39- bitcoin-cloud-computing.svg" alt="" />
          <img className="icon" src="../static/img/08- shopping-cart-full.svg" alt="" />
          <img className="icon" src="../static/img/47- warehouse-worker-female-asian-2.svg" alt="" />
          <img className="icon" src="../static/img/01- convenience-store.svg" alt="convenience store" />
          <img className="icon" src="../static/img/09- package-logistic-airplane.svg" alt="" />
          <img className="icon" src="../static/img/01- house-for-sale.svg" alt="house for sale" />
          <img className="icon" src="../static/img/27- html-achievement.svg" alt="" />
          <img className="icon" src="../static/img/45- program-setting-1.svg" alt="" />
        </div>
      </div>


      <section className="wrap primary-section">
        <div className="icon-title-pair">
          <img className="icon" src="../static/img/icon/duotone/45- program-setting-1.svg" alt="" />
          <h2 className="section-title">The most flexible platform for ecommerce</h2>
        </div>
        <p>Unchained is soo cool. REally. fivelines</p>
        <Link href="/showcase">
          <a className="link">
              See a showcase
          </a>
        </Link>
      </section>
    </div>

    <div className="dev-bg">
      <section className="wrap developers-section">
        <div className="icon-title-pair">
          <img className="icon" src="../static/img/icon/duotone/66- osx-programmer-female-caucasian.svg" alt="" />
          <h2 className="section-title">Built for developers</h2>
        </div>
        <p>With Unchained you'll get a modern platform with flexible tools for internet commerce. Install the Unchained Engine, use your tech stack of choice, edit & add functionality, connect your backend systems & start selling on any internet connected device.</p>
        <Link href="/showcase">
          <a className="link">
              See a showcase
          </a>
        </Link>
      </section>
    </div>

    <div className="wrap">
      <div className="product-portfolio">
        <div className="product-portfolio__item product--one-black">
          <a className="unit">
            <div className="unit__copy c-white">
              <h3 className="unit__header">Headless Architecture</h3>
              <p className="unit__subheader">Choose your decoupled CMS, connect the unchained API with your site, experience true customization</p>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </div>
        <div className="product-portfolio__item product--one-white">
          <a className="unit">
            <div className="unit__copy">
              <h3 className="unit__header">Easy Payment Integration</h3>
              <p className="unit__subheader">One file, one payment provider. Credit Cards, PayPal, Bitcoins and more</p>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </div>
        <div className="product-portfolio__item product--oeco">
          <a className="unit">
            <div className="unit__copy">
              <h3 className="unit__header">Choose your CRM, ERP, SCM, SFA</h3>
              <p className="unit__subheader">Integrate all your tools via our GraphQL API</p>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </div>
        <div className="product-portfolio__item product-4">
          <div className="unit">
            <div className="unit__copy">
              <h3 className="unit__header">Fast DEV & always 100% FLEX</h3>
              <p className="unit__subheader">Made to improve, enhance, scale your e-commerce business</p>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </div>
        </div>
      </div>

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
    </div>

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">open-source, available on <a className="link" href="https://github.com/unchainedshop">Github*</a></h2>
      <p className="text-center">* The Unchained Engine OSS Release <a className="link" href="https://github.com/unchainedshop/unchained-evolution">follows Q1 2019</a></p>
    </div>

    <div className="c-bg-primary">
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <h3 className="mt0 c-white">Get more information by choosing your role</h3>
          <div className="button-group">
            <Link href="/community">
              <a className="button">
                  Developer / Consultant
              </a>
            </Link>
            <Link href="/showcase">
              <a className="button">
                  Merchant
              </a>
            </Link>
            <Link href="/fundraiser">
              <a className="button">
                  Investor
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <h1 className="mt0 c-black">Token Generation Event</h1>
          <Link href="/fundraiser">
            <a className="button hero-button">
              Read about our Fundraiser
            </a>
          </Link>
        </div>
      </div>
    </div>

    <style jsx>{`

      .icon-title-pair {
        display: flex;
        align-items: center;
      }

      .icon-title-pair .icon {
        width: 100px;
        margin-right: 1em;
      }

      .dev-bg {
        margin-top: 14em;
        margin-bottom: 10em;
        padding: 3em 0 4em;
        background-color: ${variables.primaryColor};
        color: white;
      }

      .hero__title {
        font-family: 'Montserrat', sans-serif;
        font-size: 3em;
        font-weight: 900;
        line-height: 1.1;
      }

      .milestone {
        margin-top: 1.5em;
      }

      .phase {
        margin-top: 2.5em;
      }

      .hero-img {
        margin-top: 1em;
        width: 300px;
        display: block;
        margin-left: 0;
        margin-right: 0;
        z-index: -1;
        position: relative;
        float: right;
      }

      .hero-text {
        font-size: 22px;
        line-height: 1.5;
        color: #A3A3A3;
      }
      @media (max-width: 767px) {
        .hero-text {
          font-size: 1em;
        }
      }
      @media (min-width: 1025px) {
        .hero-img {
          width: 44%
        }
        .hero__one {
          width: 100%
        }
      }

      .hero-text {
        margin-bottom: 3em;
      }

      .icons {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 2em;
      }

      .icon {
        width: 80px;
      }

      .link {
        color: ${variables.primaryColor};
      }
      .link:hover {
        text-decoration: underline;
      }

      .c-bg-dark .link {
        color: white;
      }

      .primary-section {
        position: relative;
      }

      .primary-section::before {
        display: block;
        content: '';
        background-color: ${variables.grayColor};
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 560px;
        box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 4px 14px rgba(0,0,0,.1);
        z-index: -1;
        position: absolute;
        left: -50px;
        top: -150px;
      }


      @media (min-width: 740px) {
        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .feature-set {
          display: flex;
          justify-content: flex-start;
        }
        .feature-set h3 {
          min-width: 240px;
          margin-right: 1em;
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
