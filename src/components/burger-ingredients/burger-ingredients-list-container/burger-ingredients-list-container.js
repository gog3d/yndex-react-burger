import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-ingredients-list-container.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsListComponent from './burger-ingredients-list-component/burger-ingredients-list-component.js';


const BurgerIngredientsListContainer = (props) => {
  const { state } = props;
  const { obj } = state;
  const { data } = obj;
  
  const buns = [];
  const mains = [];
  const sauces = [];
  
  const ingredients = {
    bun: (item) => buns.push(item),
    main: (item) => mains.push(item),
    sauce: (item) => sauces.push(item),
  };
  for(const dt of data) {
    ingredients[dt.type](dt);
  }
    return (
    <div className={styles["burger-ingredients-list-container"]}>

        <span className={styles["burger-ingredients-list-container-span"]}>Булки</span>
        <BurgerIngredientsListComponent
          items={buns}
         />

        <span className={styles["burger-ingredients-list-container-span"]}>Соусы</span>
        <BurgerIngredientsListComponent
          items={sauces}
         />

        <span className={styles["burger-ingredients-list-container-span"]}>Компоненты</span>
        <BurgerIngredientsListComponent
          items={mains}
         />

    </div>
  );
};

export default BurgerIngredientsListContainer;