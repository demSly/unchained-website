import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AutoForm from 'uniforms-unstyled/AutoForm';
import variables from '../../styles/variables';
import withPayPalToken from '../../lib/withPayPalToken';
import withLoadingComponent from '../../lib/withLoadingComponent';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/withFormInProgressHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';
import PayPalButton from './PayPalButton';

const PayPalForm = ({
  className, onSubmit, children, schema, model, error, onSubmitFailure,
  onSubmitSuccess, onBack, inProgress, intl, payWithContext, total, payPalToken, onChange,
}) => (
  <div className={className}>
    <AutoForm
      disabled={inProgress}
      schema={schema}
      onSubmit={onSubmit}
      model={model}
      error={error}
      onChange={onChange}
      onSubmitFailure={onSubmitFailure}
      onSubmitSuccess={onSubmitSuccess}
    >
      {children}
      <ErrorsField />
      <div className="flex-between">
        <button type="button" className="button mb" onClick={onBack}>
          {intl.formatMessage({ id: 'back' })}
        </button>
        <div className="loader-wrap">
          {inProgress && <Loading color={variables.darkColor} /> }
          <PayPalButton
            payPalToken={payPalToken}
            className="mb"
            total={total}
            onNonceReceived={payWithContext}
            onError={onSubmitFailure}
          />
        </div>
      </div>
    </AutoForm>
  </div>
);

export default compose(
  injectIntl,
  withPayPalToken,
  withLoadingComponent,
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
    payWithContext: ({
      checkout, onSubmitSuccess, onSubmitFailure, intl,
    }) => async (paymentContext) => {
      try {
        const result = await checkout({ variables: { paymentContext } });
        return onSubmitSuccess(result);
      } catch (e) {
        console.error(e); //eslint-disable-line
        return onSubmitFailure(new Error(intl.formatMessage({ id: 'error_paypal' })));
      }
    },
    onBack: ({ onBack }) => (event) => {
      event.preventDefault();
      onBack(event);
    },
  }),
  withFormInProgressHandlers,
  pure,
)(PayPalForm);
