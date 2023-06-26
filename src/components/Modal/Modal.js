import React from 'react';
import './modal.scss';

const Modal = ({ activeModal, setActiveModal, children }) => {
   return (
      <div className={activeModal ? 'custom-modal active-background' : 'custom-modal'} onClick={() => setActiveModal(false)}>
         <div
            className={activeModal ? 'custom-modal__content active' : 'custom-modal__content'}
            onClick={(e) => e.stopPropagation()}
         >
            <img className='custom-modal__close' src='/img/btn-remove.svg' alt='close' onClick={() => setActiveModal(false)} />
            <div className='custom-modal__wrapper'>{children}</div>
         </div>
      </div>
   );
};

export default Modal;
