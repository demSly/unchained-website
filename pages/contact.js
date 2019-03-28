import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/forms/ContactForm';

const Contact = ({ contact }) => (
  <PageLayout title={contact.meta_title} metaDescription={contact.meta_description}>
    <div className="wrap mt7 text-center">
      <h2>
        Contact us
      </h2>
      <p>Tell us a little bit about you & your project and we will get in touch with you.</p>
    </div>
    <div className="c-bg-dark mt3 py7" id="contact">
      <div className="wrap wrap--narrow">
        <ContactForm />
      </div>
    </div>
    <style jsx>
      {`
      .c-bg-dark {
        border: 0;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('contact'),
  pure,
)(Contact));
