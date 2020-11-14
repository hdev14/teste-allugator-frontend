import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Button from '../Button';

import { Container, ModalContainer } from './styles';

export interface ModalHandler {
  toggleModal: () => void;
}

interface ModalProps {
  confirm?: any,
  confirm_text: string
  children: React.ReactNode
  formId?: string
}

/* eslint-disable max-len */
const Modal: React.ForwardRefRenderFunction<ModalHandler, ModalProps> = ({
  confirm, confirm_text, children, formId,
}, ref) => {
  const [open, setOpen] = useState(false);

  function toggleModal() {
    setOpen(!open);
  }

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  if (!open) return null;

  return (
    <Container>
      <ModalContainer>
        <div>
          {children}
        </div>
        <div className="buttons">
          <Button type="button" btnType="secundary" onClick={toggleModal}>cancelar</Button>
          {formId ? (
            <Button type="submit" form={formId} btnType="success" onClick={confirm}>{confirm_text}</Button>
          ) : (
            <Button type="button" btnType="success" onClick={confirm}>{confirm_text}</Button>
          )}
        </div>
      </ModalContainer>
    </Container>
  );
};

export default forwardRef(Modal);
