import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {itemsTypes} from '../../utils/dataTypes.js';
import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item.js';

const BurgerIngredientsListComponent = (props) => {
  const { items } = props;
  return (
    <div className={styles['burger-ingredients-list-component']}>
      {
        items.map((item, index)=>{
          return (
          <Tab value={item.name} key={item._id}>
            <BurgerIngredientsListComponentItem 
              key={item._id}
              item = {item}
            />
           </Tab>
          )
        })
      }
    </div>
  );
};

BurgerIngredientsListComponent.propTypes = itemsTypes;

export default BurgerIngredientsListComponent;