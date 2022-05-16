import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../services/actions/auth.js';
import { getCookie, deleteCookie } from '../services/utils.js';

import {Logo, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css';

export const  ProfilePage = () => {
  const [nameInput, setNameInput] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [current, setCurrent] = useState('Профиль');
  const history = useHistory(); 
  
  const {
    login,
    logout,
    logoutRequest,
    logoutFailed,
  } = useSelector(store => store.auth);

  const dispatch = useDispatch();

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
  const outOnClick = () => {
    const refreshToken = getCookie(login.user.name);
    dispatch(getLogout({refreshToken}));
//    console.log(register);
  };
  
  if(logout.success) {
    deleteCookie(login.user.name);
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
     )
   }

  return (
    <div className={styles['profile-container']}>

      <div className={styles['top-container']}>
        <div className={styles['input-container']}>
          <span 
            className={current === 'Профиль' ? 
              'text text_type_main-default' 
               : 
              'text text_type_main-default text_color_inactive'
              } 
              onClick={profileOnClick}
           >
              Профиль
           </span>
          <Input 
            type={'text'}
            value={nameInput}
            placeholder={'Имя'}
            onChange={e => setNameInput(e.target.value)}
            icon={'EditIcon'}
            size={'small'}
          />
        </div>
        <div className={styles['input-container']}>
          <span 
            className={current === 'История заказов' ? 
              'text text_type_main-default' 
               : 
              'text text_type_main-default text_color_inactive'
              } 
              onClick={orderOnClick}
           >
              История заказов
           </span>
          <Input 
            type={'text'}
            value={loginInput}
            placeholder={'Логин'}
            onChange={e => setLoginInput(e.target.value)}
            icon={'EditIcon'}
            size={'small'}
          />
        </div>
        <div className={styles['input-container']}>
          <span 
            className={current === 'Выход' ? 
              'text text_type_main-default' 
               : 
              'text text_type_main-default text_color_inactive'
              } 
              onClick={outOnClick}
           >
              Выход
           </span>
          <Input 
            type={'text'}
            value={passwordInput}
            placeholder={'Пароль'}
            onChange={e => setPasswordInput(e.target.value)}
            icon={'EditIcon'}
            size={'small'}
          />
        </div>
      </div>

      <div className={styles['bottom-container']}>
        <div className={styles['input-container']}>
          <span className={'text text_type_main-small text_color_inactive'}>
            В этом разделе вы можете
          </span>
        </div>
        <div className={styles['input-container']}>
          <span className={'text text_type_main-small text_color_inactive'}>
            изменить свои персональные данные
          </span>
        </div>
      </div>
      
    </div>
   
  )
}
