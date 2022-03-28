import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import BurgerConstructorListContainer from '../burger-constructor-list-container/burger-constructor-list-container.js';
import BurgerConstructorButtonContainer from '../burger-constructor-button-container/burger-constructor-button-container.js';

const BurgerConstructor = (props) => {
  const { state } = props;

  const [count, setCount] = useState(0);
  const changeCountUp = (num) => setCount(prev => prev + num);
  const changeCountDown = (num) => setCount(prev => prev - num);
  return (
    <div className={styles["burger-constructor"]} >
      <BurgerConstructorListContainer
         state ={state}

         changeCountUp={changeCountUp}
         changeCountDown={changeCountDown}
      />
      <BurgerConstructorButtonContainer
        count={count}

        modalRef={props.modalRef}
      />
    </div>
  );
}
BurgerConstructor.propTypes = {
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

export default BurgerConstructor;
