import React from 'react';
import Link from 'next/link';

const JobListItem = ({
  title, slug, workload, location,
}) => (
  <Link href={`/job/${slug}`}>
    <a className="job">
      <div className="title">
        {title}
      </div>
      <div className="workload">
        {workload}
      </div>
      <div className="location">
        {location}
      </div>
      <style jsx>
        {`
          .link {
            margin-bottom: .5em
          }
          .title,
          .workload {
            font-weight: bold;
          }
          .title {
            font-size: 1.25em;
            margin-top: .5em;
          }
          .job {
            display: block;
          }
          @media (max-width: 767px) {
            .job {
              margin-top: 1.5em;
            }
          }
          @media (min-width: 768px) {
            .job {
              width: 100%;
            }
          }
        `}
      </style>
    </a>
  </Link>
);

export default JobListItem;
