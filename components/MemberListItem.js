import React from 'react';

const MemberListItem = ({
  name, position, avatar, description,
}) =>
  (
    <a className="member">
      {avatar && (
        <img alt={name} src={avatar.thumbnail} />
      )}
      <div className="name">{name}</div>
      <div className="position">{position}</div>
      <div className="description">{description}</div>
      <style jsx>{`
        .name,
        .position {
          font-weight: bold;
        }
        .description {
          margin-top: 1em;
        }
        .member {
          display: block;
        }
        @media (max-width: 767px) {
          .member {
            margin-top: 1.5em;
          }
        }
        @media (min-width: 768px) {
          .member {
            width: 48%;
          }
        }
      `}
      </style>
    </a>
  );

export default MemberListItem;
