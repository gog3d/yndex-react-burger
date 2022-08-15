import React from 'react';
import styles from './modal-overlay.module.css';

interface ModalOverlayProps {
  onClick: () => void;
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const { onClick } = props;
  return (
    <div 
      data-testid= 'modal_overlay'
      className={styles['modal-overlay']}
      onClick = {onClick}
    >
    </div>
  )
}

export default ModalOverlay;
