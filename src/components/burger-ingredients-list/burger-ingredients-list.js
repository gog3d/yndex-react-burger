import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

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
          modalRef={props.modalRef}
         />

        <span className={styles["burger-ingredients-list-span"]}>
          <span className="text text_type_main-medium">Соусы</span>
        </span>
        <BurgerIngredientsListComponent
          items={sauces}
          modalRef={props.modalRef}
         />

        <span className={styles["burger-ingredients-list-span"]}>
          <span className="text text_type_main-medium">Компоненты</span>
        </span>
        <BurgerIngredientsListComponent
          items={mains}
          modalRef={props.modalRef}
         />

    </div>
  );
};

BurgerIngredientsListContainer.propTypes = {
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

export default BurgerIngredientsListContainer;