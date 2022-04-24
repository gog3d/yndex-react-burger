import React, { useMemo } from 'react';
import styles from './burger-constructor-list-container.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorListComponent from '../burger-constructor-list-component/burger-constructor-list-component.js';

import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import { ADD_CONSTRUCTOR_INGREDIENT } from '../../services/actions/ingredients.js';

const BurgerConstructorListContainer = () => {
  const dispatch = useDispatch();

  const constructorIngredients = useSelector(store => store.ingredients.constructorIngredients);

  const bun = useMemo(
    () => {
      return constructorIngredients.bun ? constructorIngredients.bun : false;
    }, [constructorIngredients.bun]
  );

  const ingredients = useMemo(
    () => {
      return constructorIngredients.ingredients.length === 0 ? false : constructorIngredients.ingredients;
    }, [constructorIngredients.ingredients]
  );

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, constructorIngredient: item });
    },
  });

  let keyValue = 0;
// ref={dropTarget}
  return (
    <div ref={dropTarget} className={styles["burger-constructor-list"]}>
      <div className={styles["burger-constructor-list-component-top"]} key={`${bun._id}_top`}>
        {
        bun &&
        <ConstructorElement
          type={'top'}
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
        }
       </div>
      <div className={styles["burger-constructor-list-container"]} >
        {ingredients &&
        <>
        {
          ingredients.map((item, index)=>{
            if(item.type !== 'bun') return (
            <div className={styles["burger-constructor-list-component-midle"]} key={`${item._id}${keyValue++}_midle`}>
              <BurgerConstructorListComponent
                item={item}
                index={index}
                dropRef={dropTarget}
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
          price={bun.price}
          thumbnail={bun.image}
        />
        }
      </div>
    </div>
  );
}

export default BurgerConstructorListContainer;