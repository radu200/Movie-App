import React from 'react';
import Modal from './ModalView';
import Portal from './PortalContainer';

interface IProps {
  children: React.ReactNode,
  open: boolean,
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const ModalContainer = ({ children, open, onClose }: IProps) => {

  if (!open) return null;

  return (
    <Portal id="portal">
      <Modal onClose={onClose} >
        {children}
      </Modal>
    </Portal>
  );
};

export default ModalContainer;