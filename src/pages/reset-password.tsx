import React, { useState, useCallback } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import styles from './reset-password.module.css';

import {Logo, PasswordInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { getResetPassword } from '../redux/actions/reset-password';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { TLocationState } from '../types/data';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

export const ResetPasswordPage: React.FC = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation<TLocationState>()

  const {
    resetPassword,
  } = useAppSelector((store) => store.resetPassword);

  const {
    forgotPassword,
  } = useAppSelector((store) => store.forgotPassword);

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(getResetPassword({ 'password': password, 'token': token }));
    }, [password, token]
  )

    if(forgotPassword !== null && forgotPassword.success) {
      if(resetPassword !== null && resetPassword.success) {
        return (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    } else {
     return (
       <Redirect
        to={ location?.state?.from || {pathname: '/'} }
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
