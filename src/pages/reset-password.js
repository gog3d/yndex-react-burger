import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import {Logo, PasswordInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getResetPassword } from '../services/actions/reset-password.js';
import styles from './reset-password.module.css';

export const  ResetPasswordPage = () => {

  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');

  const {
    resetPassword,
    resetPasswordRequest,
    resetPasswordFailed,
  } = useSelector(store => store.resetPassword);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
//      console.dir({ password, token });
      dispatch(getResetPassword({ 'password': password, 'token': token }));
    }, [password, token]
  ) 

useEffect(()=>{
  console.dir(
    {
      resetPassword,
      resetPasswordRequest,
      resetPasswordFailed,
    });
}, [ resetPassword, resetPasswordRequest, resetPasswordFailed,]);

  if(resetPassword.success) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
     )
   }

  return (
    <form onSubmit={onSubmit} className={styles['reset-container']}>
      <Logo />
      <div className={styles['main-container']}>
        <div className={styles['first-container']}>
          <span className={styles['first-span']}>
            <span className="text text_type_main-medium">Восстановление пароля</span>
          </span>
          <PasswordInput 
            name={'Введите новый'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            size={'small'}
          />
          <Input 
            type={'text'}
            value={token}
            placeholder={'Введите код из письма'}
            onChange={e => setToken(e.target.value)}
            size={'small'}
          />
          <Button >
            Сохранить
          </Button>
        </div>
        <div className={styles['bottom-container']}>
          <div className={styles['second-container']}>
            <span className={styles['first-span']}>
              <span className="text text_type_main-small">
                Вспомнили пароль?
              </span>
            </span>
            <Link to='/login'>
              Войти
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}
