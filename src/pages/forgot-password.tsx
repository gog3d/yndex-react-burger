import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logo, EmailInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css';
import { getForgotPassword } from '../redux/actions/forgot-password';

import { RootState }  from '../redux/store';

import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const  ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const {
    forgotPassword,
    forgotPasswordRequest,
    forgotPasswordFailed,
  } = useAppSelector((store: RootState)=> store.forgotPassword);

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(getForgotPassword({ 'email': email }));
    }, [email]
  ) 

  if(forgotPassword.success) {
    //console.log(forgotPassword);
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
