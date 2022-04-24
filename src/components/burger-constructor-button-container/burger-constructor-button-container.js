import React, {useState, useMemo} from 'react';
import styles from './burger-constructor-button-container.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.js';
import OrderDetails from '../order-details/order-details.js';
import { baseURL }  from '../../utils/config.js';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../services/actions/ingredients.js';


const BurgerConstructorButtonContainer = () => {
  const { 
    orderDetailsItems, 
    orderDetails,
    orderDetailsRequest,
    orderDetailsFailed,
    } = useSelector(store => store.ingredients);

  const constructorIngredients = useSelector(store => store.ingredients.constructorIngredients);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const count = useMemo(
    () => {
      const bunPrice = constructorIngredients.bun.price ? constructorIngredients.bun.price : 0;
      const ingredientsPrice = constructorIngredients.ingredients.reduce((sum, comp) => sum + comp.price, 0);
      return bunPrice + ingredientsPrice;
    }, [constructorIngredients.ingredients, constructorIngredients.bun]
  );
  
  const onClickButton =  () => {
    setOpen(true);
    dispatch(getOrderDetails(orderDetailsItems));
  };
  
  const orderDetailsStatus = useMemo(
    () => {
      return orderDetailsFailed ? (
        <p className={styles.text}>Произошла ошибка при получении данных</p>
      ) : orderDetailsRequest ? (
        <p className={styles.text}>...Запрос деталей заказа</p>
      ) : orderDetails ? (
       ''
      ) : (
        <p className={styles.text}>Произошла ошибка при получении данных</p>
      );
    },
    [orderDetails, orderDetailsRequest, orderDetailsFailed]
  );

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
        <>
          {orderDetailsStatus}
          {
            !orderDetailsRequest && 
            <OrderDetails/>
          }
        </>
      </Modal>
      <Button 
        className={styles['burger-constructor-button']}
        onClick={()=> onClickButton()}
      > Оформить заказ</Button>
    </div>
  );
}

export default BurgerConstructorButtonContainer;