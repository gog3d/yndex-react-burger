import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list.module.css';
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
        <div className={styles["burger-ingredients-list-type"]}>
           <span className="text text_type_main-medium">Булки</span>
        </div>
        <BurgerIngredientsListComponent
          items={buns}
         />

        <div className={styles["burger-ingredients-list-type"]}>
          <span className="text text_type_main-medium">Соусы</span>
        </div>
        <BurgerIngredientsListComponent
          items={sauces}
         />

        <div className={styles["burger-ingredients-list-type"]}>
          <span className="text text_type_main-medium">Компоненты</span>
        </div>
        <BurgerIngredientsListComponent
          items={mains}
         />

    </div>
  );
};

BurgerIngredientsListContainer.propTypes = stateTypes;

export default BurgerIngredientsListContainer;