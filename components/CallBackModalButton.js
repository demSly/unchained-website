import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, withHandlers, withState } from 'recompose';
import createModalButton from '../lib/hoc/createModalButton';
import Modal from './Modal';
import CallBackForm from './forms/CallBackForm';

const ToggleButton = ({
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="mt1 no-button"
  >
    <img className="call-back-pinguin" src="../static/img/customer-service-man.svg" alt="call back icon" />
  </button>
);

const ChangeCountry = ({
  onClose, intl, children, isDone, markDone,
}) => (
  <Modal title={children} visible onClose={onClose}>
    {isDone ? (
      <div className="done">
        {intl.formatMessage({ id: 'call_back_success' })}
      </div>
    ) : (
      <CallBackForm onSubmitSuccess={markDone} />
    )}
  </Modal>
);

export default compose(
  injectIntl,
  withState('isDone', 'updateIsDone', false),
  withHandlers({
    markDone: ({ updateIsDone }) => () => {
      updateIsDone(true);
    },
  }),
)(createModalButton(ChangeCountry, ToggleButton));
