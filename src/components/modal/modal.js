import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay.js'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Modal = (props) => {
  const  { isOpen, onClose, children } = props;

  const items = useSelector(store => store.ingredients.burgerIngredients);

  useEffect(() => {
    const closeByEscape = (e) => {
      if(e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  if(!isOpen) return null;
  return ReactDOM.createPortal (
    <>
      <div className={styles['modal-overlay']}>
        <ModalOverlay onClick={onClose} />
      </div>
      <div className={styles['modal']}>
        <div className={styles['modal-icon']} >
          <CloseIcon onClick={()=>onClose()}/>
        </div>
        <div className={styles['modal-children']}>
          {children}
        </div>
      </div>
    </>
    , document.getElementById('modals'));
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;