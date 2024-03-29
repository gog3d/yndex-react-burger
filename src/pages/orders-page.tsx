import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
  } from "react-router-dom";
import { getLogout, getUser } from '../redux/actions/auth';
import styles from './orders-page.module.css';

import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component';
import { TOrders }  from '../types/data';
import { wsUserConnectionStart, wsUserDisconnect } from '../redux/actions/wsUserAction';
import { getCookie } from '../redux/utils';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { TLocationState } from '../types/data';

export const  OrdersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation<TLocationState>()
  const history = useHistory();

  const onClickItem = useCallback(
    (item: TOrders) => {
      return history.push({
        pathname: `/profile/orders/${item._id}`,
        state: {background: location},
    });
  }, [location]);

  const {
    user, 
    userRequest,
    userFailed,
  } = useAppSelector((store) => store.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState('История заказов');

  const { 
    wsUserError, 
    wsUserConnected, 
    wsUserOrders, 
    wsUserOrdersTotal, 
    wsUserOrdersTotalToday 
  } = useAppSelector((store) => store.wsUserOrders);
  
  useEffect(() => {
    const accessToken = getCookie('accessToken')
    dispatch({ type: wsUserConnectionStart, payload: `?token=${accessToken}` });
    //dispatch({ type: wsUserConnectionStart, payload: ':3002' });
    return () => {
      dispatch({type: wsUserDisconnect});
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(()=>{
    //setName(user.user ? user.user.name : '');
    //setEmail(user.user ? user.user.email : '');
    setName(user === null ? '' : user.user.name);
    setEmail(user === null ? '' : user.user.email);
  }, [user]);

  const onCancel =  useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setName(user === null ? '' : user.user.name);
      setEmail(user === null ? '' : user.user.email);
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
      history.replace({ pathname: '/login' });
    },
    [history]
  );

  if(!wsUserOrders) {
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
        { wsUserOrders.map((order: TOrders, index: number) => { 
          return (
          <div key={uuidv4()} className={styles['orders-item']} onClick={() => onClickItem(order)}>
            <OrderSheetComponent order={ order } />
          </div> )}) }
      </div>
    </div>
  </main>
</div>
  )
}
