import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item.js';

const BurgerIngredientsListComponent = (props) => {
  const { items } = props;
  return (
    <div className={styles['burger-ingredients-list-component']}>
      {
        items.map((item, index)=>{
          return (
          <Tab value={item.name} key={item.name}>
            <BurgerIngredientsListComponentItem 
              key={index}
              item = {item}
            />
           </Tab>
          )
        })
      }
    </div>
  );
};

BurgerIngredientsListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
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
  })),
};

export default BurgerIngredientsListComponent;