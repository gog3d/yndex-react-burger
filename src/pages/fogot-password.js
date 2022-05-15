import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Logo, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { getRestorePassword } from '../services/actions/restore-password.js';
import styles from './fogot-password.module.css';

export const  ForgotPasswordPage = () => {
  const [emailInputValue, setEmailInputValue] = useState('');

  const {
    restorePassword,
    restorePasswordRequest,
    restorePasswordFailed,
  } = useSelector(store => store.restorePassword);

  const dispatch = useDispatch();

  const onClickButton =  (email) => {
    dispatch(getRestorePassword({ 'email': email }));
    console.log(email, restorePassword);
  };

  if(restorePassword.success) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
     )
   }

  return (
    <div className={styles['fogot-container']}>
      <Logo />
      <div className={styles['main-container']}>
        <div className={styles['first-container']}>
          <span className={styles['first-span']}>
            <span className="text text_type_main-medium">Восстановление пароля</span>
          </span>
          <Input 
            type={'email'}
            value={emailInputValue}
            placeholder={'E-mail'}
            onChange={e => setEmailInputValue(e.target.value)}
            size={'small'}
          />
          <Button 
            onClick={() => onClickButton(emailInputValue)}
          >
            Восстановить
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