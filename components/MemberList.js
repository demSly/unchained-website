import React from 'react';
import { compose } from 'recompose';
import withMembers from '../lib/withMembers';
import withLoadingComponent from '../lib/withLoadingComponent';
import MemberListItem from './MemberListItem';

const MemberList = ({ members }) =>
  (
    <div className="member-list">
      {members && members
        .map(({ _id, ...member }) => (
          <MemberListItem
            key={_id}
            _id={_id}
            {...member}
          />
        ))}
      <style jsx>{`
        .member-list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}
      </style>
    </div>
  );

export default compose(
  withMembers,
  withLoadingComponent,
)(MemberList);
