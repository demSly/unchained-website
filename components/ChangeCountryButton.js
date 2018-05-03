import React from 'react';
import cookie from 'cookie';
import { injectIntl } from 'react-intl';
import { compose, withHandlers } from 'recompose';
import createModalButton from '../lib/createModalButton';
import withCountries from '../lib/withCountries';
import withLoadingComponent from '../lib/withLoadingComponent';
import Modal from './Modal';
import variables from '../styles/variables';

const ToggleButton = ({
  className, onClick, label, icon, currentCountry, tabIndex,
}) => (
  <button
    tabIndex={tabIndex}
    type="button"
    className={`change-shipping-country ${className || ''}`}
    onClick={onClick}
  >
    <img className="v-mid mr05" src={icon} alt="change shipping country" />
    <small>{label || currentCountry.name}</small>
    <style jsx>{`
      .change-shipping-country {
        height: 64px;
        appearance: none;
        background-color: inherit;
        border: 0;
        outline: 0;
        text-align: left;
      }
    `}
    </style>
  </button>
);

const ChangeCountry = ({
  onClose, intl, countries, currentCountry, setCountry,
}) => (
  <Modal title={intl.formatMessage({ id: 'select_country' })} visible onClose={onClose}>
    <div className="countries clearfix">
      {countries.map(({
 flagEmoji, isoCode, name, _id,
}) => (
  <a
    key={_id}
    href="/"
    data-country={isoCode}
    onClick={setCountry}
    className={`country  ${(currentCountry._id === _id) ? 'is-active' : ''}`}
  >
    <span className="flag-emoji">{flagEmoji}</span> {name}
  </a>
))}
    </div>
    <style jsx>{`
      .flag-emoji {
        margin-left: .5em;
        margin-right: .5em;
        vertical-align: text-top;
      }
      .countries {
        width: 100%;
      }
      .country {
        display: block;
        margin: 1em 0;
        padding: .25em;
      }
      .country:nth-child(2n) {
        margin-right: 0;
      }
      .country.is-active {
        background-color: ${variables.grayColor};
      }
      .country:hover {
        background-color: ${variables.grayColor};
      }
      @media (min-width: 1024px) {
        .country {
          float: left;
          margin: .5em 0;
          min-width: 47.5%;
          margin-right: 5%;
        }
      }
    `}
    </style>
  </Modal>
);

export default compose(
  injectIntl,
  withCountries,
  withLoadingComponent,
  withHandlers({
    setCountry: () => (element) => {
      const country = element.target.getAttribute('data-country');
      if (document) {
        document.cookie = cookie.serialize('country', country, { path: '/' });
      }
    },
  }),
)(createModalButton(ChangeCountry, ToggleButton));
