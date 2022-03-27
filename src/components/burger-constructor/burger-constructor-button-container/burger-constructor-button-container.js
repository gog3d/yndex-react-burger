import React, {useState, useRef, useEffect} from 'react';

import styles from './burger-constructor-button-container.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorButtonContainer = (props) => {
  const count = props.count;
  return (
    <div  className={styles["burger-constructor-button-container"]} >
      <span 
        className={styles['burger-constructor-button-container-span']}
        ref={props.spanCountElement}
        >{count}</span>
      <CurrencyIcon type={'primary'} />
      <Button className={styles['burger-constructor-button']}> Оформить заказ</Button>
    </div>
  );
}

export default BurgerConstructorButtonContainer;