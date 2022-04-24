import { useRef, useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list.js';
import BurgerIngredientsHeader from '../burger-ingredients-header/burger-ingredients-header.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  REFRESH_BUNS_SCROLL,
  REFRESH_SAUCES_SCROLL,
  REFRESH_MAINS_SCROLL,
} from '../../services/actions/ingredients.js';

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);
  const listRef = useRef(null);
//  const [pos, setPos] = useState(0);

  const scrollEvent = (e) => {
    if(bunsRef.current && saucesRef.current && mainsRef.current && listRef.current) {
      const bunsPos = bunsRef.current.getBoundingClientRect().y - listRef.current.getBoundingClientRect().y;
      const saucesPos = saucesRef.current.getBoundingClientRect().y - listRef.current.getBoundingClientRect().y;
      const mainsPos = mainsRef.current.getBoundingClientRect().y - listRef.current.getBoundingClientRect().y;
      if (bunsPos <=0 && saucesPos > 0 &&  mainsPos > 0) {
        dispatch({ type: REFRESH_BUNS_SCROLL });
      } else if (bunsPos < 0 && saucesPos <= 0 &&  mainsPos > 0) {
        dispatch({ type: REFRESH_SAUCES_SCROLL });
      } else if (bunsPos < 0 && saucesPos < 0 &&  mainsPos <= 0) {
        dispatch({ type: REFRESH_MAINS_SCROLL });
      }
    }
  };

  const { bunsScroll, saucesScroll, mainsScroll } = useSelector(store => store.ingredients);
  return (
    <div className={styles['burger-ingredients']}>
       <BurgerIngredientsHeader  />
       <BurgerIngredientsList scrollEvent={scrollEvent} listRef={listRef} bunsRef={bunsRef} saucesRef={saucesRef} mainsRef={mainsRef} />
    </div>
  );
};

export default BurgerIngredients;