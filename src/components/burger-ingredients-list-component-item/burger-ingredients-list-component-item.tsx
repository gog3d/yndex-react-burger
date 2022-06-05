import React, { useState, useMemo } from 'react';
//import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component-item.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { IngredientType, StateType } from '../../services/types/data';

interface BurgerIngredientsListComponentItemProps {
  item: IngredientType,
};

const BurgerIngredientsListComponentItem: React.FC<BurgerIngredientsListComponentItemProps> = (props) => {
  const { item } = props;
  const constructorIngredients = useSelector((store: StateType) => store.ingredients.constructorIngredients);

  const num = useMemo(
    () => {
      if (item.type === 'bun') {
        return constructorIngredients.bun._id === item._id ? 1 : 0;
      } else {
        return constructorIngredients.ingredients.reduce((sum, comp) => comp._id === item._id ? ++sum : sum, 0)
      }
    }, [constructorIngredients.ingredients, constructorIngredients.bun]
  );

  const [{isDrag}, dragRef] = useDrag({
    type: "ingredients",
    item: item,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  return (
    <>
      <div
        ref={dragRef}
        key={item._id}
        className={styles['burger-ingredients-list-component-item']}
      >
        <img
          className={styles['burger-ingredients-list-component-item-img']}
          src={item.image}
        />
        <div className={styles['burger-ingredients-list-component-item-price']}>
          <div className={styles['burger-ingredients-list-component-item-price-span']}>
            <span className="text text_type_main-default">
              {item.price}
            </span>
          </div>
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles['burger-ingredients-list-component-item-counter']} >
          { item.name && num > 0 &&
            <Counter count={num} />
          }
        </div>
          <div className={styles['burger-ingredients-list-component-item-name']} >
            <span className="text text_type_main-default text-center">
              {item.name}
            </span>
          </div>
      </div>
   </>
  );
};

export default BurgerIngredientsListComponentItem;