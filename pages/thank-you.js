import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Thankyou = ({ thankyou, url }) => (
  <PageLayout title={thankyou.title} className="bg-image">
    <div className="wrap wrap--vertical-padding" id="top">
      <div className="thank-you-text">
        <h1>{thankyou.title}</h1>
        <h2>{thankyou.number}<br />
          <span>{url.query.n}</span>
        </h2>
        <p>{thankyou.text}</p>
        <div className="text-center">
          <button className="button" onClick={() => window.print()}>Print</button>
        </div>
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
  withRegion('thankyou'),
)(Thankyou));
