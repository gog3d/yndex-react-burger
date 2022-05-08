import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import {Logo, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPassword } from '../services/actions/new-password.js';
import styles from './reset-password.module.css';

export const  ResetPasswordPage = () => {

  const [tokenValue, setTokenValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const {
    newPassword,
    newPasswordRequest,
    newPasswordFailed,
  } = useSelector(store => store.newPassword);

  const dispatch = useDispatch();

  const onClickButton =  (password, token) => {
    dispatch(getNewPassword({ 'password': password, 'token': token }));
//    console.log(newPassword);
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
    <div className={styles['reset-container']}>
      <Logo />
      <div className={styles['main-container']}>
        <div className={styles['first-container']}>
          <span className={styles['first-span']}>
            <span className="text text_type_main-medium">Восстановление пароля</span>
          </span>
          <Input 
            type={'password'}
            placeholder={'Введите новый'}
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            icon={'ShowIcon'}
            size={'small'}
          />
          <Input 
            type={'text'}
            value={tokenValue}
            placeholder={'Введите код из письма'}
            onChange={e => setTokenValue(e.target.value)}
            size={'small'}
          />
          <Button onClick={()=>onClickButton(passwordValue, tokenValue)}>
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
    </div>
  )
}
