import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Partners = ({ partners }) => (
  <PageLayout title={partners.meta_title} metaDescription={partners.meta_description}>
    <div className="wrap wrap--narrow mt7">
      <section id="partners" className="section">
        <h1>
          Successfully working together with our partners
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
      <section id="partnerProgram" className="section">
        <h1>
          Unchained for Enterprise Partners
        </h1>
        <div className="flex-between nowrap">
          <img className="undraw" src="../static/img/undraw_agreement_aajr.svg" alt="agreement" />
          <div>
            <p>
              Join a partnership that lifts your digital commerce projects to the next level.
            </p>
            <p>
              The Unchained Enterprise Partners Program is suited for agencies who
              like to work together with us on a strategic level.
              Following you will find a list of benefits you will get as an exclusive
              partner which wants to invest and help a young open source company grow
              in a sustainable way.
            </p>
          </div>
        </div>

        <h2>
          Benefits
        </h2>

        <h3>
          Sales & Marketing
        </h3>
        <ul>
          <li>
            Promoting partnership in press releases, social media, blog posts or mailings
          </li>
          <li>
            Listing as Partner on unchained.shop & logo rights
          </li>
          <li>
            Guaranteed conference speech seats
          </li>
          <li>
            Forward incoming project leads
          </li>
        </ul>

        <h3>
          Engineering
        </h3>
        <ul>
          <li>
            Access to unchained engineers
          </li>
          <li>
            Feature Request Prioritization for Unchained core modules
          </li>
          <li>
            Access to Source Code before OSS Relicensing
          </li>
        </ul>
      </section>
    </div>
    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <p className="c-white">
          Just drop us a line if you want to become an
          official partner of Unchained or you are in need of developer support
        </p>
        <div className="text-center">
          <Link href="/contact">
            <a className="button">
                Become a Partner
            </a>
          </Link>
        </div>
      </div>
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
        max-width: 240px;
        max-height: 240px;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partners'),
)(Partners));
