import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Logo, EmailInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css';
import { getForgotPassword } from '../redux/actions/forgot-password';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

export const  ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const {
    forgotPassword,
    forgotPasswordRequest,
    forgotPasswordFailed,
  } = useAppSelector((store)=> store.forgotPassword);

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(getForgotPassword({ 'email': email }));
    }, [email]
  ) 

  if(forgotPassword && forgotPassword.success) {
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
