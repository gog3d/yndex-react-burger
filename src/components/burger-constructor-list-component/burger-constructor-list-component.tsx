import React, { useState, useCallback, useRef } from 'react';
import styles from './burger-constructor-list-component.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import {
 
  deleteConstructorIngredient,
  updateConstructorIngredients,
 
} from '../../redux/actions/ingredients';

import { TIngredient } from '../../types/data';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface BurgerConstructorListComponentProps {
  item: TIngredient,
  index: number,
};

const BurgerConstructorListComponent: React.FC<BurgerConstructorListComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const { item, index } = props;

  const ingredients = useAppSelector((store) => store.ingredients.constructorIngredients.ingredients);

  const [locked, setIsLocked] =useState(false);

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
      if(!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (clientOffset === null) return; 
      const hoverActualY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
      moveIngredients(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  })

  const ref = useRef<HTMLDivElement>(null)
  const dragDropRef = dragRef(dropRef(ref))
  const opacity = isDragging ? 0 : 1

  return (
          <div 
            ref={ref} 
            className={styles["burger-constructor-list-component"]} 
            style={{opacity}} 
            >
            <DragIcon type='primary' />
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