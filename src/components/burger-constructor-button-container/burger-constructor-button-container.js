import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './burger-constructor-button-container.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.js';
import OrderDetails from '../order-details/order-details.js';

import { ConstructorContext } from '../../services/constructor-context.js';
import { OrderDetailsContext } from '../../services/constructor-context.js';

const BurgerConstructorButtonContainer = (props) => {
  const [open, setOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null)
  const [constructorState, constructorDispatcher] = React.useContext(ConstructorContext);
  const count = constructorState.components.reduce((sum, comp) => sum + comp.price, 0)
  const orderDetailsFetch = async (URL, components) => {
    const idsComponents = {ingredients: components.map((comp)=>comp._id)};
    const res = await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(idsComponents),
    });
    const obj = await res.json();
    return obj;
  };
  const onClickButton = async (components) => {
    const URL = 'https://norma.nomoreparties.space/api/orders';
    const obj = await orderDetailsFetch(URL, components);
    setOrderDetails(obj);
    setOpen(true);
  };

  return (
    <div className={styles["burger-constructor-button-container"]} >
      <span className={styles['burger-constructor-button-container-span']}>
        {count}
      </span>
      <CurrencyIcon type={'primary'} />
      <Modal
        isOpen={open}
        onClose={()=>setOpen(false)}
      >
      <OrderDetailsContext.Provider value={{orderDetails}}>
        <OrderDetails />
      </OrderDetailsContext.Provider>
      </Modal>
      <Button 
        className={styles['burger-constructor-button']}
        onClick={()=> onClickButton(constructorState.components)}
      > Оформить заказ</Button>
    </div>
  );
}

export default BurgerConstructorButtonContainer;