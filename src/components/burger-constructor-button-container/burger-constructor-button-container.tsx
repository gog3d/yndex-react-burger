import React, { useState, useMemo, useCallback } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import styles from './burger-constructor-button-container.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { getOrderDetails } from '../../redux/actions/ingredients';
import { RootState }  from '../../redux/store';
import { TIngredient } from '../../types/data';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerConstructorButtonContainer: React.FC = () => {
  const { 
    orderDetailsItems, 
    orderDetails,
    orderDetailsRequest,
    orderDetailsFailed,
    } = useAppSelector((store) => store.ingredients);

//  const constructorIngredients = useAppSelector((store) => store.ingredients.constructorIngredients);

  const {
    authFailed,
  } = useAppSelector((store) => store.auth);

  const history = useHistory();

  const constructorIngredients = useAppSelector((store) => store.ingredients.constructorIngredients);
  
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const count = useMemo(
    () => {
      const bunPrice = constructorIngredients.bun === null ? 0 : constructorIngredients.bun.price ? constructorIngredients.bun.price : 0;
      const ingredientsPrice = constructorIngredients.ingredients.reduce((sum, comp) => sum + comp.price, 0);
      return bunPrice + ingredientsPrice;
    }, [constructorIngredients.ingredients, constructorIngredients.bun]
  );
  
  const onClickButton = useCallback(() => {
    if(orderDetailsItems !== null) {
      if (orderDetailsItems.find((item: any) => {
        if(item === null) return false;
        if(item.type === 'bun') return true;
      })
      ) {
        if(!authFailed) {
          setOpen(true);
          dispatch(getOrderDetails(orderDetailsItems));
        } else {
          history.push({
            pathname: '/login',
          });
        }
      }
    }
  }, [orderDetailsItems, authFailed]);
  
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
    <div data-testid='order_button' className={styles["burger-constructor-button-container"]} >
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
        onClick={()=> onClickButton()}
      > Оформить заказ</Button>
    </div>
  );
}

export default BurgerConstructorButtonContainer;