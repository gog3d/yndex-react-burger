import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

interface ModalOverlayProps {
  onClick: () => void;
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const { onClick } = props;
  return (
    <div 
      className={styles['modal-overlay']}
      onClick = {onClick}
    >
    </div>
  )
}

export default ModalOverlay;
