import React from 'react';
import styles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  const [current, setCurrent] = React.useState('Конструктор');
  return (
    <header className={styles['header']}>
      <nav className={styles['nav-bar']}>
        <div href='#' className={styles['nav-bar-constructor']}>
          <BurgerIcon type={current === 'Конструктор' ? 'primary' : 'secondary'}/>
          <span className='text text_type_main-default'>Конструктор</span>
        </div>
        <div className={styles['nav-bar-orders']}>
          <ListIcon type={current === 'Лента заказа' ? 'primary' : 'secondary'}/>
          <span className='text text_type_main-default text_color_inactive'>Лента заказа</span>
        </div>
        <div className={styles['nav-bar-logo']}>
          <Logo />
        </div>
        <div className={styles['nav-bar-personal-area']}>
          <ProfileIcon type={current === 'Личный кабинет' ? 'primary' : 'secondary'}/>
          <span className='text text_type_main-default text_color_inactive'>Личный кабинет</span>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
