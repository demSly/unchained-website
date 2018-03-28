import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const NewsletterThankyou = ({ newsletterthankyou }) => (
  <PageLayout title={newsletterthankyou.title} className="bg-image" metaDescription={newsletterthankyou.text}>
    <div className="wrap wrap--vertical-padding" id="top">
      <div className="thank-you-text">
        <h2>{newsletterthankyou.title}</h2>
        <h2>{newsletterthankyou.text}</h2>
      </div>
    </div>
    <style jsx>{`
      .thank-you-text {
        margin-top: 3em;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        background-color: rgba(255,255,255,.95);
        padding: 1em;
        box-shadow: 0 3px 6px 1px rgba(0,0,0,0.08), 0 7px 14px 1px rgba(50,50,93,0.1);
      }
      .thank-you-text h1,
      .thank-you-text h2 {
        text-align: center;
      }
    `}
    </style>

  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('newsletterthankyou'),
)(NewsletterThankyou));
