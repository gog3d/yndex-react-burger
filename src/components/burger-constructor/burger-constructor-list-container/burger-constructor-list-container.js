import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-constructor-list-container.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorListComponent from './burger-constructor-list-component/burger-constructor-list-component.js';

const BurgerConstructorListContainer = (props) => {
  const { state } = props;
  const { obj } = state;
  const { data } = obj;
  return (
    <div className={styles["burger-constructor-list-container"]}>
      {
        data.map((item, index)=>{
          const endElement = data.length - 1;
          return (
          <Tab value={item.name} key={item.name}>
              <BurgerConstructorListComponent
                countSpanElement={props.countSpanElement}
                key={index}
                changeCountUp={props.changeCountUp}
                changeCountDown={props.changeCountDown}
                price={item.price}
                name={item.name}
                img={item.image}
                constructorElementType={
                  index === 0 ? 'top' : index === endElement ? 'bottom' : ''
                }
              />
           </Tab>
          )
        })
      }
    </div>
  );
}
export default BurgerConstructorListContainer;