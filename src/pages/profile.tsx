import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './profile.module.css';
import { getLogout, getUser, getRefreshUser } from '../redux/actions/auth';
import { PasswordInput, EmailInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const  ProfilePage: React.FC = () => {
  const history = useHistory(); 
  const dispatch = useAppDispatch();
  const {
    user, 
    userRequest,
    userFailed,
  } = useAppSelector((store) => store.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState('Профиль');

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
/*
  useEffect(()=>{
    setName(user.user ? user.user.name : '');
    setEmail(user.user ? user.user.email : '');
  }, [user]);
*/

useEffect(()=>{
  console.log(user);
  setName(user === null ? '' : user.user.name);
  setEmail(user === null ? '' : user.user.email);
}, [user]);

  const onSave =  useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(getRefreshUser({ 
        'email': email,
        'password': password }));
    }, [email, password]
  );

  const onCancel = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
//      setName(user.user ? user.user.name : '');
//      setEmail(user.user ? user.user.email : '');
      setName(user === null ? '' : user.user.name);
      setEmail(user === null ? '' : user.user.email);
      setPassword('');
    }, [email, password, name]
  );

  const profileOnClick = useCallback(
    () => {
      setCurrent('Профиль');
      history.replace({ pathname: '/profile' });
    },
    [history]
  );

  const orderOnClick = useCallback(
    () => {
      setCurrent('История заказов');
      history.replace({ pathname: '/profile/orders' });
    },
    [history]
  );

  const outOnClick = useCallback(
    () => {
      setCurrent('История заказов');
      dispatch(getLogout());
      history.replace({ pathname: '/login' });
    },
    [history]
  );


const userStatus = useMemo(
  () => {
    return userFailed ? (
      <p className={styles.text}>Произошла ошибка при получении данных</p>
    ) : userRequest ? (
      <p className={styles.text}>Получение данных пользователя...</p>
    ) : user ? (
     ''
    ) : (
      <p className={styles.text}>Произошла ошибка при получении данных</p>
    );
  },
  [userRequest, user, userFailed]
  );

  return (

    <div className={styles['profile-container']}>
      {userStatus}
      <div className={styles['top-container']}>
        <div className={styles['input-container']}>
          <span 
            className={current === 'Профиль' ? 
              'text text_type_main-default' 
               : 
              'text text_type_main-default text_color_inactive'
              } 
              onClick={profileOnClick}
           >
              Профиль
           </span>
          <Input 
            type={'text'}
            value={name}
            placeholder={'Имя'}
            onChange={e => setName(e.target.value)}
            icon={'EditIcon'}
            size={'small'}
          />
        </div>
        <div className={styles['input-container']}>
          <span 
            className={current === 'История заказов' ? 
              'text text_type_main-default' 
               : 
              'text text_type_main-default text_color_inactive'
              } 
              onClick={orderOnClick}
           >
              История заказов
           </span>
          <EmailInput
            value={email}
            name={'Логин'}
            onChange={e => setEmail(e.target.value)}
            size={'small'}
          />
        </div>
        <div className={styles['input-container']}>
          <span 
            className={current === 'Выход' ? 
              'text text_type_main-default' 
               : 
              'text text_type_main-default text_color_inactive'
              } 
              onClick={outOnClick}
           >
              Выход
           </span>
          <PasswordInput 
            value={password}
            name={'Пароль'}
            onChange={e => setPassword(e.target.value)}
            size={'small'}
          />
        </div>
        <div className={styles['input-container']}>
        <Button onClick={onSave}>
            Сохранить
          </Button>
          <Button onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
      <div className={styles['bottom-container']}>
        <div className={styles['input-container']}>
          <span className={'text text_type_main-small text_color_inactive'}>
            В этом разделе вы можете
          </span>
        </div>
        <div className={styles['input-container']}>
          <span className={'text text_type_main-small text_color_inactive'}>
            изменить свои персональные данные
          </span>
        </div>
      </div>
    </div>
  )
}
