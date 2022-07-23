import React, { useState, useCallback } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.css';

import { getLogin } from '../redux/actions/auth';
//import { setCookie } from '../redux/utils.js';
import { Logo, EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { RootState }  from '../redux/store';
import { TIngredient}  from '../redux/action-types/data';
import { Location } from 'history';

import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface LocationState {
  from: {
    pathname: string;
  };
}

export const  LoginPage = () => {
  const location = useLocation<Location & LocationState>();
  const { from } = location.state || { from: { pathname: '/' }};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const {
    authFailed,
  } = useAppSelector((store: RootState) => store.auth);

  const dispatch = useAppDispatch();

  const onSubmit =  useCallback(
    (e: React.FormEvent): void => {
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
