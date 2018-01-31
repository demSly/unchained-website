import React from 'react';
import { FormattedNumber } from 'react-intl';

export default ({ amount = 0, currency = null } = {}) => {
  if (currency === 'BTC') {
    if (amount === 0) {
      return '0 Ƀ';
    } else if (amount < 9999) {
      return `${amount} sat (${amount / 1000000000} Ƀ)`;
    }
    return `${amount / 1000000000} Ƀ`;
  }
  if (!currency) {
    return null;
  }
  return (<FormattedNumber
    value={amount / 100}
    style="currency" // eslint-disable-line
    currency={currency}
  />
  );
};
