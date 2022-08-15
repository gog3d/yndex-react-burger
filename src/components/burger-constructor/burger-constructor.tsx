import React from 'react';
import styles from './burger-constructor.module.css';
import BurgerConstructorListContainer from '../burger-constructor-list-container/burger-constructor-list-container';
import BurgerConstructorButtonContainer from '../burger-constructor-button-container/burger-constructor-button-container';

const BurgerConstructor: React.FC = () => {
  return (
    <div className={styles["burger-constructor"]} >
      <BurgerConstructorListContainer />
      <BurgerConstructorButtonContainer />
    </div>
  );
}

export default BurgerConstructor;
