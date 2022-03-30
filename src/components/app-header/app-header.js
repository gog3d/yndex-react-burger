import React, {useState, useRef, useEffect} from 'react';
import styles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';
const AppHeader = () => {
  const [current, setCurrent] = React.useState('Конструктор');
  return (
    <header className={styles["header"]}>
      <nav className={styles["app-header"]}>
        <Tab value="Конструктор" active={current === "Конструктор"} onClick={setCurrent}>
          <BurgerIcon type={current === "Конструктор" ? "primary" : "secondary"}/>
          <span className="text text_type_main-default">Конструктор</span>
        </Tab>
        <Tab value="Лента заказа" active={current === 'Лента заказа'} onClick={setCurrent}>
          <ListIcon type={current === "Лента заказа" ? "primary" : "secondary"}/>
          <span className="text text_type_main-default">Лента заказа</span>
        </Tab>
        <Logo />
        <Tab value="Личный кабинет" active={current === "Личный кабинет"} onClick={setCurrent}>
          <ProfileIcon type={current === "Личный кабинет" ? "primary" : "secondary"}/>
          <span className="text text_type_main-default">Личный кабинет</span>
        </Tab>
      </nav>
    </header>
  );
}

export default AppHeader;
