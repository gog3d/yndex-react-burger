import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation, useRouteMatch} from 'react-router-dom';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  const [current, setCurrent] = useState('');
  const { search, pathname } = useLocation();
  const history = useHistory();


  useEffect(
    () => {
      if(pathname === '/') {
        setCurrent('Конструктор');
      } else if (pathname === '/profile') {
        setCurrent('Личный кабинет');
      } else if (pathname === '/profile/orders') {
        setCurrent('Личный кабинет');
      } else if(pathname === '/feed') {
        setCurrent('Лента заказов')
      } else {
        setCurrent('');
      }
    },
    [pathname]
  );

  const personalOnClick = useCallback(
    () => {
      history.replace({ pathname: '/profile' });
    },
    [history]
  );
  const constructorOnClick = useCallback(
    () => {
      history.replace({ pathname: '/' });
    },
    [history]
  );
  const feedOnClick = useCallback(
    () => {
      history.replace({ pathname: '/feed' });
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
        <div className={styles['nav-bar-orders']} onClick={feedOnClick}>
          <ListIcon type={current === 'Лента заказов' ? 'primary' : 'secondary'}/>
          <span className= {current === 'Лента заказов' ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Лента заказов</span>
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
