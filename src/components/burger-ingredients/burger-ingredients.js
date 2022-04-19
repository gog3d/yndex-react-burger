import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list.js';
import BurgerIngredientsHeader from '../burger-ingredients-header/burger-ingredients-header.js';

const BurgerIngredients = () => {
  
  return (
    <div className={styles['burger-ingredients']}>
       <BurgerIngredientsHeader />
       <BurgerIngredientsList />
    </div>
  );
};

export default BurgerIngredients;