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
        We want to unlock the next generation online shopping experience for
        the world through a homegrown commerce platform.
      </p>

      <p>
        If you want to sell products online, your
        developers are forced to either build a shop from the ground up,
        use a feature-restricted service like Shopify or use century old
        platforms like Magento or WooCommerce.
      </p>

      <p>
        All these platforms constantly try to
      </p>

      <p>
        With the combination of GraphQL (next generation API specification)
        and a built-for-headless approach, unchained.shop is therefore superior to any
        other e-commerce platform available.
      </p>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('mission'),
  pure,
)(Mission));
