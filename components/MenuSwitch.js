import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';

const MenuSwitch = ({ isMenuToggled, toggleMenu }) => (
  <div
    role="button"
    tabIndex={0}
    aria-label="toggle menu"
    className={`menu-switch ${isMenuToggled ? 'open' : ''}`}
    onKeyUp={toggleMenu}
    onClick={toggleMenu}
  >
    <span />
    <span />
    <span />
    <span />
    <style jsx>{`
      .menu-switch {
        width: 20px;
        height: 16px;
        position: relative;
        margin-left: 22px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
      }
      .menu-switch:focus {
        outline: none;
      }

      span {
        display: block;
        position: absolute;
        height: 1px;
        width: 100%;
        background: #232323;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
      }

      span:nth-child(1) {
        top: 0px;
      }

      span:nth-child(2),span:nth-child(3) {
        top: 9px;
      }

      span:nth-child(4) {
        top: 18px;
      }

      .open span:nth-child(1) {
        top: 9px;
        width: 0%;
        left: 50%;
      }

      .open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      .open span:nth-child(4) {
        top: 9px;
        width: 0%;
        left: 50%;
      }

    `}
    </style>
  </div>
);

export default compose(getContext({
  isMenuToggled: PropTypes.bool,
  toggleMenu: PropTypes.func,
}))(MenuSwitch);
