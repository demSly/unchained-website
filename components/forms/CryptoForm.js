import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import variables from '../../styles/variables';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/withFormInProgressHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';

const StripeForm = ({
  className, onSubmit, children, schema, model, error, onSubmitFailure,
  onSubmitSuccess, onBack, inProgress, intl, onChange,
}) => (
  <div className={className}>
    <AutoForm
      onValidate={(_, __, callback) => callback(null)}
      disabled={inProgress}
      schema={schema}
      onSubmit={onSubmit}
      model={model}
      error={error}
      onChange={onChange}
      onSubmitFailure={onSubmitFailure}
      onSubmitSuccess={onSubmitSuccess}
    >
      <p>
        After you click continue, we will show you your personal deposit address.
      </p>
      {children}
      <ErrorsField />
      <div className="flex-between">
        <button type="button" className="button mb" onClick={onBack}>
          {intl.formatMessage({ id: 'back' })}
        </button>
        <div className="loader-wrap">
          {inProgress && <Loading color={variables.darkColor} /> }
          <SubmitField className="button button--primary mb" disabled={inProgress} value={intl.formatMessage({ id: 'continue_with_bitcoin' })} />
        </div>
      </div>
    </AutoForm>
  </div>
);

export default compose(
  injectIntl,
  withFormErrorHandlers,
  withFormModel(() => ({})),
  withFormSchema(() => ({})),
  graphql(gql`
    mutation checkout($paymentContext: JSON) {
      checkout(paymentContext: $paymentContext) {
       _id
       orderNumber
     }
    }
  `, {
    name: 'checkout',
    options: {
      refetchQueries: [
        'littleCart',
        'checkoutCart',
        'myOrders',
      ],
    },
  }),
  withHandlers({
    onSubmit: ({ intl, checkout }) => async () => {
      try {
        const result = await checkout({ variables: { paymentContext: null } });
        return result;
      } catch (e) {
        console.error(e); //eslint-disable-line
        throw new Error(intl.formatMessage({ id: 'error_checkout' }));
      }
    },
    onBack: ({ onBack }) => (event) => {
      event.preventDefault();
      onBack(event);
    },
  }),
  withFormInProgressHandlers,
  pure,
)(StripeForm);
