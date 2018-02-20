import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';
import MemberList from '../components/MemberList';

const Support = ({ team }) => (
  <PageLayout title={team.meta_title} metaDescription={team.meta_description}>
    <div className="wrap mv7">
      <section id="team" className="section">
        <h2>{team.title}</h2>
        <MemberList />
      </section>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('team'),
  pure,
)(Support));
