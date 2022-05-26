import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from 'react-redux';

import styles from './constructor-page.module.css';
import AppHeader from '../components/app-header/app-header.js';
import BurgerConstructor from '../components/burger-constructor/burger-constructor.js';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients.js';
import { getIngredients, REFRESH_ORDERDETAILS_ITEMS, } from '../services/actions/ingredients.js';

import { Redirect } from 'react-router-dom';
import { getLogout, getUser, getRefreshUser, getToken } from '../services/actions/auth.js';
import { getCookie, deleteCookie, getRefreshToken } from '../services/utils.js';

export const ConstructorPage = () => {
  const {
    constructorIngredients,
    burgerIngredients,
    burgerIngredientsRequest,
    burgerIngredientsFailed
    } = useSelector(store => store.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    const items = [...constructorIngredients.ingredients, constructorIngredients.bun];
    dispatch({ type: REFRESH_ORDERDETAILS_ITEMS, orderDetailsItems: items });
  }, [constructorIngredients.bun, constructorIngredients.ingredients]);

  const burgerIngredientsStatus = useMemo(
    () => {
      return burgerIngredientsFailed ? (
        <p className={styles.text}>Произошла ошибка при получении данных</p>
      ) : burgerIngredientsRequest ? (
        <p className={styles.text}>Загрузка...</p>
      ) : burgerIngredients ? (
       ''
      ) : (
        <p className={styles.text}>Произошла ошибка при получении данных</p>
      );
    },
    [burgerIngredientsRequest, burgerIngredients, burgerIngredientsFailed]
    );

   return (
   <>
    <div className={styles["page__content"]}>
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
  </>
  );
};
