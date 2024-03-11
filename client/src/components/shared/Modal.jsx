import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, Overlay } from '.';

const Modal = ({ children, onClose, className }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={onClose} />,
        document.getElementById('root-overlay')
      )}
      {ReactDOM.createPortal(
        <ModalWrapper onClose={onClose} className={className}>
          {children}
        </ModalWrapper>,
        document.getElementById('root-modal')
      )}
    </React.Fragment>
  );
};

export default Modal;
