import React from 'react';
import { injectIntl } from 'react-intl';
import PageModalButton from '../PageModalButton';

export default injectIntl(({ intl }) => (
  <div>
    <small className="db mv1">
      {intl.formatMessage({ id: 'terms_accept' })}
&nbsp;
      <PageModalButton regionId="terms" title={intl.formatMessage({ id: 'terms' })} className="no-button link underline" />
&nbsp;
      {intl.formatMessage({ id: 'and' })}
&nbsp;
      <PageModalButton regionId="returnpolicy" title={intl.formatMessage({ id: 'return_policy' })} className="no-button link underline" />
    </small>
  </div>
));
