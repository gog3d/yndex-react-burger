import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../services/actions/auth.js';
import { setCookie } from '../services/utils.js';

import {Logo, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.css';

export const  LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const {
    login,
    loginRequest,
    loginFailed,
  } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  const onClickButton =  (email, password) => {
    dispatch(getLogin({ 'email': email, 'password': password}));
    console.log(login);
  };

  if(login.success) {
    setCookie('token', login.refreshToken);
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
     )
   }

  return (
    <div className={styles['login-container']}>
      <Logo />
      <div className={styles['main-container']}>
        <div className={styles['first-container']}>
          <span className={styles['first-span']}>
            <span className="text text_type_main-medium">Вход</span>
          </span>
          <Input 
            type={'email'}
            value={email}
            placeholder={'E-mail'}
            onChange={e => setEmail(e.target.value)}
            size={'small'}
          />
          <Input 
            type={'password'}
            placeholder={'Пароль'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            icon={'ShowIcon'}
            size={'small'}
          />
          <Button onClick={()=>onClickButton(email, password)}>
            Войти
          </Button>
        </div>
        <div className={styles['bottom-container']}>
          <div className={styles['second-container']}>
            <span className={styles['first-span']}>
              <span className="text text_type_main-small">
                Вы новый пользователь?
              </span>
            </span>
            <Link to='/register'>
              Зарегистрироваться
            </Link>
          </div>
          <div className={styles['second-container']}>
            <span className={styles['first-span']}>
              <span className="text text_type_main-small">
                Забыли пароль?
              </span>
            </span>
            <Link to='/forgot-password'>
              Восстановить пароль
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
