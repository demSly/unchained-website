import React from 'react';
import { compose } from 'recompose';
import { Link } from '../routes';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Home = ({ agencies }) => (
  <PageLayout title={agencies.meta_title} metaDescription={agencies.meta_description}>

    <div className="wrap mt7 hero">
      <h2 className="hero-text text-center">E-Commerce projects === fun</h2>
      <p className="text-center">Yes, exactly, no PHP, no jQuery, no bullshit</p>
      <img className="hero-img" src="../static/img/110- online-website-shopping-male-african-american.svg" alt="robot hand" />
    </div>

    <div className="c-bg-dark c-white pa1">
      <h2 className="text-center">open-source, available on <a className="link" href="https://github.com/unchainedshop">Github*</a></h2>
      <p className="text-center">* The Unchained Engine OSS Release <a className="link" href="https://github.com/unchainedshop/unchained-evolution">follows Q3 2018</a></p>
    </div>

    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h2 className="text-center">Advantages of Unchained for you / your agency</h2>

      <div className="advantage">
        <img alt="digital-cash-payment" className="advantage-img" src="../static/img/11- digital-cash-payment.svg" />
        <p><b>Omnichannel readiness:</b> The content created in a headless
        system like unchained is “pure” and can
        be repurposed across multiple channels, including website,
        mobile app, digital assistant, virtual reality,
        smart watches, etc. anywhere and at any time through the customer journey.
        </p>
      </div>
      <div className="advantage">
        <img alt="currency-money-hand" className="advantage-img" src="../static/img/01- currency-money-hand-1.svg" />
        <p><b>Low operating costs:</b> Headless Software is usually cheaper to install
        and run than their monolith counterparts,
        especially as they are typically built on a cloud model where
        multi-tenant options keep the running costs low.
        All parts of the system come with docker images per default.
        And if you don&apos;t want to host the shop engine yourself, we do it for you in our
        containerized cloud platform.
        </p>
      </div>

      <div className="advantage">
        <img alt="business-balance-time-income" className="advantage-img" src="../static/img/28- business-balance-time-income-2.svg" />
        <p><b>Reduces time to market:</b> Unchained promotes an agile way of working
         because content creators and developers can work simultaneously in
         completely separated modules.
         And with the help of GraphQL, building front- and backend in parallel is also doable.
         That way projects can be finished much faster.
        </p>
      </div>

      <div className="advantage">
        <img alt="easy-to-use-cake" className="advantage-img" src="../static/img/38- easy-to-use-cake.svg" />
        <p><b>Easy to use:</b> Traditional e-commerce systems tend to be cumbersome and
        complex* as vendors attempt to offer every available feature in one box and force you to
        read &quot;how to theme X?&quot; documentation.
        Headless systems focus on content management; keeping things simple for those
        who use it on a daily basis. The entire user experience can usually
        be managed from within one backend.
        </p>
      </div>

      <div className="advantage">
        <img alt="program-setting" className="advantage-img" src="../static/img/45- program-setting-1.svg" />
        <p><b>Flexibility:</b> Content editors can work in whichever headless CMS
        they like and developers can build any kind of frontend they want in their
        preferred language (e.g. Ruby, PHP, Java, or Swift) and then simply integrate
        the two via APIs (Unchained & CMS) with GraphQL. This allows
        for polyglot programming where multiple programming paradigms can be used to
        deliver content to multiple channels, and enables a company to benefit from
        the latest developments in language frameworks, promoting a microservices architecture.
        </p>
      </div>

      <div className="advantage">
        <img alt="cloud-server-network" className="advantage-img" src="../static/img/03- cloud-server-network.svg" />
        <p><b>Cloud Scalability:</b> The content purity and stateless APIs of headless
         CMSs enable high scalability, especially as the architecture fully leverages
         the elasticity of a cloud platform. Unchained uses a NoSQL database to
         do auto-sharding and is able to store all assets in a block storage.
        </p>
      </div>

      <div className="advantage">
        <img alt="security-system-shield-lock" className="advantage-img" src="../static/img/22- security-system-shield-lock.svg" />
        <p><b>System Security:</b> Since the content is typically provided through
         a high-performance Content Delivery Network (rather than directly from the database)
         and can be cached at different edges of the microservice architecture,
         the risk of distributed denial-of-service attacks (DDOS) is reduced.
        </p>
      </div>
    </div>

    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <div className="text-center">
          <p className="c-white">Just drop us a line if you want to become an
            official partner of Unchained or you are in need of developer support
          </p>
          <Link href="/contact">
            <a className="button">
                Get in Contact now
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
  withRegion('agencies'),
)(Home));
