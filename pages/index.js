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
            <div className="tags">
              <Link href="/platform">
                <a className="tag">
                  <div className="tag__flex">
                    <span className="tag__pill">#headless</span>
                    <span className="tag__text">Bring your own UI</span>
                  </div>
                </a>
              </Link>
              <Link href="/platform">
                <a className="tag">
                  <div className="tag__flex">
                    <span className="tag__pill">#open-source</span>
                    <span className="tag__text">Free software</span>
                  </div>
                </a>
              </Link>
            </div>
            <span>Unchained is the best software platform for multi-channel digital commerce. Developers-first driven, headless & unstoppable. </span>
            <br />
            <span>Implement all the crazy pricing, discount and loyalty
              ideas, connect it to your backend systems and start selling goods
              on any internet connected device.
            </span>
          </h1>
          <a href="/" className="button">Contact us</a>
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
            <h2 className="section-title">The most flexible platform for e-commerce</h2>
          </div>
          <p>A platform that is compatible with any kind of internet devices and decentralized systems, bridging e-commerce with the internet of things and distributed ledgers.</p>
          <p>Now we can build all the crazy pricing, discount, sales ideas the marketing department ever dreamed of. Install the Unchained Engine, connect all your backend systems & start selling on any internet connected device.</p>
          <p>With the combination of GraphQL as API technology and a built-for-headless approach, unchained.shop is the e-commerce engine that works with any UI, is indefinitely extendable and is by design compatible with any modern software.</p>
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
          <h2 className="section-title">Built for developers</h2>
        </div>
        <p>Unchained is by default headless, there is no UI, just a GraphQL schema you'll get to work with. This modern platform with flexible tools for internet commerce allows for fast feature development times & total flexibility. Install the Unchained Engine, use your tech stack of choice, edit & add functionality, connect your backend systems & start selling on any internet connected device. We are working on the Documentation. Stay tuned.</p>
        <Link href="/developers">
          <a className="button button--primary mt3">
              Learn more
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
              <h3 className="unit__header">Choose your CRM, ERP, PIM, SCM</h3>
              <p className="unit__subheader">Integrate all your backend tools via our GraphQL API</p>
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


    </div>

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">open-source, available on <a className="link" href="https://github.com/unchainedshop">Github*</a></h2>
      <p className="text-center">* The Unchained Engine OSS Release <a className="link" href="https://github.com/unchainedshop/unchained-evolution">follows Q1 2019</a></p>
      <div className="wrap tech-stack-wrap">
        <small className="text-center db">Built on:</small>
        <div className="tech-stack-flex">
          <img className="tech-stack" src="../static/img/tech/GraphQL_Logo.svg" alt="GraphQL Logo" />
          <img className="tech-stack" src="../static/img/tech/JavaScript-logo.png" alt="Javascript Logo" />
          <img className="tech-stack" src="../static/img/tech/nodejs.png" alt="Node JS Logo" />
          <img className="tech-stack" src="../static/img/tech/apollo-logo.png" alt="Apollo Logo" />
        </div>
        <small className="text-center db">Fits well with:</small>
        <div className="tech-stack-flex">
          <img className="tech-stack" src="../static/img/tech/react-logo.svg" alt="React JS Logo" />
          <img className="tech-stack" src="../static/img/tech/angular.svg" alt="Angular JS Logo" />
          <img className="tech-stack" src="../static/img/tech/vue.png" alt="Vue JS Logo" />
        </div>
        <small className="text-center db">Works with PHP, Ruby on Rails, Java, Python, Haskell & whatever stack you are using, you choose.</small>
      </div>
    </div>

    <div className="c-bg-secondary">
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <h3 className="mt0">Get more information by choosing your role</h3>
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
            <Link href="/fundraiser">
              <a className="button button--secondary">
                  Investor
                <img src="../static/img/86- business-income-female-asian.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="wrap wrap--vertical-padding">
        <div className="text-center">
          <img className="icon-investment" src="../static/img/21- money-investment.svg" alt="" />
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
        padding: 200px 0;
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
