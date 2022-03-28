import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = (props) => {
  const  {el, message, isOpen, onClose } = props;
  //console.log(el);
  if(!isOpen) return null;
  return ReactDOM.createPortal (
    <div className={styles['modal']}  >
      <CloseIcon onClick={onClose} />
      {message}
    </div>
    , el.current);
}

export default Modal;
