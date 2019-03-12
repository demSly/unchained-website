import React from 'react';
import Link from 'next/link';

const JobListItem = ({
  title, slug, workload, location,
}) => (
  <Link href={`/job/${slug}`}>
    <a className="job">
      <div className="title-and-workload">
        {title}
        {' '}
        {workload}
      </div>
      <div className="location">
        {location}
      </div>
      <style jsx>
        {`
          .job:hover {
            text-decoration: underline;
          }
          .title-and-workload {
            font-weight: bold;
            font-size: 1.25em;
            margin-top: .5em;
          }
        `}
      </style>
    </a>
  </Link>
);

export default JobListItem;
