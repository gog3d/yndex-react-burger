import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import { useSelector } from 'react-redux';

import { IngredientType, StateType } from '../../services/types/data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = (props) => {
  const  { isOpen, onClose, children } = props;

  const items = useSelector((store: StateType) => store.ingredients.burgerIngredients);

  useEffect(() => {
    const closeByEscape: (e: KeyboardEvent)=> void = (e) => {
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

export default Modal;