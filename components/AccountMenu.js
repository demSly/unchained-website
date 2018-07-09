import React from 'react';
import { injectIntl } from 'react-intl';
import Link from 'next/link';
import {
  compose, withHandlers, mapProps, pure,
} from 'recompose';
import { withApollo } from 'react-apollo';
import { logout } from '../lib/accounts';
import variables from '../styles/variables';

const AccountMenu = ({ intl, user, logoutUser }) => (
  <div>
    <div className="greeting">
      <span className="emoji" role="img" aria-label="hello">
        👋
      </span>
      <span>
        {intl.formatMessage({ id: 'hello' })}
        &nbsp;
        {user.name}
      </span>
    </div>
    <Link href="/profile">
      <a className="logged-in-link">
        <img
          className="v-mid mr05"
          src="/static/img/icon/account-protect.svg"
          alt="Account Settings"
        />
        {intl.formatMessage({ id: 'your_account' })}
      </a>
    </Link>
    <Link href="/orders">
      <a className="logged-in-link">
        <img
          className="v-mid mr05"
          src="/static/img/icon/receipt-1.svg"
          alt="Orders"
        />
        {intl.formatMessage({ id: 'your_orders' })}
      </a>
    </Link>
    <button type="button" onClick={logoutUser} className="no-button logged-in-link">
      <img
        className="v-mid mr05"
        src="/static/img/icon/door-exit.svg"
        alt="Logout"
      />
      {intl.formatMessage({ id: 'logout' })}
    </button>
    <style jsx>
      {`
      .greeting {
        margin-left: -1em;
        margin-bottom: 1em;
        margin-right: -1em;
        padding-left: 1em;
        padding-bottom: 1em;
        padding-right: 1em;
        border-bottom: 1px solid ${variables.lineGrayColor};
        font-size: 14px;
        display: flex;
        align-items: center;
      }
      .logged-in-link {
        display: block;
        margin-left: -1.125em;
        margin-right: -1.125em;
        padding: .5em 1.125em;
        font-size: 16px;
      }
      .logged-in-link.no-button {
        width: calc(100% + 2.25em);
        text-align: left;
      }
      .logged-in-link:hover {
        background-color: ${variables.secondaryColor};
      }
    `}
    </style>
  </div>
);

export default compose(
  withApollo,
  injectIntl,
  withHandlers({
    logoutUser: ({ client }) => () => logout(client),
  }),
  mapProps(({ mutate, client, ...props }) => (props)),
  pure,
)(AccountMenu);
