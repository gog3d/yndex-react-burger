import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './burger-constructor-button-container.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.js';
import OrderDetails from '../order-details/order-details.js';

const BurgerConstructorButtonContainer = (props) => {
  const [open, setOpen] = useState(false);
  const count = props.count;
  return (
    <div className={styles["burger-constructor-button-container"]} >
      <span className={styles['burger-constructor-button-container-span']}>
        {count}
      </span>
      <CurrencyIcon type={'primary'} />
      <Modal
        message={'hello'}
        isOpen={open}
        onClose={()=>setOpen(false)}
       >
       <OrderDetails />
      </Modal>
      <Button 
        className={styles['burger-constructor-button']}
        onClick={()=>setOpen(true)}
      > Оформить заказ</Button>
    </div>
  );
}

BurgerConstructorButtonContainer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default BurgerConstructorButtonContainer;