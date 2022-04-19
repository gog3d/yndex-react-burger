import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';

import { baseURL }  from '../../utils/config.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients.js';

const App = () => {

  const { 
    burgerIngredients, 
    burgerIngredientsRequest, 
    burgerIngredientsFailed 
    } = useSelector(store => store.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  
  const burgerIngredientsStatus = useMemo(
    () => {
      return burgerIngredientsFailed ? (
        <p className={styles.text}>Произошла ошибка при получении данных</p>
      ) : burgerIngredientsRequest ? (
        <p className={styles.text}>Загрузка...</p>
      ) : burgerIngredients ? (
       ''
       // <>
       //   <BurgerIngredients state={ state }/>
       //   <BurgerConstructor state={ state }/>
       // </>
      ) : (
        <p className={styles.text}>Произошла ошибка при получении данных</p>
      );
    },
    [burgerIngredientsRequest, burgerIngredients, burgerIngredientsFailed]
  );
  
   return (
    <div className={styles["page__content"]}>
      <AppHeader />
      <main className={styles["main"]}>
        <div className={styles["main-span"]}>
          <span className={styles["first-span"]}>
            <span className="text text_type_main-large">Собери бургер</span>
          </span>
          <span className={styles["second-span"]}></span>
        </div>
        {burgerIngredientsStatus}
        <DndProvider backend={HTML5Backend}>
          <div className={styles["main-constructor-container"]}>
            {
              !burgerIngredientsRequest && 
              <BurgerIngredients />
            }
            {
              !burgerIngredientsRequest &&
              <BurgerConstructor />
            }
          </div>
        </DndProvider>
      </main>
    </div>
  );
}


export default App;
