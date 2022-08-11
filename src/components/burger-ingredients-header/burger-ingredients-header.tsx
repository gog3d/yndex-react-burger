import React, { useState, useEffect, useCallback } from 'react';
import styles from './burger-ingredients-header.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../../redux/hooks';

const BurgerIngredientsHeaderContainer: React.FC = () => {

  const { bunsScroll, saucesScroll, mainsScroll } = useAppSelector((store) => store.ingredients);

  const onTabClick = useCallback(() => {}, []);
 
  return (
    <div className={styles['burger-ingredients-header']}>
      <Tab value="Булки" active={bunsScroll} onClick= {onTabClick}> 
        <span className="text text_type_main-default">Булки</span>
      </Tab>
      <Tab value="Соусы" active={saucesScroll} onClick= {onTabClick}> 
        <span className="text text_type_main-default">Соусы</span>
      </Tab>
      <Tab value="Начинки" active={mainsScroll} onClick= {onTabClick}>
        <span className="text text_type_main-default">Начинки</span>
      </Tab>
    </div>
  );
};

export default BurgerIngredientsHeaderContainer;