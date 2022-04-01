import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {stateTypes} from '../../utils/dataTypes.js';
import BurgerIngredientsListComponent from '../burger-ingredients-list-component/burger-ingredients-list-component.js';

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
    <div className={styles["burger-ingredients-list"]}>

        <span className={styles["burger-ingredients-list-span"]}>
           <span className="text text_type_main-medium">Булки</span>
        </span>
        <BurgerIngredientsListComponent
          items={buns}
         />

        <span className={styles["burger-ingredients-list-span"]}>
          <span className="text text_type_main-medium">Соусы</span>
        </span>
        <BurgerIngredientsListComponent
          items={sauces}
         />

        <span className={styles["burger-ingredients-list-span"]}>
          <span className="text text_type_main-medium">Компоненты</span>
        </span>
        <BurgerIngredientsListComponent
          items={mains}
         />

    </div>
  );
};

BurgerIngredientsListContainer.propTypes = stateTypes;

export default BurgerIngredientsListContainer;