import React, {useState, useRef, useEffect, useMemo} from 'react';
import styles from './burger-constructor-button-container.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.js';
import OrderDetails from '../order-details/order-details.js';
import { baseURL }  from '../../utils/config.js';

import { useDispatch, useSelector } from 'react-redux';

const BurgerConstructorButtonContainer = (props) => {
  const data = useSelector(store => store.ingredients.constructorIngredients);

  const [open, setOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null)

  const count = useMemo(
    () => {
      return data.reduce((sum, comp) => sum + comp.price, 0)
    }, [data]
  );

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
    try {
      const URL = baseURL + 'orders';
      const obj = await orderDetailsFetch(URL, components);
      setOrderDetails(obj);
      setOpen(true);
    } catch (error) {
      setOpen(false);
    }
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
        <OrderDetails orderDetails={orderDetails}/>
      </Modal>
      <Button 
        className={styles['burger-constructor-button']}
        onClick={()=> onClickButton(data)}
      > Оформить заказ</Button>
    </div>
  );
}

export default BurgerConstructorButtonContainer;