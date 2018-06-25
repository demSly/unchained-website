import React from 'react';
import { withRouter } from 'next/router';
import { injectIntl } from 'react-intl';
import {
  compose, withProps, withState, withHandlers, pure,
} from 'recompose';
import CheckoutCartDeliverySummary from './CheckoutCartDeliverySummary';
import CheckoutStep from './CheckoutStep';
import UpdateCartDeliveryForm from './forms/UpdateCartDeliveryForm';
import UpdateCartPaymentForm from './forms/UpdateCartPaymentForm';
import variables from '../styles/variables';

const CheckoutProcess = ({
  isPaymentStepVisible, toggleDeliveryForm,
  isDeliveryFormToggled, intl, thankThatDudeForPayMeBitch,
}) => (
  <div className="checkout-process">
    <CheckoutStep number="1" title={intl.formatMessage({ id: 'checkout_your_info' })}>
      {isDeliveryFormToggled ? (
        <UpdateCartDeliveryForm
          onSubmitSuccess={toggleDeliveryForm}
        />
      ) : (
        <CheckoutCartDeliverySummary
          onEdit={toggleDeliveryForm}
        />
      )}
    </CheckoutStep>
    {isPaymentStepVisible && (
    <CheckoutStep number="2" title={intl.formatMessage({ id: 'select_payment_method' })}>
      <UpdateCartPaymentForm
        onBack={toggleDeliveryForm}
        onSubmitSuccess={thankThatDudeForPayMeBitch}
      />
    </CheckoutStep>
    )}
    <style jsx>
      {`
        @media (min-width: 1024px) {
          .checkout-process {
            width: 70%;
            padding-right: 1em;
            border-right: 1px solid ${variables.lineGrayColor};
          }
        }
        @media (min-width: 1220px) {
          .checkout-process {
            padding-right: 2.5em;
          }
        }
    `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  withRouter,
  withState('isDeliveryFormToggled', 'updateIsDeliveryFormToggled', ({ readyForCheckout }) => !readyForCheckout),
  withProps(({ isDeliveryFormToggled }) => ({
    isPaymentStepVisible: !isDeliveryFormToggled,
  })),
  withHandlers({
    toggleDeliveryForm: ({ router, isDeliveryFormToggled, updateIsDeliveryFormToggled }) => () => {
      router.prefetch('/thank-you');
      updateIsDeliveryFormToggled(!isDeliveryFormToggled);
    },
    thankThatDudeForPayMeBitch: ({ router }) => ({ data: { checkout } }) => {
      router.replace(`/thank-you?n=${checkout.orderNumber}#top`);
    },
  }),
  pure,
)(CheckoutProcess);
