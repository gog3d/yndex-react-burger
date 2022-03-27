import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-ingredients.module.css';
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsListContainer from './burger-ingredients-list-container/burger-ingredients-list-container.js';
import BurgerIngredientsHeaderContainer from './burger-ingredients-header-container/burger-ingredients-header-container.js';

const BurgerIngredients = (props) => {
  const { state } = props;
  return (
    <div className={styles['burger-ingredients']}>
       <BurgerIngredientsHeaderContainer />
       <BurgerIngredientsListContainer state={state} />
    </div>
  );
};

export default BurgerIngredients;