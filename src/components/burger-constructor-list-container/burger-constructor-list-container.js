import React, {useState, useRef, useEffect, useMemo} from 'react';
import styles from './burger-constructor-list-container.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorListComponent from '../burger-constructor-list-component/burger-constructor-list-component.js';

import { useDispatch, useSelector } from 'react-redux';
import {useDrop} from 'react-dnd';

import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  GET_CONSTRUCTOR_INGREDIENTS,
  ADD_MODAL_INGREDIENT,
  DELETE_MODAL_INGREDIENTS,
  REFRESH_ORDERDETAILS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from '../../services/actions/ingredients.js';

const BurgerConstructorListContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.ingredients.constructorIngredients);

  const bun = useMemo(
    () => {
      return data.length === 0 ? false : data.find((comp)=>comp.type === 'bun');
    }, [data]
  );

  const ingredients = useMemo(
    () => {
      return data.length === 0 ? false : data;
    }, [data]
  );
    const [, dropTarget] = useDrop({
      accept: "ingredients",
      drop(item) {
        dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, constructorIngredient: item });
      },
    });

    const addClick = () => {
      dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, constructorIngredient: data[0] });
      
    };
    let keyValue = 0;
  return (
    <div ref={dropTarget} className={styles["burger-constructor-list"]}>
      <div className={styles["burger-constructor-list-component-top"]} key={`${bun._id}_top`} onClick ={addClick}>
        {
        bun &&
        <ConstructorElement
          type={'top'}
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={data.find((comp)=>comp.type === 'bun').price}
          thumbnail={data.find((comp)=>comp.type === 'bun').image}
        />
        }
       </div>
      <div className={styles["burger-constructor-list-container"]} >
        {ingredients &&
        <>
        {
          ingredients.map((item, index)=>{
            const endElement = data.length - 1;
            if(item.type !== 'bun') return (
            <div className={styles["burger-constructor-list-component-midle"]} key={`${item._id}${keyValue++}_midle`}>
              <BurgerConstructorListComponent
                item={item}
                index={index}
              />
            </div>
            )
          })
        }
        </>
        }
      </div>
      <div className={styles["burger-constructor-list-component-bottom"]}  key={`${bun._id}_bottom`}>
        {
         bun &&
        <ConstructorElement
          type={'bottom'}
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={data.find((comp)=>comp.type === 'bun').price}
          thumbnail={data.find((comp)=>comp.type === 'bun').image}
        />
        }
      </div>
    </div>
  );
}

export default BurgerConstructorListContainer;