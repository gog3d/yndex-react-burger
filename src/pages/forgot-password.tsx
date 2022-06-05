import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Logo, EmailInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { getForgotPassword } from '../services/actions/forgot-password';
import styles from './forgot-password.module.css';

import { IngredientType, StateType } from '../services/types/data';

export const  ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>('');

  const {
    forgotPassword,
    forgotPasswordRequest,
    forgotPasswordFailed,
  } = useSelector((store: StateType) => store.forgotPassword);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault();
      dispatch(getForgotPassword({ 'email': email }));
    }, [email]
  ) 

  if(forgotPassword.success) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
     )
   }

  return (
    <form onSubmit={onSubmit} className={styles['forgot-container']}>
      <Logo />
      <div className={styles['main-container']}>
        <div className={styles['first-container']}>
          <span className={styles['first-span']}>
            <span className="text text_type_main-medium">Восстановление пароля</span>
          </span>
          <EmailInput 
            value={email}
            name={'E-mail'}
            onChange={e => setEmail(e.target.value)}
            size={'small'}
          />
          <Button>
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
    </form>
  )
}
