import React from 'react';
import { compose, pure } from 'recompose';
import variables from '../styles/variables';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Support = ({ faq }) => (
  <PageLayout title={faq.meta_title} metaDescription={faq.meta_description}>

    <div className="wrap wrap--narrow mt3">
      <section id="faq" className="section">
        <h2>{faq.faq_title}</h2>
        <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: faq.faq_content,
        }}
        />
      </section>

    </div>


    <style jsx>{`
      .question {
        font-weight: 400;
      }
      .answer {
        padding-bottom: 1em;
        border-bottom: 1px solid ${variables.lineGrayColor};
      }
    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('faq'),
  pure,
)(Support));
