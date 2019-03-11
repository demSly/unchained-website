import React from 'react';
import { compose } from 'recompose';
import withJobs from '../lib/withJobs';
import withLoadingComponent from '../lib/withLoadingComponent';
import JobListItem from './JobListItem';

const JobList = ({ jobs }) => (
  <div className="job-list">
    {jobs && jobs
      .map(({ _id, ...job }) => (
        <JobListItem
          key={_id}
          _id={_id}
          {...job}
        />
      ))}
    <style jsx>
      {`
        .job-list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}
    </style>
  </div>
);

export default compose(
  withJobs,
  withLoadingComponent,
)(JobList);
