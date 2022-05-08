import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component-item.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.js';
import IngredientDetails from '../ingredient-details/ingredient-details.js';
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MODAL_INGREDIENTS, DELETE_MODAL_INGREDIENTS } from '../../services/actions/ingredients.js';

const BurgerIngredientsListComponentItem = (props) => {
  const { item } = props;
  const constructorIngredients = useSelector(store => store.ingredients.constructorIngredients);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  
  const onClickItem = () => {
    setOpen(true);
    dispatch({ type: ADD_MODAL_INGREDIENTS, item: item });
  };

  const onClose = () => {
    setOpen(false);
    dispatch({ type: DELETE_MODAL_INGREDIENTS, item: item });
  };

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
      <Modal message={item.name} isOpen={open} onClose={onClose}>
        <IngredientDetails item={item}/>
      </Modal>
      <div
        ref={dragRef}
        key={item._id}
        className={styles['burger-ingredients-list-component-item']}
        onClick={onClickItem}
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
          { item.name &&
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

BurgerIngredientsListComponentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BurgerIngredientsListComponentItem;