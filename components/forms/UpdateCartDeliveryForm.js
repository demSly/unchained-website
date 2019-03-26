import React from 'react';
import { injectIntl } from 'react-intl';
import {
  compose, withHandlers, withState, pure,
} from 'recompose';
import SimpleSchema from 'simpl-schema';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import withCheckoutCartDelivery from '../../lib/withCheckoutCartDelivery';
import withLoadingComponent from '../../lib/withLoadingComponent';
import withFormErrorHandlers from '../../lib/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/withFormInProgressHandlers';
import withFormSchema from '../../lib/withFormSchema';
import withFormModel from '../../lib/withFormModel';
import TextField from './TextField';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';

const UpdateCartDeliveryForm = ({
  schema, onSubmit, model, error, onSubmitFailure, inProgress, onChange, registerForm,
  intl, isInvoiceAddressDifferent, toggleInvoiceAddressDifferent, onSubmitSuccess,
}) => (
  <AutoForm
    disabled={inProgress}
    schema={schema}
    onSubmit={onSubmit}
    model={model}
    error={error}
    ref={registerForm}
    onSubmitFailure={onSubmitFailure}
    onSubmitSuccess={onSubmitSuccess}
    onChange={onChange}
  >
    <div className="fieldset mb3">
      <TextField
        autoComplete="home email"
        id="cart-emailAddress-field"
        name="emailAddress"
      />
    </div>

    <h4>
      {intl.formatMessage({ id: 'delivery_address' })}
    </h4>
    <div className="fieldset">
      <TextField
        half
        autoComplete="shipping given-name"
        id="cart-delivery-firstName-field"
        name="delivery.firstName"
      />
      <TextField
        half
        autoComplete="shipping family-name"
        id="cart-delivery-lastName-field"
        name="delivery.lastName"
      />
      <TextField
        autoComplete="shipping organization"
        id="cart-delivery-company-field"
        name="delivery.company"
      />
      <TextField
        autoComplete="shipping address-line1"
        id="cart-delivery-addressLine-field"
        name="delivery.addressLine"
      />
      <TextField
        half
        autoComplete="shipping postal-code"
        id="cart-delivery-postalCode-field"
        name="delivery.postalCode"
      />
      <TextField
        half
        autoComplete="shipping address-level2"
        id="cart-delivery-city-field"
        name="delivery.city"
      />
    </div>
    <label className="billing-address" htmlFor="billing-address">
      <input
        className="mr05"
        id="billing-address"
        type="checkbox"
        defaultChecked={isInvoiceAddressDifferent}
        onChange={toggleInvoiceAddressDifferent}
      />
      <span>
        {intl.formatMessage({ id: 'other_billing_address' })}
      </span>
    </label>

    {isInvoiceAddressDifferent && (
    <div>
      <h5>
        {intl.formatMessage({ id: 'billing_address' })}
      </h5>
      <div className="fieldset">
        <TextField
          half

          autoComplete="billing given-name"
          id="cart-billing-firstName-field"
          name="billing.firstName"

        />
        <TextField
          half

          autoComplete="billing family-name"
          id="cart-billing-lastName-field"
          name="billing.lastName"

        />
        <TextField

          autoComplete="billing organization"
          id="cart-billing-company-field"
          name="billing.company"

        />
        <TextField

          autoComplete="billing address-line1"
          id="cart-billing-addressLine-field"
          name="billing.addressLine"

        />
        <TextField
          half

          autoComplete="billing postal-code"
          id="cart-billing-postalCode-field"
          name="billing.postalCode"

        />
        <TextField
          half

          autoComplete="billing address-level2"
          id="cart-billing-city-field"
          name="billing.city"

        />
      </div>
    </div>
    )}
    <ErrorsField />
    <div className="button--next-wrap">
      <div className="loader-wrap">
        {inProgress && (
          <Loading color="#31302E" />
        )}
        <SubmitField className="button button--secondary button--blocked" value={intl.formatMessage({ id: 'continue_to_payment_methods' })} />
      </div>
    </div>
    <style jsx>
      {`
        .loader-wrap {
          float: right;
        }
        .billing-address {
          display: block;
          margin: 1.5em 0;
          padding-top: .5em;
          border-top: 1px solid #E0E0E0;
          font-size: 18px;
        }
      `}
    </style>
  </AutoForm>
);

