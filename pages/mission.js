import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Mission = ({ mission }) => (
  <PageLayout title={mission.meta_title} metaDescription={mission.meta_description}>
    <div className="wrap wrap--narrow mv7">
      <section id="mission" className="section">
        <h2>{mission.title}</h2>
      </section>
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: mission.content,
      }}
      />
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('mission'),
  pure,
)(Mission));
