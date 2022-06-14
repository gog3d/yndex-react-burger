import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';
import { getLogout, getUser, getRefreshUser, getToken } from '../services/actions/auth.js';
import { getCookie, deleteCookie, getRefreshToken } from '../services/utils.js';

import {Logo, PasswordInput, EmailInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './orders-page.module.css';
import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component.js';



export const  OrdersPage = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const history = useHistory();
  const items = useSelector(store => store.ingredients.burgerIngredients)//.
//    filter((item) => item.type === type);

  const onClickItem = (item, location) => {
    history.push({
      pathname: `/feed/${item._id}`,
      state: {background: location},
    });
  };


  const {
    user, 
    userRequest,
    userFailed,
    refreshUser,
    token
  } = useSelector(store => store.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState('История заказов');

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(()=>{
    setName(user.user ? user.user.name : '');
    setEmail(user.user ? user.user.email : '');
  }, [user]);

  const onSave =  useCallback(
    (e) => {
      e.preventDefault();
      console.log( getCookie('accessToken'));
      dispatch(getRefreshUser({ 
        'email': email,
        'password': password }));
    }, [email, password]
  );

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
      history.replace({ pathname: '/login' });
    },
    [history]
  );


const userStatus = useMemo(
  () => {
    return userFailed ? (
      <p className={styles.text}>Произошла ошибка при получении данных</p>
    ) : userRequest ? (
      <p className={styles.text}>Получение данных пользователя...</p>
    ) : user ? (
     ''
    ) : (
      <p className={styles.text}>Произошла ошибка при получении данных</p>
    );
  },
  [userRequest, user, userFailed]
  );

  return (
    <div className={styles["page__content"]}>
      {userStatus}
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
      { items.map((item, index) => {return(
        <div key={uuidv4()} className={styles['orders-item']} onClick={() => onClickItem(item, location)}>
          <OrderSheetComponent item={ item } />
        </div> )}) }
      </div>
    </div>
  </main>
</div>
  )
}
