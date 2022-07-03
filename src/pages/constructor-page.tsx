import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from 'react-redux';
import styles from './constructor-page.module.css';

import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';

import { REFRESH_ORDERDETAILS_ITEMS, } from '../redux/actions/ingredients';

import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';
import { TIngredient}  from '../redux/action-types/data';
import { Location } from 'history';


export const ConstructorPage: React.FC = () => {
  const {
    constructorIngredients,
    burgerIngredients,
    burgerIngredientsRequest,
    burgerIngredientsFailed
    } = useSelector((store: RootState) => store.ingredients);

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
