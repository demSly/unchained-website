import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Mission = ({ mission }) => (
  <PageLayout title={mission.meta_title} metaDescription={mission.meta_description}>

    <div className="wrap wrap--narrow mt3">
      <section id="mission" className="section">
        <h2>{mission.title}</h2>
      </section>
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: mission.content,
      }}
      />
      <h1>Our Mission</h1>
      <p>
        We want to unlock the next generation ecommerce experience for
        the world through a platform that is compatible with any kind of internet
        devices and decentralized systems, bridging ecommerce with the
        internet of things and distributed ledgers.
      </p>

      <p>
        If you want to sell products online today, you
        are forced to either build a shop that suits your needs,
        use a theme on a feature-restricted service like Shopify or use century old
        platforms like Magento or WooCommerce.
      </p>

      <p>
        The hackernoon article
        <a href="https://hackernoon.com/why-magento-is-still-an-ecommerce-giant-in-2017-d7b60b291765">
          <b> Why Magento is still an E-Commerce giant in 2017 </b>
        </a>
        lays out how important Open-Source for global domination and enterprise
        usage is. And the developers of these platforms constantly try to incorporate new
        technologies like HTML5, therefore it is still possible to build
        a responsive shop with those tools.
        But there are massive shortcomings when it comes to supporting
        platforms like Smartphones, Smart TVs, Cars, Smartwatches.<br />
        <b>All these ecommerce platforms are developed
        to run in your browser.
        </b>
      </p>

      <p>
        With the combination of GraphQL as API technology
        and a built-for-headless approach, unchained.shop is the next generation ecommerce
        engine that works with any UI, is indefinitely extendable and is
        by design compatible with any modern software<br />
      </p>

      <p>More Information:
        <ul>
          <li><a href="https://en.wikipedia.org/wiki/Headless_CMS"><b>Headless CMS</b></a></li>
          <li><a href="https://unchained.shop/graphiql"><b>API Playground</b></a></li>
        </ul>
      </p>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('mission'),
  pure,
)(Mission));
