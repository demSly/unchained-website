import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, pure, mapProps } from 'recompose';
import withCheckoutCartDelivery from '../lib/withCheckoutCartDelivery';
import withLoadingComponent from '../lib/withLoadingComponent';

const Address = ({
  firstName, lastName, company, addressLine, postalCode, city, countryCode, countryName,
}) => (
  <address>
    {firstName}
    {' '}
    {lastName}
    <br />
    {company && (
      <div>
        {company}
      </div>
    )}
    {addressLine}
    <br />
    {postalCode}
    {' '}
    {city}
    {' '}
    {countryCode && `(${countryCode})`}
    <br />
    {countryName}
  </address>
);

const CheckoutCartDeliverySummary = ({
  intl, emailAddress, invoiceAddress, deliveryAddress, onEdit, countryName,
}) => (
  <div>
    <div className="flex-between">
      <div>
        <small className="address-label">
          {intl.formatMessage({ id: 'email' })}
        </small>
        <span>
          {emailAddress}
        </span>
      </div>
      <button type="button" className="button button--small" onClick={onEdit}>
        {intl.formatMessage({ id: 'edit' })}
      </button>
    </div>
    {invoiceAddress && (
    <div>
      <small className="address-label">
        {!deliveryAddress ? intl.formatMessage({ id: 'address' }) : intl.formatMessage({ id: 'billing_address' })}
      </small>
      <Address {...invoiceAddress} countryName={countryName} />
    </div>
    )}
    {deliveryAddress && (
    <div>
      <small className="address-label">
        {intl.formatMessage({ id: 'delivery_address' })}
:
      </small>
      <Address {...deliveryAddress} countryName={countryName} />
    </div>
    )}
    <style jsx>
      {`
      .address-label {
        display: block;
        margin: 1em 0 .5em;
      }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  withCheckoutCartDelivery,
  withLoadingComponent,
  mapProps(({ cart, loading, ...props }) => ({
    emailAddress: cart.contact && cart.contact.emailAddress,
    invoiceAddress: cart.address,
    deliveryAddress: cart.delivery && cart.delivery.address,
    countryName: cart.country && cart.country.name,
    ...props,
  })),
  pure,
)(CheckoutCartDeliverySummary);
