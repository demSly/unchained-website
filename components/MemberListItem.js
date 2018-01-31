import React from 'react';

const MemberListItem = ({
  name, position, avatar,
}) =>
  (
    <a className="member">
      <div className="flex-between">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>
      {avatar && (
        <img alt={name} src={avatar.url} />
      )}
      <style jsx>{`
        .member {
          display: block;
          margin-top: 1.5em;
        }
        @media (min-width: 768px) {
          .member {
            width: 100%;
          }
        }
      `}
      </style>
    </a>
  );

export default MemberListItem;
