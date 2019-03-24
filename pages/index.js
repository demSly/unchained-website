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
          <h1 className="hero__title">
            Build the best possible Online Shop and sell your Products on any Device.
          </h1>
          <h3 className="hero__subtitle">
            Digital Commerce Platform made for Enterprises.
          </h3>
          <h1 className="hero-text">
            <div className="tags">
              <Link href="/why-headless">
                <a className="tag">
                  <div className="tag__flex">
                    <span className="tag__pill tag__pill--headless">
                      #headless
                    </span>
                    <span className="tag__text">
                      Bring your own UI
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/platform">
                <a className="tag">
                  <div className="tag__flex">
                    <span className="tag__pill">
                      #open-source
                    </span>
                    <span className="tag__text">
                      No vendor lock-in
                    </span>
                  </div>
                </a>
              </Link>
            </div>
            <p className="explainer">
              First of its kind software platform for multi-channel e-commerce.
              Implement all the crazy pricing, discount & loyalty
              ideas through the unique developers-first approach. Start selling
              goods, services & subscriptions
              on any internet connected device.
            </p>
          </h1>
        </div>
        <div className="text-center">
          <img className="undraw" src="../static/img/undraw_online_shopping_ga73.svg" alt="online shopping" />
        </div>

        {/* <div className="icons">
          <img className="icon" src="../static/img/08- java-script-developer.svg" alt="" />
          <img className="icon" src="../static/img/06- desktop-imac-pen-tablet-notebook.svg" alt="" />
          <img className="icon" src="../static/img/15- web-programming-design-construction-3.svg" alt="" />
          <img className="icon" src="../static/img/01- cloud-network-device.svg" alt="" />
          <img className="icon" src="../static/img/39- bitcoin-cloud-computing.svg" alt="" />
          <img className="icon" src="../static/img/08- shopping-cart-full.svg" alt="" />
          <img className="icon" src="../static/img/11- digital-cash-payment.svg" alt="" />
          <img className="icon" src="../static/img/47- warehouse-worker-female-asian-2.svg" alt="" />
          <img className="icon" src="../static/img/01- convenience-store.svg" alt="convenience store" />
          <img className="icon" src="../static/img/09- package-logistic-airplane.svg" alt="" />
          <img className="icon" src="../static/img/01- house-for-sale.svg" alt="house for sale" />
          <img className="icon" src="../static/img/27- html-achievement.svg" alt="" />
        </div> */}
      </div>


      <section className="primary-section">
        <div className="wrap wrap--narrow">
          <div className="text-center">
            <img className="undraw undraw--mini" src="../static/img/undraw_create_f05x.svg" alt="" />
            <h2 className="section-title">
              The most flexible platform for digital commerce
            </h2>
          </div>
          <p>
            The headless approach allows you to build e-commerce apps which run natively
            on mobile phones, watches, TVs, wearables and your own hardware.
            It empowers developers to integrate proprietary &
            decentralized systems, bridging digital commerce with the internet of
            things & distributed ledgers.
          </p>

          <p>
            {`
              By using open-source technologies & popular programming languages,
              it is very easy for developers to extend and adapt the platform for
              the company specific needs. This enables product
              owners to design creative business processes like never before.
            `}
          </p>
          <div className="button-group mt3">
            <Link href="/showcase">
              <a className="button">
                  See our showcase
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>

    <div className="c-bg-dark">
      <section className="wrap wrap--narrow developers-section">
        <div className="text-center">
          <img className="undraw undraw--mini" src="../static/img/undraw_programming_2svr-2.svg" alt="" />
          <h2 className="section-title">
            Built for developers
          </h2>
        </div>
        <p>
          Unchained Engine is headless by default, so there is no UI. Just
          build your own interface on top of the GraphQL API.
          If you want to connect your existing backends or add a cryptocurrency as a way
          of payment, just write a small plugin, build your own module, add a micro-service,
          fork the whole thing or just extend the GraphQL API
          with with your own queries & types. All you need
          is some Javascript (Node.js) knowhow. This is the last shop system you
          will ever need to satisfy your software&apos;s e-commerce requirements.
        </p>
        <div className="button-group mt3">
          <Link href="/developers">
            <a className="button button--primary">
                Show me some code
            </a>
          </Link>
        </div>
      </section>
    </div>


    <div className="wrap">
      <div className="product-portfolio">
        <div className="product-portfolio__item frontend">
          <a className="unit">
            <div className="unit__copy">
              <h3 className="unit__header">
                Your Frontend
              </h3>
              <p className="unit__subheader">
                Integrate with your iOS App, Android Watch, Website, Car. Connect the Unchained
                GraphQL API with your frontend of choice & build the perfect experience.
                This page is built with Next.js & Apollo Client.
              </p>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </div>
        <div className="product-portfolio__item backend">
          <a className="unit">
            <div className="unit__copy">
              <h3 className="unit__header">
                Your Backend
              </h3>
              <p className="unit__subheader">
                Add your CRM, ERP, PIM, etc.
                <br />
                We already successfully connected Unchained to various
                core systems like MS Navision & Crossbase as
                well as Smallinvoice & Google Spreadsheets.
                <br />
                API available? Go!
              </p>
            </div>
            <div className="unit__image-wrap">
              <figure className="unit__image" />
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">
        open-source, available on
        {' '}
        <a className="link" href="https://github.com/unchainedshop">
          Github
        </a>
      </h2>
      <div className="wrap tech-stack-wrap">
        <small className="text-center db">
          Built on:
        </small>
        <div className="tech-stack-flex">
          <img className="tech-stack" src="../static/img/tech/GraphQL_Logo.svg" alt="GraphQL Logo" />
          <img className="tech-stack" src="../static/img/tech/JavaScript-logo.png" alt="Javascript Logo" />
          <img className="tech-stack" src="../static/img/tech/nodejs.png" alt="Node JS Logo" />
          <img className="tech-stack" src="../static/img/tech/apollo-logo.png" alt="Apollo Logo" />
        </div>
        <small className="text-center db">