export default compose(
  injectIntl,
  withCheckoutCartDelivery,
  withLoadingComponent,
  withFormModel(({ cart }) => ({
    emailAddress: cart.contact && cart.contact.emailAddress,
    countryName: cart.country && cart.country.name,
    // set delivery address to delivery or to invoice if not there
    delivery: (cart.delivery && cart.delivery.address) || cart.address,
    // set billing to billing address if delivery address set
    billing: (cart.delivery && cart.delivery.address) && cart.address,
  })),
  withState('isInvoiceAddressDifferent', 'updateIsInvoiceAddressDifferent', ({ model }) => !!model.billing),
  withFormErrorHandlers,
  withFormSchema(({ intl }) => ({
    emailAddress: {
      type: String,
      optional: false,
      regEx: SimpleSchema.RegEx.EmailWithTLD,
      label: intl.formatMessage({ id: 'email' }),
    },
    delivery: { type: Object, optional: false },
    'delivery.firstName': {
      type: String,
      label: intl.formatMessage({ id: 'first_name' }),
    },
    'delivery.lastName': {
      type: String,
      label: intl.formatMessage({ id: 'last_name' }),
    },
    'delivery.company': {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'company_name_optional' }),
    },
    'delivery.addressLine': {
      type: String,
      label: intl.formatMessage({ id: 'street' }),
    },
    'delivery.postalCode': {
      type: String,
      label: intl.formatMessage({ id: 'zip' }),
    },
    'delivery.city': {
      type: String,
      label: intl.formatMessage({ id: 'city' }),
    },
    billing: { type: Object, optional: true },
    'billing.firstName': {
      type: String,
      label: intl.formatMessage({ id: 'first_name' }),
    },
    'billing.lastName': {
      type: String,
      label: intl.formatMessage({ id: 'last_name' }),
    },
    'billing.company': {
      type: String,
      optional: true,
      label: intl.formatMessage({ id: 'company_name_optional' }),
    },
    'billing.addressLine': {
      type: String,
      label: intl.formatMessage({ id: 'street' }),
    },
    'billing.postalCode': {
      type: String,
      label: intl.formatMessage({ id: 'zip' }),
    },
    'billing.city': {
      type: String,
      label: intl.formatMessage({ id: 'city' }),
    },
    countryName: { type: String, optional: true },
  })),
  graphql(gql`
    mutation updateOrder($orderId: ID!, $contact: ContactInput!, $address: AddressInput!) {
      updateOrder(orderId: $orderId, contact: $contact, address: $address) {
        _id
        contact {
          emailAddress
        }
        address {
          firstName
          lastName
          addressLine
          postalCode
          city
          company
        }
        delivery {
          _id
          ... on OrderDeliveryShipping {
            address {
              firstName
              lastName
              addressLine
              postalCode
              city
              company
            }
          }
        }
      }
    }
  `, {
    name: 'updateOrder',
    options: {
      refetchQueries: [
        'checkoutCart',
      ],
    },
  }),
  graphql(gql`
    mutation updateOrderDeliveryShipping($orderDeliveryId: ID!, $address: AddressInput) {
      updateOrderDeliveryShipping(orderDeliveryId: $orderDeliveryId, address: $address) {
       _id
     }
    }
  `, {
    name: 'updateOrderDeliveryShipping',
  }),
  withHandlers(() => {
    let formRef;
    return {
      registerForm: () => (ref) => {
        formRef = ref;
      },
      toggleInvoiceAddressDifferent: ({ updateIsInvoiceAddressDifferent }) => async (event) => {
        updateIsInvoiceAddressDifferent(event.target.checked);
        if (!event.target.checked) {
          formRef.change('billing', null);
        }
      },
      onSubmit: ({
        updateOrder,
        updateOrderDeliveryShipping, cart, intl,
      }) => async ({ emailAddress, delivery, billing }) => {
        try {
          const { __typename: ___, countryCode: _, ...shippingAddress } = delivery;
          const { __typename, countryCode, ...address } = billing || delivery;
          await updateOrderDeliveryShipping({
            variables: {
              orderDeliveryId: cart.delivery && cart.delivery._id,
              address: billing ? shippingAddress : null,
            },
          });
          await updateOrder({
            variables: {
              orderId: cart._id,
              contact: { emailAddress },
              address,
            },
          });
          return true;
        } catch (e) {
          console.error(e); //eslint-disable-line
          throw new Error(intl.formatMessage({ id: 'error_delivery_update_failed' }));
        }
      },
    };
  }),
  withFormInProgressHandlers,
  pure,
)(UpdateCartDeliveryForm);
