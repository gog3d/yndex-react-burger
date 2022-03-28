import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-ingredients-header.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredientsHeaderContainer = () => {
  const [current, setCurrent] = React.useState('Булки');
  return (
    <div className={styles['burger-ingredients-header']}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        <span className="text text_type_main-default">Булки</span>
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        <span className="text text_type_main-default">Соусы</span>
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        <span className="text text_type_main-default">Начинки</span>
      </Tab>
    </div>
  );
};

export default BurgerIngredientsHeaderContainer;