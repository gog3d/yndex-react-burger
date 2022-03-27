import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorListContainer from './burger-constructor-list-container/burger-constructor-list-container.js';
import BurgerConstructorButtonContainer from './burger-constructor-button-container/burger-constructor-button-container.js';
const BurgerConstructor = (props) => {
  const { state } = props;
  const countSpan = useRef(null);
  const [count, setCount] = useState(0);
  const changeCountUp = (num) => setCount(prev => prev + num);
  const changeCountDown = (num) => setCount(prev => prev - num);
  return (
    <div className={styles["burger-constructor"]}>
      <BurgerConstructorListContainer
         state ={state}
         countSpanElement={countSpan}
         changeCountUp={changeCountUp}
         changeCountDown={changeCountDown}
      />
      <BurgerConstructorButtonContainer
        count={count}
        spanCountElement={countSpan}
      />
    </div>
  );
}

export default BurgerConstructor;
