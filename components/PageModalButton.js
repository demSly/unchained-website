import React from 'react';
import withRegion from '../lib/withRegion';
import createModalButton from '../lib/createModalButton';
import Modal from './Modal';

const PortalledModal = ({ onClose, regionId, ...props }) => {
  const { title, text } = props[regionId] || {}; // eslint-disable-line
  return (
    <Modal title={title} visible onClose={onClose}>
      <div
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: text,
        }}
      />
    </Modal>
  );
};

export default withRegion()(createModalButton(PortalledModal));
