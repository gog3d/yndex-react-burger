import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay.js'

const Modal = (props) => {
  const  { isOpen, onClose, children } = props;
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
    <div className={styles['modal']}>
      <ModalOverlay onClick={onClose} />
      <div className={styles['modal-icon']} >
        <CloseIcon onClick={()=>onClose()}/>
      </div>
      {children}
    </div>
    , document.getElementById('modals'));
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;