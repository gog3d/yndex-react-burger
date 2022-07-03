import React, { useState, useEffect } from 'react';
import styles from './burger-ingredients-header.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { RootState }  from '../../redux/action-types';

const BurgerIngredientsHeaderContainer: React.FC = () => {

  const { bunsScroll, saucesScroll, mainsScroll } = useSelector((store: RootState) => store.ingredients);
 
  return (
    <div className={styles['burger-ingredients-header']}>
      <Tab value="Булки" active={bunsScroll}>
        <span className="text text_type_main-default">Булки</span>
      </Tab>
      <Tab value="Соусы" active={saucesScroll}>
        <span className="text text_type_main-default">Соусы</span>
      </Tab>
      <Tab value="Начинки" active={mainsScroll}>
        <span className="text text_type_main-default">Начинки</span>
      </Tab>
    </div>
  );
};

export default BurgerIngredientsHeaderContainer;