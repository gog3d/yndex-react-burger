import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRegister } from '../services/actions/auth.js';
import { setCookie } from '../services/utils.js';

import {Logo, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register.module.css';

export const  RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {
    register,
    registerRequest,
    registerFailed,
  } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  const onClickButton =  (email, password, name) => {
    dispatch(getRegister({ 'email': email, 'password': password, 'name': name }));
    console.log(register);
  };

  if(register.success) {
    setCookie('token', register.refreshToken);
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
     )
   }

  return (
    <div className={styles['register-container']}>
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
          <Input 
            type={'email'}
            value={email}
            placeholder={'E-mail'}
            onChange={e => setEmail(e.target.value)}
            size={'small'}
          />
          <Input 
            type={'password'}
            placeholder={'Пароль'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            icon={'ShowIcon'}
            size={'small'}
          />
          <Button onClick={()=>onClickButton(email, password, name)}>
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
    </div>
  )
};