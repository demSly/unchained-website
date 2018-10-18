import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/forms/ContactForm';

const Contact = ({ contact }) => (
  <PageLayout title={contact.meta_title} metaDescription={contact.meta_description}>
    <div className="c-bg-dark mt7 pb7" id="contact">
      <div className="wrap wrap--narrow">
        <ContactForm />
      </div>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('contact'),
  pure,
)(Contact));
