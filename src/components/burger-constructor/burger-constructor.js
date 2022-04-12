import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import BurgerConstructorListContainer from '../burger-constructor-list-container/burger-constructor-list-container.js';
import BurgerConstructorButtonContainer from '../burger-constructor-button-container/burger-constructor-button-container.js';

import { ConstructorContext } from '../../services/constructor-context.js';

const BurgerConstructor = (props) => {
  return (
    <div className={styles["burger-constructor"]} >
      <BurgerConstructorListContainer />
      <BurgerConstructorButtonContainer />
    </div>
  );
}

export default BurgerConstructor;
