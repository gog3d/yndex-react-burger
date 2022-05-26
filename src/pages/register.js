import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRegister } from '../services/actions/auth.js';
import { setCookie } from '../services/utils.js';

import {Logo, PasswordInput, EmailInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register.module.css';

export const  RegisterPage = ({ state }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {
    authFailed,
    register,
    registerRequest,
    registerFailed,
  } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
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