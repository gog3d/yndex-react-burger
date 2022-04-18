import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
//
import { ConstructorContext } from '../../services/constructor-context.js';
//
import { baseURL }  from '../../utils/config.js';

import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients.js';

const App = () => {

  const { 
    burgerIngredients, 
    burgerIngredientsRequest, 
    burgerIngredientsFailed 
    } = useSelector(store => store.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {dispatch(getIngredients())}, [dispatch]);
  

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
        const res = await fetch(baseURL + 'ingredients');
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
        <ConstructorContext.Provider value={ [constructorState, constructorDispatcher] }>
          <div className={styles["main-constructor-container"]}>
            {
              !burgerIngredientsRequest && 
              <BurgerIngredients state={ state }/>
            }
            {
              !burgerIngredientsRequest &&
              <BurgerConstructor state={ state }/>
            }
          </div>
        </ConstructorContext.Provider>
      </main>
    </div>
  );
}


export default App;
