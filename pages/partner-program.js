import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const PartnerProgram = ({ partnerProgram }) => (
  <PageLayout title={partnerProgram.meta_title} metaDescription={partnerProgram.meta_description}>
    <div className="wrap mv7">
      <section id="partnerProgram" className="section">
        <h1>
          Unchained for Enterprise Partners
        </h1>
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
          <li>
Forward incoming project leads
          </li>
        </ul>
      </section>
      <div className="wrap mt7 text-center">
        <a className="button" href="/static/partner-program-factsheet.pdf" target="_blank">
          Download Factsheet
        </a>
      </div>
    </div>
    <div className="c-bg-primary">
      <div className="wrap wrap--narrow wrap--vertical-padding">
        <p className="c-white">
Just drop us a line if you want to become an
          official partner of Unchained or you are in need of developer support
        </p>
        <div className="text-center">
          <Link href="/about#contact">
            <a className="button">
                Become a Partner
            </a>
          </Link>
        </div>
      </div>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('partnerProgram'),
)(PartnerProgram));
