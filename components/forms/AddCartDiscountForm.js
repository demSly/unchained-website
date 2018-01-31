import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SubmitField from 'uniforms-unstyled/SubmitField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import withFormErrorHandlers from '../../lib/hoc/withFormErrorHandlers';
import withFormInProgressHandlers from '../../lib/hoc/withFormInProgressHandlers';
import withFormSchema from '../../lib/hoc/withFormSchema';
import TextField from './TextField';
import ErrorsField from './ErrorsField';
import Loading from '../Loading';

const UpdateCartDeliveryForm = ({
  schema, onSubmit, model, error, onSubmitFailure, inProgress,
  intl, onSubmitSuccess, onChange,
}) => (
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
    <div className="coupon-wrap fieldset">
      <TextField
        half
        inlineLabel
        autoComplete="coupon"
        id="coupon-field"
        name="couponCode"
        placeholder={intl.formatMessage({ id: 'coupon_code' })}
        component={TextField}
      />

      <div className="field field--half">
        <div className="loader-wrap">
          {inProgress && (<Loading color="#31302E" />)}
          <SubmitField disabled={inProgress} className="button button--small" value={intl.formatMessage({ id: 'check' })} />
        </div>
      </div>

      <ErrorsField />
    </div>
    <style jsx>{`
      .loader {
        height: 37px;
        width: 89%;
      }
      .coupon-wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 1em 0;
      }
      .coupon-wrap .error-message {
        margin-top: 12px
        margin-bottom: 12px;
        margin-left: 12px;
        padding-top: .125em;
        padding-bottom: .1875em;
      }
      .coupon-wrap .success-message {
        padding: 12px;
        font-size: 16px;
      }
      .coupon-wrap .error-message p {
        margin-bottom: 0;
        font-size: 16px;
      }
    `}
    </style>
  </AutoForm>
);

export default compose(
  injectIntl,
  withFormErrorHandlers,
  withFormSchema(() => ({
    couponCode: { type: String, optional: false },
  })),
  graphql(gql`
    mutation addCartDiscount($couponCode: String!) {
      addCartDiscount(code: $couponCode) {
        _id
      }
    }
  `, {
    options: {
      refetchQueries: [
        'checkoutCartItems',
      ],
    },
  }),
  withHandlers({
    onSubmit: ({
      mutate,
      intl,
    }) => async ({ couponCode }) => {
      try {
        if (couponCode) {
          const result = await mutate({
            variables: { couponCode },
          });
          return result;
        }
      } catch (e) {
        throw new Error(intl.formatMessage({ id: 'error_coupon_code_invalid' }));
      }
      throw new Error(intl.formatMessage({ id: 'error_no_coupon' }));
    },
  }),
  withFormInProgressHandlers,
  pure,
)(UpdateCartDeliveryForm);
