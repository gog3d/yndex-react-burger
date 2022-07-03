import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './register.module.css';

import { getRegister } from '../redux/actions/auth';
//import { setCookie } from '../redux/utils.js';

import {Logo, PasswordInput, EmailInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';
import { TIngredient}  from '../redux/action-types/data';
import { Location } from 'history';
interface LocationState {
  from: {
    pathname: string;
  };
}

export const  RegisterPage: React.FC<{ state: LocationState }> = ({ state }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    authFailed,
    register,
  } = useSelector((store: RootState) => store.auth);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(getRegister({ 'email': email, 'password': password, 'name': name }));
    }, [email, password, name]
  )

  if (!authFailed) {
    return (
      <Redirect
        to={ state?.from || '/' }
      />
    );
  }

  if(register.success) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
     )
  }

  return (
    <form onSubmit={onSubmit} className={styles['register-container']}>
      <Logo />
      <div className={styles['register-main-container']}>
        <div className={styles['register-first-container']}>
          <span className={styles['register-first-span']}>
            <span className="text text_type_main-medium">Регистрация</span>
          </span>
            <Input 
              type={'text'}
              value={name}
              placeholder={'Имя'}
              onChange={e => setName(e.target.value)}
              size={'small'}
            />
          <EmailInput
            value={email}
            name={'E-mail'}
            onChange={e => setEmail(e.target.value)}
            size={'small'}
          />
          <PasswordInput 
            name={'Пароль'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            size={'small'}
          />
          <Button>
            Зарегистрироваться
          </Button>
        </div>
        <div className={styles['register-second-container']}>
          <span className={styles['register-first-span']}>
            <span className="text text_type_main-small">Уже зарегистрированы?</span>
          </span>
          <Link to='/login'>
            Войти
          </Link>
        </div>
      </div>
    </form>
  )
};