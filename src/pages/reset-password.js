import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import {Logo, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPassword } from '../services/actions/new-password.js';
import styles from './reset-password.module.css';

export const  ResetPasswordPage = () => {

  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');

  const {
    newPassword,
    newPasswordRequest,
    newPasswordFailed,
  } = useSelector(store => store.newPassword);

  const dispatch = useDispatch();

  const onSubmit =  () => {
    dispatch(getNewPassword({ 'password': password, 'token': token }));
  };

  if(newPassword.success) {
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
          <Input 
            type={'password'}
            placeholder={'Введите новый'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            icon={'ShowIcon'}
            size={'small'}
          />
          <Input 
            type={'text'}
            value={token}
            placeholder={'Введите код из письма'}
            onChange={e => setToken(e.target.value)}
            size={'small'}
          />
          <Button onClick={onSubmit}>
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
