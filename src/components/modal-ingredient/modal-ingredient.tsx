import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal-ingredient.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

interface ModalIngredientProps {
  children: React.ReactNode;
};

const ModalIngredient: React.FC<ModalIngredientProps> = (props) => {
  const  { children } = props;
  const history = useHistory();
  const onClose = ()  => {
    history.goBack();
  };

  useEffect(() => {
    const closeByEscape: (e: {key: string}) => void = (e) => {
      if(e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  return ReactDOM.createPortal (
    <>
      <div className={styles['modal-overlay']}>
        <ModalOverlay onClick={onClose} />
      </div>
      <div className={styles['modal']}>
        <div className={styles['modal-icon']} >
          <CloseIcon onClick={onClose}/>
        </div>
        <div className={styles['modal-children']}>
          {children}
        </div>
      </div>
    </>
    , document.getElementById('modals'));
}

export default ModalIngredient;