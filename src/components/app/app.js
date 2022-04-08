import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import { ConstructorContext } from '../../services/constructor-context.js';
import data from '../../data/data.js';

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

  const constructorReducer = (state, action) => {
    if (action.type === 'add') {
      if (action.payload.type === 'bun') {
        return { ...state, components:[...state.components.filter((comp)=>comp.type !== 'bun'), action.payload] };
      } else {
       return { ...state, components:[...state.components, action.payload] };
      }
    } else if (action.type == 'delete') {
        return { ...state, components:[...state.components.filter((comp)=>comp._id !== action._id), ...action.payload] };
    } else if (action.type == 'reset') {
       const bunComp = action.payload.find((comp)=>comp.type === 'bun');
       const comps = action.payload.filter((comp)=>comp.type !== 'bun');
       return { components: [bunComp, ...comps] };
    } else {
      return state;
    }

  };

  const [constructorState, constructorDispatcher] = React.useReducer(constructorReducer,  { components: [] });

  useEffect(()=>{
    const getData = async () => {
      try {
        setState({ ...state, hasError: false, isLoading: true });
        const res = await fetch(URL);
        const obj = await res.json();
        setState({ ...state, obj, isLoading: false });
        constructorDispatcher({type: 'reset', payload: obj.data});
      } catch (error) {
        setState({ ...state, hasError: true, isLoading: false });
      }
    };
    getData();
  }, []);

  const { obj, isLoading, hasError } = state;
  const constructorData = obj.data;
  
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
        <ConstructorContext.Provider value={ [constructorState, constructorDispatcher] }>
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
              <BurgerConstructor state={ state }/>//
            }
          </div>
        </ConstructorContext.Provider>
      </main>
    </div>
  );
}


export default App;
