import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/forms/ContactForm';

const Kontakt = ({ contact, markDone }) => (
  <PageLayout title={contact.title} metaDescription={contact.text}>
    <div className="wrap wrap--narrow c-bg-gray mt7 mb7">
      <ContactForm onSubmitSuccess={markDone} />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('contact'),
)(Kontakt));
