import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getLogout, getUser } from '../redux/actions/auth';
import styles from './orders-page.module.css';
import  { WS_USER_CONNECTION_START, WS_USER_CONNECTION_CLOSED } from '../redux/action-types';

import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component';
import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';
import { TIngredient}  from '../redux/action-types/data';
import { Location } from 'history';
interface LocationState {
  from: {
    pathname: string;
  };
}


export const  OrdersPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<Location & LocationState>();

  const history = useHistory();

  const onClickItem = (item: TOrders, location: Location) => {
    history.push({
      pathname: `/profile/orders/${item._id}`,
      state: {background: location},
    });
  };

  const {
    user, 
    userRequest,
    userFailed,
  } = useSelector((store: RootState) => store.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState('История заказов');

  const { success, orders, total, totalToday } = useSelector((store: TOrders) => store.orders.userOrders);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  useEffect(() => {
    if(!userFailed) {
      dispatch({ type: WS_USER_CONNECTION_START });
    }
  }, [dispatch]);

  useEffect(()=>{
    setName(user.user ? user.user.name : '');
    setEmail(user.user ? user.user.email : '');
  }, [user]);

  const onCancel =  useCallback(
    (e) => {
      e.preventDefault();
      setName(user.user ? user.user.name : '');
      setEmail(user.user ? user.user.email : '');
      setPassword('');
    }, [email, password, name]
  );

  const profileOnClick = useCallback(
    () => {
      setCurrent('Профиль');
      history.replace({ pathname: '/profile' });
    },
    [history]
  );

  const orderOnClick = useCallback(
    () => {
      setCurrent('История заказов');
      history.replace({ pathname: '/profile/orders' });
    },
    [history]
  );

  const outOnClick = useCallback(
    () => {
      setCurrent('История заказов');
      dispatch(getLogout());
      dispatch({ type: WS_USER_CONNECTION_CLOSED });
      history.replace({ pathname: '/login' });
    },
    [history]
  );

  if(!orders) {
    return null
  }

  return (
    <div className={styles["page__content"]}>
      <main className={styles["main"]}>
        <div className={styles['profile-container']}>
          <div className={styles['profile-menu-container']}>
            <div className={styles['input-container']}>
              <span className={current === 'Профиль' ? 
                'text text_type_main-default' : 
                'text text_type_main-default text_color_inactive'} 
                onClick={profileOnClick}>
                Профиль
              </span>
            </div>
            <div className={styles['input-container']}>
              <span className={current === 'История заказов' ? 
                'text text_type_main-default' : 
                'text text_type_main-default text_color_inactive'} 
                onClick={orderOnClick}>
                История заказов
              </span>
            </div>
            <div className={styles['input-container']}>
              <span className={current === 'Выход' ? 
                'text text_type_main-default' : 
                'text text_type_main-default text_color_inactive'}
                onClick={outOnClick}>
                Выход
              </span>
            </div>
          <div className={styles['bottom-text-container']}>
            <p className={styles['orders-text']}>
              <span className={'text text_type_main-small text_color_inactive'}>
                В этом разделе вы можете
              </span>
            </p>
            <p className={styles['orders-text']}>
              <span className={'text text_type_main-small text_color_inactive'}>
                изменить свои персональные данные
              </span>
            </p>
          </div>

      </div>
      <div className={styles['sheet-container']}>
        { orders.map((order: TOrders, index: number) => { return (
          <div key={uuidv4()} className={styles['orders-item']} onClick={() => onClickItem(order, location)}>
            <OrderSheetComponent order={ order } />
          </div> )}) }
      </div>
    </div>
  </main>
</div>
  )
}
