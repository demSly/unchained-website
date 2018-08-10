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
Redefine Commerce every day.
          </h1>
          <h1 className="hero-text">
            <div className="tags">
              <Link href="/platform">
                <a className="tag">
                  <div className="tag__flex">
                    <span className="tag__pill">
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
            <span>
Unchained is the best software platform for multi-channel digital commerce.
              Implement all the crazy pricing, discount & loyalty
              ideas through the unique developers-first approach & start selling
              goods, services or subscriptions
              on any internet connected device.
            </span>
          </h1>
          <a href="/" className="button">
Contact us
          </a>
        </div>
        <div className="icons">
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
        </div>
      </div>


      <section className="primary-section">
        <div className="wrap">
          <div className="icon-title-pair">
            <img className="icon" src="../static/img/45- program-setting-1.svg" alt="" />
            <h2 className="section-title">
The most flexible platform for digital commerce
            </h2>
          </div>
          <p>
A platform that is compatible with any kind of internet based
            devices & services, empowers developers to integrate proprietary &
            decentralized systems, bridging digital commerce with the internet of
            things & distributed ledgers.
          </p>
          <p>
The headless approach with the combination of
            GraphQL leverages using Unchained Engine
            for more than just an e-commerce solution.
            Instead it acts as modern gateway to your legacy systems
            while providing all needed tools to satisfy your
            digital commerce needs.
          </p>
          <p>
            We built the platform with Node.js & MongoDB because we wanted
            something that you can onboard developers quickly, empowering change
            rather than the traditional &quot;let&apos;s stick with the standard process&quot;
            mindset, effectively breaking the need to hire expensive specialized consultants.
            With extensibility & ease of use in mind, the popularity of a programming language
            & a friction-free extension of logic, db structure & code is what
            matters most.
          </p>
          <Link href="/showcase">
            <a className="link mt3 db">
                See a showcase
            </a>
          </Link>
        </div>
      </section>
    </div>

    <div className="c-bg-dark">
      <section className="wrap developers-section">
        <div className="icon-title-pair">
          <img className="icon" src="../static/img/66- osx-programmer-female-caucasian.svg" alt="" />
          <h2 className="section-title">
Built for developers
          </h2>
        </div>
        <p>
Unchained Engine is headless by default, so there is no UI. Just
          build your own interface on top of the GraphQL API.
          Maybe you want to connect your existing backends? or add a cryptocurrency as a way
          of payment? Write a small plugin, build your own module, add a micro-service,
          fork the whole thing or just extend the GraphQL API schema
          with with your own queries & types. All you need
          is some Javascript (Node.js) knowhow. This is the last shop system you
          will ever need to satisfy your software&apos;s commerce requirements.
        </p>
        <Link href="/developers">
          <a className="button button--primary mt3">
              Show me some code
          </a>
        </Link>
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
            <div className="unit__copy c-white">
              <h3 className="unit__header">
                Your Backend
              </h3>
              <p className="unit__subheader">
                Add your CRM, ERP, PIM, etc.
                <br />
                We already successfully connected Unchained to various
                core systems like MS Navision & Crossbase as
                well as Smallinvoice, Google Spreadsheets.
                <br />
                API available? Go.
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
        <a className="link" href="https://github.com/unchainedshop">
Github*
        </a>
      </h2>
      <p className="text-center">
* The Unchained Engine OSS Release
        <a className="link" href="https://github.com/unchainedshop/unchained-evolution">
follows end of Q1 2019
        </a>
      </p>
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
        <small className="text-center db">
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
See Freezyboy.com
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
Apr 2018
            </div>
            <p>
Init Partner Program for Agencies
            </p>
            <Link href="/partner-program">
              <a className="button">
To the Partner Program
              </a>
            </Link>
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
Q1-Q2 2019
            </div>
            <ul>
              <li>
Release of Unchained Managed Hosting
              </li>
              <li>
Release of Plaform 1.0 as OSS
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


    <div className="c-bg-secondary">
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <h3 className="mt0">
Get more information by choosing your role
          </h3>
          <div className="button-group">
            <Link href="/developers">
              <a className="button button--secondary">
                  Developer
                <img className="w72px" src="../static/img/58- programmer-male-african-american.svg" alt="" />
              </a>
            </Link>
            <Link href="/showcase">
              <a className="button button--secondary">
                  Merchant
                <img src="../static/img/06- business-team.svg" alt="" />
              </a>
            </Link>
            {/* <Link href="/fundraiser">
              <a className="button button--secondary">
                  Investor
                <img src="../static/img/86- business-income-female-asian.svg" alt="" />
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </div>

    <div>
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
    </div>

    <style jsx>
      {`

      .w72px {
        width: 72px;
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
        box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 4px 14px rgba(0,0,0,.4);
        padding: 1em;
        border: 2px solid rgba(255,255,255,.4);
        max-width: 480px;
        margin: 0 auto 3em;
      }

      .tech-stack {
        width: 80px;
      }

      .tech-stack + .tech-stack {
        margin-left: 1em;
      }

      .icon-title-pair {
        display: flex;
        align-items: center;
      }

      .icon-title-pair .icon {
        width: 120px;
        margin-right: 1em;
      }

      .c-bg-dark {
        position: relative;
        z-index: 0;
        margin-bottom: 3em;
        padding: 3em 0 4em;
      }

      .hero__title {
        font-size: 2.75em;
        font-weight: 600;
        line-height: 1.1;
        max-width: 480px;
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
      }
      @media (min-width: 1025px) {
        .hero__title {
          font-size: 2.5em;
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
        border-top: 12px solid ${variables.secondaryColor};
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
