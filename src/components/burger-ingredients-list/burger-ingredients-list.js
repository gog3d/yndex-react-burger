import React, {useState, useRef, useEffect, useMemo} from 'react';
import styles from './burger-ingredients-list.module.css';
import BurgerIngredientsListComponent from '../burger-ingredients-list-component/burger-ingredients-list-component.js';
import { useDispatch, useSelector } from 'react-redux';

const BurgerIngredientsListContainer = () => {
  const data = useSelector(store => store.ingredients.burgerIngredients);

  const buns = useMemo(()=> data.filter((element)=> element.type === 'bun'), [data]);
  const mains = useMemo(()=> data.filter((element)=> element.type === 'main'), [data]);
  const sauces = useMemo(()=> data.filter((element)=> element.type === 'sauce'), [data]);

    return (
    <div className={styles["burger-ingredients-list"]}>
        <div className={styles["burger-ingredients-list-type"]}>
           <span className="text text_type_main-medium">Булки</span>
        </div>
        <BurgerIngredientsListComponent
          items={buns}
         />

        <div className={styles["burger-ingredients-list-type"]}>
          <span className="text text_type_main-medium">Соусы</span>
        </div>
        <BurgerIngredientsListComponent
          items={sauces}
         />

        <div className={styles["burger-ingredients-list-type"]}>
          <span className="text text_type_main-medium">Компоненты</span>
        </div>
        <BurgerIngredientsListComponent
          items={mains}
         />
    </div>
  );
};

export default BurgerIngredientsListContainer;