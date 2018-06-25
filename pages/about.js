import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import MemberList from '../components/MemberList';
import ContactForm from '../components/forms/ContactForm';

const About = ({ about }) => (
  <PageLayout title={about.meta_title} metaDescription={about.meta_description}>
    <div className="wrap mt7">
      <section className="section">
        <h2>
          {about.title}
        </h2>
        <MemberList />
      </section>
    </div>
    <div className="c-bg-dark mt7" id="contact">
      <div className="wrap wrap--narrow">
        <ContactForm />
      </div>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('about'),
  pure,
)(About));
