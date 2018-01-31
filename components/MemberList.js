import React from 'react';
import { compose } from 'recompose';
import withMembers from '../lib/hoc/withMembers';
import withLoadingComponent from '../lib/hoc/withLoadingComponent';
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
    </div>
  );

export default compose(
  withMembers,
  withLoadingComponent,
)(MemberList);