Fits well with:
        </small>
        <div className="tech-stack-flex">
          <img className="tech-stack" src="../static/img/tech/react-logo.svg" alt="React JS Logo" />
          <img className="tech-stack" src="../static/img/tech/angular.svg" alt="Angular JS Logo" />
          <img className="tech-stack" src="../static/img/tech/vue.png" alt="Vue JS Logo" />
        </div>
        <small className="text-center db ph1">
          Works with PHP, Ruby on Rails, Java, Python, Swift,
          Go, Haskell & any other programming language. Your choice.
        </small>
      </div>
    </div>

    <section className="timeline wrap">
      <div className="container">
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Apr 2017
            </div>
            <p>
Sketch out the architecture of a headless digital commerce platform
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Jun 2017
            </div>
            <p>
Signed first customer contract
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Nov 2017
            </div>
            <p>
              GoLive with first customer &quot;Freezyboy&quot;
            </p>
            <a className="button" href="https://freezyboy.com">
See freezyboy.com
            </a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="date">
Jan 2018
            </div>
            <p>
Release of Unchained Website
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Mar 2018
            </div>
            <p>
Release of Roadmap 1.0
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Jun 2018
            </div>
            <p>
Signed second customer contract with two implementation partners
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Q2-Q4 2018
            </div>
            <p>
Roadshow for Zürich based agencies
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Feb 2019
            </div>
            <p>
              GoLive with customer &quot;Publicare&quot;
            </p>
            <a className="button" href="https://publicare.ch">
See pubicare.ch
            </a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Mar 2019
            </div>
            <p>
            Release of Unchained Engine as OSS
            </p>
            <a className="button" href="https://github.com/unchainedshop/unchained">
See on Github
            </a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Q2 2019
            </div>
            <ul>
              <li>
Release of Unchained Express
              </li>
              <li>
Release of Unchained Managed Hosting
              </li>
              <li>
Release of Roadmap 2.0
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Q3-Q4 2019
            </div>
            <ul>
              <li>
Release of Plugin Marketplace 1.0 Beta as SaaS
              </li>
              <li>
