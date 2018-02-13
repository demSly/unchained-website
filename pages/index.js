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
      <h2 className="hero-text text-center">The only hackable e-commerce solution that gets out of your way</h2>
      <img className="hero-img" src="../static/img/robot-hand.svg" alt="robot hand" />
    </div>


    <div className="product-portfolio">
      <div className="product-portfolio__item product--one-black">
        <Link route="product" params={{ name: 'one-black' }} >
          <a className="unit">
            <div className="unit__copy c-white">
              <h2 className="unit__header">Headless Architecture</h2>
              <h3 className="unit__subheader">Choose your decoupled CMS of choice and experience true customization</h3>
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
              <h3 className="unit__subheader">Credit Cards, PayPal, Bitcoin and more</h3>
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
              <h3 className="unit__subheader">Integrate your tools via our API</h3>
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
      <h2>Our incomplete features & plugin list</h2>

      <div className="feature-set">
        <h3>Delivery</h3>
        <ul>
          <li><a href="#">eMail delegation</a></li>
          <li><a href="#">Post</a></li>
          <li>UPS, DHL (in development)</li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>Discounts</h3>
        <ul>
          <li><a href="#">Special deals by ID / tokens :)</a></li>
          <li><a href="#">Percentage deals by date</a></li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>Documents</h3>
        <ul>
          <li><a href="#">PDF</a></li>
          <li><a href="#">SmallInvoice plugin</a></li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>Messaging</h3>
        <ul>
          <li><a href="#">by eMail</a></li>
          <li><a href="#">by SMS</a></li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>Payments</h3>
        <ul>
          <li><a href="#">Bitcoin, Ether & more cryptocurrencies</a></li>
          <li><a href="#">Invoice</a></li>
          <li><a href="#">Stripe</a></li>
          <li><a href="#">PostFinance</a></li>
          <li><a href="#">PayPal</a></li>
          <li><a href="#">Deltavista</a></li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>Pricing</h3>
        <ul>
          <li><a href="#">catalog</a></li>
          <li><a href="#">product</a></li>
          <li><a href="#">discount</a></li>
          <li><a href="#">tax</a></li>
          <li><a href="#">cart</a></li>
          <li><a href="#">cart discount</a></li>
          <li><a href="#">delivery</a></li>
          <li><a href="#">payment</a></li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>Warehousing</h3>
        <ul>
          <li><a href="#">manual stock</a></li>
          <li>reactive stock (in development)</li>
        </ul>
      </div>

      <div className="feature-set">
        <h3>so much more</h3>
        <ul>
          <li><a href="#">Countries</a></li>
          <li><a href="#">Currencies</a></li>
          <li><a href="#">Languages</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Users</a></li>
        </ul>
      </div>

    </div>

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">open-source, available on <a className="link" href="#">Github</a></h2>
    </div>

    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h2 className="text-center">Advantages of Headless CMS software </h2>

      <div className="advantage">
        <img alt="digital-cash-payment" className="advantage-img" src="../static/img/11- digital-cash-payment.svg" />
        <p><b>Omnichannel readiness:</b> The content created in a headless CMS is “pure” and can
        be repurposed across multiple channels, including website,
        mobile app, digital assistant, virtual reality,
        smart watches, etc. anywhere and at any time through the customer journey.
        </p>
      </div>
      <div className="advantage">
        <img alt="currency-money-hand" className="advantage-img" src="../static/img/01- currency-money-hand-1.svg" />
        <p><b>Low operating costs:</b> Headless CMSs are usually cheaper to install
        and run than their monolith counterparts,
        especially as they are typically built on a cloud model where
        multi-tenant options keep the running costs low.
        </p>
      </div>

      <div className="advantage">
        <img alt="business-balance-time-income" className="advantage-img" src="../static/img/28- business-balance-time-income-2.svg" />
        <p><b>Reduces time to market:</b> A headless CMS promotes an agile way of working
         because content creators and developers can work simultaneously,
         and projects can be finished faster.
        </p>
      </div>

      <div className="advantage">
        <img alt="easy-to-use-cake" className="advantage-img" src="../static/img/38- easy-to-use-cake.svg" />
        <p><b>Easy to use:</b> Traditional CMS systems tend to be cumbersome and
        complex* as vendors attempt to offer every available feature in one box.
        Headless systems focus on content management; keeping things simple for those
        who use it on a daily basis. The entire user experience can usually
        be managed from within one back end.
        </p>
      </div>

      <div className="advantage">
        <img alt="program-setting" className="advantage-img" src="../static/img/45- program-setting-1.svg" />
        <p><b>Flexibility:</b> Content editors can work in whichever headless CMS
        they like and developers can build any kind of front end they want in their
        preferred language (e.g. Ruby, PHP, Java, or Swift) and then simply integrate
        the two via APIs (like JSON or XML) over RESTful communication. This allows
        for polyglot programming where multiple programming paradigms can be used to
        deliver content to multiple channels, and enables a company to benefit from
        the latest developments in language frameworks, promoting a microservices architecture.
        </p>
      </div>

      <div className="advantage">
        <img alt="cloud-server-network" className="advantage-img" src="../static/img/03- cloud-server-network.svg" />
        <p><b>Cloud Scalability:</b> The content purity and stateless APIs of headless
         CMSs enable high scalability, especially as the architecture fully leverages
          the elasticity of a cloud platform.
        </p>
      </div>

      <div className="advantage">
        <img alt="security-system-shield-lock" className="advantage-img" src="../static/img/22- security-system-shield-lock.svg" />
        <p><b>System Security:</b> Since the content is typically provided through
         a high-performance Content Delivery Network (rather than directly from the database),
         the risk of distributed denial-of-service attacks (DDOS) is reduced.
        </p>
      </div>
    </div>

    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <div className="text-center">
          <h1 className="mt0 c-white">I'm a</h1>

          <Link href="/contact">
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

      .advantages {
        padding-bottom: 2em;
      }
      @media (min-width: 768px) {
        .advantages {
          display: flex;
        }
      }

      .advantage {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .advantage {
        margin-top: 2.5em;
      }

      .advantage h2 {
        margin-top: 0;
        margin-bottom: 0;
      }

      .advantage p {
        margin-top: .25em;
        margin-bottom: 0;
      }

      .advantage-img {
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        height: 200px;
      }

      @media (min-width: 768px) {
        .advantage p {
          max-width: 80%;
        }
        .advantage-img {
          width: 120px;
          height: 120px;
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
