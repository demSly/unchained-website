import React from 'react';
import { compose } from 'recompose';
import withCurrentUser from '../lib/withCurrentUser';
import withLoadingComponent from '../lib/withLoadingComponent';
import LoginForm from '../components/forms/LoginForm';
import AccountMenu from './AccountMenu';

const AccountDropdown = ({
  hidden, loading, currentUser, ...props
}) => (
  <div className={`dropdown ${hidden ? 'hidden' : ''}`} {...props}>
    {(currentUser._id && !currentUser.isGuest) ? (
      <AccountMenu user={currentUser} />
    ) : (
      <LoginForm />
    )}
    <style jsx>{`
      .is-loggedIn {
        margin-top: -.5em;
        margin-bottom: -.5em;
      }
      .logged-in-link {
        display: block;
        margin-left: -1.125em;
        margin-right: -1.125em;
        padding: .5em 1.125em;
        font-size: 18px;
        color: #343434;
      }
      .logged-in-link:hover {
        background-color: #00F5BC;
      }
      .dropdown {
        padding: 1em;
        right: -4px;
      }
      @media (min-width: 1224px) {
        .dropdown {
          right: -10px;
        }
      }
    `}
    </style>

  </div>
);

export default compose(
  withCurrentUser,
  withLoadingComponent,
)(AccountDropdown);
