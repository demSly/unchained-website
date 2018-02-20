import React from 'react';
import { pure } from 'recompose';

const CheckoutStep = ({
  number, intl, title, children, ...props
}) => (
  <div className="step" {...props}>
    <div className="step-head">
      <span className="step-number">{number}</span>
      <span className="step-title">{title}</span>
    </div>
    {children}
    <style jsx>{`
      .step-title {
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .step-head {
        width: 100%;
        padding-top: 1.25em;
        padding-bottom: 1.25em;
      }
      .step-head:after {
        content: "";
        display: table;
        clear: both;
      }

      .step-number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #00F5BC;
        float: left;
        margin-right: .5em;
      }

      .step + .step {
        margin-top: 1.5em;
        border-top: 1px solid #E0E0E0;
      }
    `}
    </style>
  </div>
);

export default pure(CheckoutStep);
