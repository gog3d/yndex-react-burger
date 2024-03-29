import React, { useEffect, useMemo } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from './constructor-page.module.css';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import {
  refreshOrderdetailsItems,
} from '../redux/actions/ingredients';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const ConstructorPage: React.FC = () => {
  const {
    constructorIngredients,
    burgerIngredients,
    burgerIngredientsRequest,
    burgerIngredientsFailed
    } = useAppSelector((store) => store.ingredients);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const items = [...constructorIngredients.ingredients, constructorIngredients.bun];
    dispatch(refreshOrderdetailsItems(items));
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
