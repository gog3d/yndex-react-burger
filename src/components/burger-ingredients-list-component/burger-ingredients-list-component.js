import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component.module.css';
import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item.js';

const BurgerIngredientsListComponent = (props) => {
  const { items } = props;
  return (
    <div className={styles['burger-ingredients-list-component']}>
      {
        items.map((item, index)=>{
          return (
            <div className={styles['burger-ingredients-list-component-items']} key={item._id}>
              <BurgerIngredientsListComponentItem 
                key={item._id}
                item = {item}
              />
            </div>
          )
        })
      }
    </div>
  );
};

BurgerIngredientsListComponent.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BurgerIngredientsListComponent;