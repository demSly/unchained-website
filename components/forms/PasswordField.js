import React from 'react';
import classnames from 'classnames';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import { compose, withState, withHandlers } from 'recompose';

const Password = ({
  className,
  togglePassword,
  isPasswordVisible,
  setPasswordVisible,
  disabled,
  half,
  error,
  errorMessage,
  id,
  inlineLabel,
  registerChild,
  label,
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
  autoComplete,
  ...props
}) => (
  <div
    className={classnames(
      className,
      {
        disabled,
        'field--required': required,
        'field--error': (error && errorMessage),
        'field--half': half,
      },
      'field',
    )}
    {...filterDOMProps(props)}
  >
    <div className="field__input-wrapper">
      {label && (
        <label // eslint-disable-line
          className={classnames(
          {
            'field__label--hidden': inlineLabel,
          },
          'field__label',
        )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="field__input-password-wrap">
        <input
          disabled={disabled}
          className={classnames('field__input', { 'field__input--error': (error && errorMessage) })}
          id={id}
          name={name}
          onChange={event => onChange(event.target.value)}
          placeholder={placeholder || (inlineLabel && label)}
          ref={registerChild}
          type={isPasswordVisible ? 'text' : 'password'}
          value={value}
          autoComplete={autoComplete}
        />
        <span
          role="button"
          tabIndex="-1"
          aria-label="toggle password visibility"
          className={classnames('hide-show')}
          onClick={togglePassword}
          onKeyUp={togglePassword}
        >
          {isPasswordVisible ? (
            <img src="../static/img/icon/hide.svg" alt="hide password icon" />
          ) : (
            <img src="../static/img/icon/view.svg" alt="show password icon" />
          )}
        </span>
      </div>
    </div>
  </div>
);
Password.defaultProps = { type: 'password' };

export default compose(
  connectField,
  withState('isPasswordVisible', 'setPasswordVisible', false),
  withHandlers(() => {
    let inputRef;
    return {
      registerChild: () => (ref) => {
        inputRef = ref;
      },
      togglePassword: ({ isPasswordVisible, setPasswordVisible }) => (e) => {
        e.preventDefault();
        setPasswordVisible(!isPasswordVisible);
        inputRef.focus();
      },
    };
  }),
)(Password);
