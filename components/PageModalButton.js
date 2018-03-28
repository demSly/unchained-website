import React from 'react';
import withRegion from '../lib/withRegion';
import createModalButton from '../lib/createModalButton';
import Modal from './Modal';

const PortalledModal = ({ onClose, regionId, ...props }) => (
  <Modal title={props[regionId] && props[regionId].title} visible onClose={onClose}>
    <div
      dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: props[regionId] && props[regionId].text,
      }}
    />
  </Modal>
);

export default withRegion()(createModalButton(PortalledModal));
