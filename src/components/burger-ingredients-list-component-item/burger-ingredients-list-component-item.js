import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component-item.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal.js';
import IngredientDetails from '../ingredient-details/ingredient-details.js';
import {IngredientType} from '../../utils/dataTypes.js';

const BurgerIngredientsListComponentItem = (props) => {
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);
  const onClickItem = () => {
    setNum(prev => prev + 1);
    setOpen(true);
  };
  const {item} = props;
  return (
    <>
      <Modal message={item.name} isOpen={open} onClose={()=>setOpen(false)}>
        <IngredientDetails item={item}/>
      </Modal>
      <div key={item._id} className={styles['burger-ingredients-list-component-item']}
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
  item: IngredientType,
};

export default BurgerIngredientsListComponentItem;