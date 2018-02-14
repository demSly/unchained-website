import React from 'react';
import { createSink } from 'recompose';
import { withApollo } from 'react-apollo';
import { withRouter } from 'next/router';
import { verifyEmail } from '../lib/accounts';
import connectApollo from '../lib/hoc/connectApollo';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const logger = console;

let verificationStarted = false;

const Verifier = withRouter(withApollo(createSink(async (
  { client, router, url: { query: { expired, token } } },
) => {
  if (token && !expired && !verificationStarted) {
    verificationStarted = true;
    try {
      const result = await verifyEmail({ token }, client);
      logger.log(result);
      router.push('/');
    } catch (e) {
      logger.error(e);
      router.push('/verify-email?expired=1');
    }
  }
})));


const VerifyEmail = ({ ...rest }) => (
  <PageLayout title="" {...rest}>
    <div
      className="wrap wrap--narrow wrap--vertical-padding"
    >
      {process.browser && (
        <Verifier {...rest} />
      )}
      {rest.url.query.expired ? (
        <div>
          <h1>Token expired</h1>
          <p>Dieser Verifizierungstoken ist nicht mehr gültig,
          melde dich an und lass dir einen neuen zusenden
          </p>
        </div>
      ) : (
        <div>
          <h1>Verifizierung...</h1>
          <p>Du wirst gleich weitergeleitet...</p>
        </div>
      )}
    </div>
  </PageLayout>
);


export default connectApollo(connectI18n(VerifyEmail));
