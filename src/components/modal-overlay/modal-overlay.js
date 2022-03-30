import React, {useState} from 'react';
import styles from './modal-overlay.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const ModalOverlay = (props) => {
  const  { onClick } = props;
  window.addEventListener('keydown', function (e) {
    if(e.key === 'Escape') {
      onClick()
    }
  });
  return (
    <div 
      className={styles['modal-overlay']}
      onClick={onClick}
    >
    </div>
  )
}

export default ModalOverlay;