Release of Unchained Control Panel 1.0 Beta as SaaS
              </li>
              <li>
Global Roadshow
              </li>
              <li>
Unchained Conference 2019
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>


    <div>
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <h3 className="mt0 mb">
            Get more information
          </h3>
          <div className="button-group">
            <Link href="/developers">
              <a className="button button--role">
                  Developers
                <img className="w72px" src="../static/img/07- developer-macbook-stickerbomb.svg" alt="" />
              </a>
            </Link>
            <Link href="/showcase">
              <a className="button button--role">
                  Merchants
                <img className="w72px" src="../static/img/06- business-team.svg" alt="" />
              </a>
            </Link>
            <Link href="/partners">
              <a className="button button--role">
                  Partners
                <img className="w72px" src="../static/img/59- office-supervisor-desk-male-asian.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* <div>
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <img className="icon-investment" src="../static/img/21- money-investment.svg" alt="" />
          <h1 className="mt0 c-black">
Token Generation Event
          </h1>
          <Link href="/fundraiser">
            <a className="button hero-button">
              Read about our Fundraiser
            </a>
          </Link>
        </div>
      </div>
    </div> */}

    <style jsx>
      {`
      @media (min-width: 680px) {
        .undraw {
          width: 90%;
        }
      }

      .button--role {
        min-height: 126px;
        margin-bottom: 1em;
        margin-right: 3rem;
      }

      .w72px {
        width: 96px;
        display: block;
        margin: 0 auto;
      }

      .icon-investment {
        display: block;
        margin: 0 auto;
        width: 240px;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1.6em;
      }

      .tag {
        display: inline-block;
        padding: 4px 15px 4px 10px;
        border-radius: 20px;
        background-color: #F5F5F5;
        margin-bottom: .5em;
        margin-right: 1em;
      }
      .tag__flex {
        display: flex;
        align-items: center;
      }
      .tag__pill {
        border-radius: 8px;
        background-color: ${variables.primaryColor};
        color: #FFFFFF;
        margin-right: .75em;
        font-size: 12px;
        padding: 0px 6px;
      }
      .tag__pill--headless {
        background-color: ${variables.tertiaryColor};
        color: #555555;
      }
      .tag__text {
        font-size: 14px;
      }

      .tech-stack-wrap {
        padding: 0;
      }

      .tech-stack-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        max-width: 480px;
        margin: 0 auto 3em;
      }

      .tech-stack {
        width: 60px;
      }

      .tech-stack + .tech-stack {
        margin-left: 1em;
      }

      .c-bg-dark {
        position: relative;
        z-index: 0;
        margin-bottom: 3em;
        padding: 3em 0 4em;
      }

      .hero__title {
        font-size: 1.75em;
        max-width: 488px;
      }

      .hero__subtitle {
        margin-bottom: 2em;
        opacity: .75;
        max-width: 340px;
      }

      .explainer {
        line-height: 1.45;
        font-size: 16px;
        max-width: 468px;
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
        font-size: 18px;
        line-height: 1.5;
        color: rgba(0,0,0,.4);
      }
      @media (max-width: 767px) {
        .hero-text {
          font-size: 1em;
        }
        .tech-stack {
          width: 40px;
        }
      }
      .hero__one {
        min-width: 60%;
      }
      @media (min-width: 1025px) {
        .hero__title {
          margin-bottom: 1.2em;
        }
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

      .c-bg-dark .link {
        color: white;
        text-decoration: underline;
      }

      .primary-section {
        position: relative;
        padding: 200px 0 100px;
        transform: skew(0deg, -10deg);
        margin-top: -160px;
      }
      .primary-section .wrap {
        transform: skew(0deg, 10deg);
      }

      .primary-section::before {
        display: block;
        content: '';
        background-image: linear-gradient(to bottom, ${variables.grayColor}, white);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 90%;
        box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 4px 14px rgba(0,0,0,.1);
        z-index: -1;
        position: absolute;
        left: 0px;
        top: 100px;
        border-top: 12px solid ${variables.primaryColor};
        border-bottom: 12px solid white;
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
