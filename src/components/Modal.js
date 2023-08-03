import React, { useEffect } from 'react';
import './modal.css';

const Modal = ({ isOpen, closeModal, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                onClick={closeModal}
                onKeyDown={closeModal}
                className='modal__dimmer'
                role='button'
                aria-label='Close Modal'
                tabIndex={0}
            ></div>
            <div className='modal__container'>
                <button onClick={closeModal} className='btn modal__btn-close'>
                    Close
                </button>
                {content}
            </div>
        </>
    );
};
export default Modal;
