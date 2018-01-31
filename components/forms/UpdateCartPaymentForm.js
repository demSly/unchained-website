import React from 'react';
import dynamic from 'next/dynamic';
import { compose, mapProps, pure } from 'recompose';
import withCheckoutCartPayment from '../../lib/hoc/withCheckoutCartPayment';
import withLoadingComponent from '../../lib/hoc/withLoadingComponent';
import SelectPaymentMethod from './SelectPaymentMethod';
import TermsConfirmation from './TermsConfirmation';
import InvoiceForm from './InvoiceForm';
import { WrappedLoading } from '../Loading';

const StripeForm = dynamic(import('./StripeForm'), {
  ssr: false,
  loading: WrappedLoading,
});
const PayPalForm = dynamic(import('./PayPalForm'), {
  ssr: false,
  loading: WrappedLoading,
});
const CryptoForm = dynamic(import('./CryptoForm'), {
  ssr: false,
  loading: WrappedLoading,
});

const formComponents = {
  PAYPAL: PayPalForm,
  CARD: StripeForm,
  INVOICE: InvoiceForm,
  CRYPTO: CryptoForm,
};

const UpdateCartPaymentForm = ({
  supportedPaymentProviders, Form, paymentProvider, orderId, ...props
}) => (
  <div>
    <SelectPaymentMethod
      orderId={orderId}
      supportedPaymentProviders={supportedPaymentProviders}
      paymentProvider={paymentProvider}
    />
    {Form && (
      <Form
        paymentProvider={paymentProvider}
        orderId={orderId}
        {...props}
      >
        <TermsConfirmation />
      </Form>
    )}
  </div>
);

export default compose(
  withCheckoutCartPayment,
  withLoadingComponent,
  mapProps(({ cart, loading, ...props }) => ({
    orderId: cart._id,
    supportedPaymentProviders: cart.supportedPaymentProviders,
    paymentProvider: cart.payment && cart.payment.provider,
    Form:
      (cart.payment &&
      cart.payment.provider &&
      formComponents[cart.payment.provider.type]) || null,
    ...props,
  })),
  pure,
)(UpdateCartPaymentForm);
