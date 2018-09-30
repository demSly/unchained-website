import React from 'react';
import classnames from 'classnames';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const Text = ({
  className,
  disabled,
  half,
  inlineLabel,
  error,
  errorMessage,
  id,
  inputRef,
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
      <textarea
        disabled={disabled}
        className={classnames('field__input', { 'field__input--error': (error && errorMessage) })}
        id={id}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder || (inlineLabel && label)}
        ref={inputRef}
        type={type}
        value={value}
        autoComplete={autoComplete}
      />
    </div>
  </div>
);
Text.defaultProps = { type: 'text' };

export default connectField(Text);
