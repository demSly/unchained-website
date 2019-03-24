import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import MemberList from '../components/MemberList';
import JobList from '../components/JobList';

const About = ({ about }) => (
  <PageLayout title={about.meta_title} metaDescription={about.meta_description}>
    <div className="wrap mt7">
      <h1>
        About Us
      </h1>
    </div>
    <section className="c-bg-dark c-white mb3 pv3">
      <div className="wrap">
        <h3>Interested in joining the team?</h3>
        <p>
          We are a Zurich based software company and are looking for talents to join us.
          <br />
          At the moment we are looking for the following positions:
        </p>
        <JobList />
      </div>
    </section>
    <div className="wrap mb3">
      <MemberList />
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('about'),
  pure,
)(About));
