import React, { useEffect } from 'react';
import { Overlay, ModalEl } from './Modal.styled';

export default function Modal({image,onClose}){
  useEffect(() => {
    window.addEventListener('keydown', hendleEsc);

    return () => {
      window.removeEventListener('keydown', hendleEsc);
    };
  }, [hendleEsc]);

  function hendleEsc(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  function hendleBackdrop (e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={hendleBackdrop}>
      <ModalEl>
        <img src={image} alt="" width="100%" />
      </ModalEl>
    </Overlay>
  );
}
