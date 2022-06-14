import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation, useRouteMatch} from 'react-router-dom';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  const [current, setCurrent] = useState('');
  const { search, pathname } = useLocation<any>();
  const history = useHistory();


  useEffect(
    () => {
      if(pathname === '/') {
        setCurrent('Конструктор');
      } else if (pathname === '/profile') {
        setCurrent('Личный кабинет');
      } else {
        setCurrent('');
      }
    },
    [pathname]
  );

  const personalOnClick = useCallback(
    (): void => {
      history.replace({ pathname: '/profile' });
    },
    [history]
  );
  const constructorOnClick = useCallback(
    (): void => {
      history.replace({ pathname: '/' });
    },
    [history]
  );

  return (
    <header className={styles['header']}>
      <nav className={styles['nav-bar']}>
        <div href='#' className={styles['nav-bar-constructor']} onClick={constructorOnClick}>
          <BurgerIcon type={
            current === 'Конструктор' 
            ? 
            'primary' 
            : 
            'secondary'
            }/>
          <span className = {current === 'Конструктор' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'} >Конструктор</span>
        </div>
        <div className={styles['nav-bar-orders']}>
          <ListIcon type={current === 'Лента заказа' ? 'primary' : 'secondary'}/>
          <span className= {current === 'Лента заказа' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Лента заказа</span>
        </div>
        <div className={styles['nav-bar-logo']}>
          <Logo />
        </div>
        <div className={styles['nav-bar-personal-area']} onClick={personalOnClick}>
          <ProfileIcon type={current === 'Личный кабинет' ? 'primary' : 'secondary'} />
          <span className= {current === 'Личный кабинет' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'} >Личный кабинет</span>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
