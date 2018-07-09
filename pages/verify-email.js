import React from 'react';
import { createSink, compose } from 'recompose';
import { withApollo } from 'react-apollo';
import { withRouter } from 'next/router';
import { verifyEmail } from '../lib/accounts';
import connectApollo from '../lib/connectApollo';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const logger = console;

let verificationStarted = false;

const Verifier = withApollo(createSink(async (
  { client, router, router: { query: { expired, token } } },
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
}));


const VerifyEmail = ({ router, ...rest }) => (
  <PageLayout title="" {...rest}>
    <div
      className="wrap wrap--narrow wrap--vertical-padding"
    >
      {process.browser && (
        <Verifier {...rest} router={router} />
      )}
      {router.query.expired ? (
        <div>
          <h1>
Token expired
          </h1>
          <p>
Dieser Verifizierungstoken ist nicht mehr gültig,
          melde dich an und lass dir einen neuen zusenden
          </p>
        </div>
      ) : (
        <div>
          <h1>
Verifizierung...
          </h1>
          <p>
Du wirst gleich weitergeleitet...
          </p>
        </div>
      )}
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  withRouter,
  connectI18n,
)(VerifyEmail));
