import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor-list-component.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop, useDrag } from 'react-dnd';
//import {  DELETE_CONSTRUCTOR_INGREDIENT, UPDATE_CONSTRUCTOR_INGREDIENTS } from '../../redux/actions/ingredients';
import {
 
  deleteConstructorIngredient,
  updateConstructorIngredients,
 
} from '../../redux/actions/ingredients';

import { TIngredient } from '../../redux/action-types/data';
import { RootState }  from '../../redux/action-types';

interface BurgerConstructorListComponentProps {
  item: TIngredient,
  index: number,
};

const BurgerConstructorListComponent: React.FC<BurgerConstructorListComponentProps> = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;

  const ingredients = useSelector((store: RootState) => store.ingredients.constructorIngredients.ingredients);

  const [locked, setIsLocked] =useState(false);
  const [type, setType] = useState('primary')

  const onClickBurgerConstructorListComponent = () => {
    dispatch({ type: deleteConstructorIngredient, index: index });
  };

  const moveIngredients = useCallback(
      (dragIndex: number, hoverIndex: number) => {
      const dragItem = ingredients[dragIndex];
      const hoverItem = ingredients[hoverIndex];
      const updatedIngredients = [...ingredients];
      updatedIngredients[dragIndex] = hoverItem;
      updatedIngredients[hoverIndex] = dragItem;
      dispatch({ type: updateConstructorIngredients, ingredients: updatedIngredients });
    },
    [ingredients]
  )

  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item: {index: number}, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
        if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
          moveIngredients(dragIndex, hoverIndex);
            item.index = hoverIndex;
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))
  const opacity = isDragging ? 0 : 1

  return (
          <div 
            ref={dragDropRef} 
            className={styles["burger-constructor-list-component"]} 
            style={{opacity}} 
            >
            <DragIcon className={styles['dragon-icon']} type={type} />
            <ConstructorElement
              handleClose={onClickBurgerConstructorListComponent}
              isLocked={locked}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
  );
}

export default BurgerConstructorListComponent;