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
          If you need an agency with experience in enterprise e-commerce
          & development, feel free to contact our partners.
        </h1>
        <h3 className="mt3 mb0">
          Invested Partners
        </h3>
        <div className="partners">
          <div className="partner">
            <a href="https://www.silbury.com/">
              <img src="../static/img/silbury.jpg" alt="silbury logo" />
            </a>
          </div>
          <div className="partner">
            <a href="https://www.fivelines.ch/">
              <img src="../static/img/fivelines.png" alt="fivelines logo" />
            </a>
          </div>
        </div>
      </section>
      <Link href="/partner-program">
        <div className="text-center">
          <a className="button mt3">
              Become a partner
          </a>
        </div>
      </Link>
    </div>
    <style jsx>
      {`
      .partners {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .partner {
        margin: 0 2em 2em 2em;
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
