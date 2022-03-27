import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-ingredients-list-component.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsListComponentItem from './burger-ingredients-list-component-item/burger-ingredients-list-component-item.js';


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

export default BurgerIngredientsListComponent;