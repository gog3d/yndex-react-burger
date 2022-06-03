import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../services/actions/auth';
import { setCookie } from '../services/utils';

import {Logo, EmailInput, PasswordInput,  Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.css';

export const  LoginPage = ({ state }) => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' }};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const {
    login,
    loginRequest,
    loginFailed,
    authFailed,
  } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  const onSubmit =  useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getLogin({ 'email': email, 'password': password}));
    }, [email, password, authFailed]
  );

  if (!authFailed) {
    return (
      <Redirect
        to={ from }
      />
    );
  }


  return (
    <form onSubmit={onSubmit} className={styles['login-container']}>
      <Logo />
      <div className={styles['main-container']}>
        <div className={styles['first-container']}>
          <span className={styles['first-span']}>
            <span className="text text_type_main-medium">Вход</span>
          </span>
          <EmailInput 
            value={email}
            name={'E-mail'}
            onChange={e => setEmail(e.target.value)}
            size={'small'}
          />
          < PasswordInput
            name={'Пароль'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            size={'small'}
          />
          <Button>
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
    </form>
  )
}
