import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list.js';
import BurgerIngredientsHeader from '../burger-ingredients-header/burger-ingredients-header.js';

const BurgerIngredients = (props) => {
  const { state } = props;
  return (
    <div className={styles['burger-ingredients']}>
       <BurgerIngredientsHeader />
       <BurgerIngredientsList state={state}/>
    </div>
  );
};

BurgerIngredients.propTypes = {
  state: PropTypes.shape({
       "_id": PropTypes.string,
       "name": PropTypes.string,
       "type": PropTypes.string,
       "proteins": PropTypes.number,
       "fat": PropTypes.number,
       "carbohydrates": PropTypes.number,
       "calories": PropTypes.number,
       "price": PropTypes.number,
       "image": PropTypes.string,
       "image_mobile": PropTypes.string,
       "image_large": PropTypes.string,
       "__v": PropTypes.number
  })
};

export default BurgerIngredients;