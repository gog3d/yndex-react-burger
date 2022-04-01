import React, { useState, useEffect, useRef } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
const URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    obj: {
      data: [],
      success: false,
    },
  });

  useEffect(()=>{
    const getData = async () => {
      try {
        setState({ ...state, hasError: false, isLoading: true });
        const res = await fetch(URL);
        const obj = await res.json();
        setState({ ...state, obj, isLoading: false });
      } catch (error) {
        setState({ ...state, hasError: true, isLoading: false });
      }
    };
    getData();
  }, []);

  const { obj, isLoading, hasError } = state;

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
        <div className={styles["main-constructor-container"]}>
          {isLoading && 'Загрузка...'}
          {hasError && 'Произошла ошибка'}
          {
            !isLoading &&
            !hasError &&
            obj.data.length &&
            <BurgerIngredients state={ state }/>
          }
          {isLoading && 'Загрузка...'}
          {hasError && 'Произошла ошибка'}
          {
            !isLoading &&
            !hasError &&
            obj.data.length &&
            <BurgerConstructor state={ state }/>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
