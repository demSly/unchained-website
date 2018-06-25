import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';
import AccountDropdown from './AccountDropdown';

const AccountSwitch = ({ isAccountToggled, toggleAccount }) => (
  <div className={`switch ${isAccountToggled ? 'open' : ''}`}>
    <button className="switch__button no-button" type="button" onClick={toggleAccount}>
      <span className="cart-caret" />
      <img
        src="/static/img/icon/door-enter.svg"
        alt="door enter"
      />
    </button>
    <AccountDropdown hidden={!isAccountToggled} />
    <style jsx>
      {`
      img {
        vertical-align: middle;
      }
    `}
    </style>
  </div>
);

export default compose(getContext({
  isAccountToggled: PropTypes.bool,
  toggleAccount: PropTypes.func,
}))(AccountSwitch);
