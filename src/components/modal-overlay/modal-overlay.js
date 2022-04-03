import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';
const ModalOverlay = (props) => {
  const { onClick } = props;
  return (
    <div 
      className={styles['modal-overlay']}
      onClick = {onClick}
    >
    </div>
  )
}

ModalOverlay.propTypes={
  onClick: PropTypes.func.isRequired,
};
export default ModalOverlay;
