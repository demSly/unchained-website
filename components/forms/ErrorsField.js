import React from 'react';
import { injectIntl } from 'react-intl';
import classnames from 'classnames';
import BaseField from 'uniforms/BaseField';
import filterDOMProps from 'uniforms/filterDOMProps';
import nothing from 'uniforms/nothing';

const ErrorsField = ({
  intl, children, className, ...props
}, { uniforms: { error, schema } }) =>
  (!error ? nothing : (
    <div className={classnames('error-message', className)} {...filterDOMProps(props)}>
      {children || intl.formatMessage({ id: 'form_errors_title' })}
      <ul>
        {schema.getErrorMessages(error).map(message =>
          (
            <li key={message}>
              {message}
            </li>
          ))
        }
      </ul>
    </div>
  ));
ErrorsField.contextTypes = BaseField.contextTypes;

export default injectIntl(ErrorsField);
