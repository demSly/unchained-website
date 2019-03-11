import React from 'react';
import { compose, mapProps } from 'recompose';
import { withRouter } from 'next/router';
import Markdown from 'react-remarkable';
import connectApollo from '../lib/connectApollo';
import withJob from '../lib/withJob';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const About = ({
  job: {
    title, workload, location, content, skills, tasks, compensation, features,
  } = {},
} = {}) => (
  <PageLayout title={title} metaDescription={`${workload} @ ${location}`}>
    <div className="wrap mt7">
      <section className="section">
        <h2>
          {title}
        </h2>
        <div>{workload}</div>
        <div>{location}</div>
        <div>
          <Markdown source={content} />
        </div>
        <div>
          <Markdown source={skills} />
        </div>
        <div>
          <Markdown source={tasks} />
        </div>
        <div>{compensation}</div>
        <div>{features}</div>
      </section>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRouter,
  mapProps(({ router, ...props }) => {
    const slug = router && router.query && router.query.slug;
    return {
      slug,
      ...props,
    };
  }),
  withJob,
)(About));
