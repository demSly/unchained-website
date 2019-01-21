import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Partners = ({ partners }) => (
  <PageLayout title={partners.meta_title} metaDescription={partners.meta_description}>
    <div className="wrap mt7">
      <section id="partners" className="section">
        <h1>
          We have worked together & successfully launched online shops with the following partners
        </h1>
        <div className="partners">
          <div className="partner">
            <a href="https://www.silbury.com/">
              <img src="../static/img/silbury-logo_retina.png" alt="silbury logo" />
            </a>
          </div>
          <div className="partner">
            <a href="https://www.evux.ch/">
              <img src="../static/img/evux.png" alt="evux logo" />
            </a>
          </div>
          <div className="partner">
            <a href="https://www.panter.ch/">
              <img src="../static/img/panter-black-bg.png" alt="panter logo" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <style jsx>
      {`
      .partners {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .partner {
        margin: 4em 4em 4em 0;
      }
      .partner img {
        max-width: 250px;
        max-height: 250px;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partners'),
)(Partners));
