import React, { useMemo } from 'react';
import styles from './burger-constructor-list-container.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorListComponent from '../burger-constructor-list-component/burger-constructor-list-component';
import { useDrop } from 'react-dnd';

import {
  addConstructorIngredient,
} from '../../redux/actions/ingredients';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TIngredient } from '../../types/data';

const BurgerConstructorListContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const constructorIngredients = useAppSelector((store) => store.ingredients.constructorIngredients);

  const bun = useMemo(
    () => {
      return constructorIngredients.bun === null ? false : Object.keys(constructorIngredients.bun).length === 0 ? false : constructorIngredients.bun;
    }, [constructorIngredients.bun]
  );

  const ingredients = useMemo(
    () => {
      return constructorIngredients.ingredients.length === 0 ? false : constructorIngredients.ingredients;
    }, [constructorIngredients.ingredients]
  );

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item: TIngredient) {
      dispatch(addConstructorIngredient(item));
    },
  });

  return (
    <div data-testid = 'constructor_list_container' ref={dropTarget} className={styles["burger-constructor-list"]}>
      <div className={styles["burger-constructor-list-component-top"]}>
        {
          bun ? ( 
            <ConstructorElement
              type={'top'}
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
            ) : (
            <ConstructorElement
              type={'top'}
              isLocked={true}
              text={'добавьте булку'}
              thumbnail={''}
              price={0}
            />
            )
        }
       </div>
      <div className={styles["burger-constructor-list-container"]}>
        {
          ingredients ? (
            ingredients.map((item, index)=>{
              return (
                <div key={item.uuid} >
                  <BurgerConstructorListComponent
                    item={item}
                    index={index}
                 />
                </div>
              )
            })
          ) : (
            <div className={styles["burger-constructor-list-component-midle"]}>
                <DragIcon type={'secondary'} />
                <ConstructorElement
                isLocked={true}
                text={`добавьте ингредиент`}
                price={0}
                thumbnail={''}
              />
            </div>
          )
        }
      </div>
      <div className={styles["burger-constructor-list-component-bottom"]}>
        {
         bun ? (
          <ConstructorElement
            type={'bottom'}
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        ) : (
          <ConstructorElement
            type={'bottom'}
            isLocked={true}
            text={`добавьте булку`}
            price={0}
            thumbnail={''}
          />
        )
        }
      </div>
    </div>
  );
}

export default BurgerConstructorListContainer;