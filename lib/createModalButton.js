import React from 'react';
import { PortalWithState } from 'react-portal';

const ToggleButton = ({
  title, onClick, className,
}) => (
  <button type="button" className={className} onClick={onClick}>
    {title}
  </button>
);

const createModalButton = (Modal, Button = ToggleButton) => props => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, portal }) => [
      <Button key="button" {...props} onClick={openPortal} />,
      portal(<Modal key="modal" {...props} onClose={closePortal} />),
    ]}
  </PortalWithState>
);

export default createModalButton;
