import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import { StripeProvider, injectStripe, Elements, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import variables from '../../styles/variables';
import withStripePublicKey from '../../lib/withStripePublicKey';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/withFormInProgressHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withLoadingComponent from '../../lib/withLoadingComponent';
import withFormModel from '../../lib/withFormModel';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';

// https://stripe.com/docs/stripe.js#element-types
const styleOptions = ({
  style: {
    base: {
      fontSize: '16px',
      color: '#232323',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#FF4136',
    },
  },
});

const StripeForm = ({
  className, onSubmit, children, schema, model, error, onSubmitFailure,
  onSubmitSuccess, onBack, inProgress, intl, onChange,
}) => (
  <AutoForm
    validate="onSubmit"
    onValidate={(_, __, callback) => callback(null)}
    className={className}
    disabled={inProgress}
    schema={schema}
    onSubmit={onSubmit}
    model={model}
    error={error}
    onChange={onChange}
    onSubmitFailure={onSubmitFailure}
    onSubmitSuccess={onSubmitSuccess}
  >
    <div className="fieldset">
      <div className="field">
        <label htmlFor="cc-number">
          <span className="cc-label">{intl.formatMessage({ id: 'card_number' })}</span>
          <CardNumberElement
            id="cc-number"
            className="field__input"
            {...styleOptions}
          />
        </label>
      </div>
      <div className="field field--half">
        <label htmlFor="cc-expiry">
          <span className="cc-label">{intl.formatMessage({ id: 'expiration_date' })}</span>
          <CardExpiryElement
            id="cc-expiry"
            className="field__input"
            {...styleOptions}
          />
        </label>
      </div>
      <div className="field field--half">
        <label htmlFor="cvc">
          <span className="cc-label">{intl.formatMessage({ id: 'cvc' })}</span>
          <CardCVCElement
            id="cvc"
            className="field__input"
            {...styleOptions}
          />
        </label>
      </div>
    </div>
    {children}
    <ErrorsField />
    <div className="flex-between">
      <button className="button mb" type="normal" onClick={onBack}>{intl.formatMessage({ id: 'back' })}</button>
      <div className="loader-wrap">
        {inProgress && <Loading color={variables.darkColor} /> }
        <SubmitField disabled={inProgress} className="button button--primary mb" value={intl.formatMessage({ id: 'checkout_button_card' })} />
      </div>
    </div>
    <style jsx>{`
      .cc-label {
        font-size: 16px;
      }
    `}
    </style>
  </AutoForm>
);

const StripeFormContainer = compose(
  injectIntl,
  injectStripe,
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
    onSubmit: ({ checkout, stripe, intl }) => async () => {
      try {
        const payload = await stripe.createToken();
        if (payload.error) {
          throw new Error(payload.error.message);
        }
        const result = checkout({
          variables: { paymentContext: { stripeToken: payload.token } },
        });
        return result;
      } catch (e) {
        console.error(e); //eslint-disable-line
        throw new Error(intl.formatMessage({ id: 'error_stripe' }));
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

const StripeFormWrapper = ({ stripePublicKey, ...props }) => (
  <StripeProvider apiKey={stripePublicKey}>
    <Elements>
      <StripeFormContainer {...props} />
    </Elements>
  </StripeProvider>
);

export default compose(
  withStripePublicKey,
  withLoadingComponent,
)(StripeFormWrapper);
