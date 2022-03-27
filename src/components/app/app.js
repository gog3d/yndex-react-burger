import React, { useState, useEffect } from 'react';
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
    <div className={styles["app"]}>
      <header className={styles["header"]}>
        <AppHeader />
      </header>
      <main className={styles["main"]}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {
          !isLoading &&
          !hasError &&
          obj.data.length &&
          <BurgerConstructor state={state} />
        }
        <BurgerIngredients />
      </main>
    </div>
  );
}

export default App;
