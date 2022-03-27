import React, {useState, useRef, useEffect} from 'react';
import styles from './burger-ingredients-list-component-item.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredientsListComponentItem = (props) => {
  const [num, setNum] = useState(0);
  const onClickItem = () => setNum(prev => prev + 1);
  //  onClick={onClickItem}
  const {item} = props;
  return (
    <div key={item.name} className={styles['burger-ingredients-list-component-item']}
     onClick={onClickItem}
    >
      <img
        className={styles['burger-ingredients-list-component-item-img']}
        src={item.image}/>
      <div className={styles['burger-ingredients-list-component-item-price']}>
        <span className={styles['burger-ingredients-list-component-item-price-span']}>
          {item.price}
        </span>
        <CurrencyIcon type="primary" />
        </div>
        { item.name &&
          <Counter count={num} style={{position: 'static'}}/>
         }
        <span className={styles['burger-ingredients-list-component-item-name']}>
          {item.name}
        </span>
    </div>
  );
};

export default BurgerIngredientsListComponentItem;