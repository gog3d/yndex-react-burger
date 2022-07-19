import { useRef } from 'react';
import styles from './burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list';
import BurgerIngredientsHeader from '../burger-ingredients-header/burger-ingredients-header';
import { useDispatch, useSelector } from 'react-redux';

import {
  
  refreshBunsScroll,
  refreshSaucesScroll,
  refreshMainsScroll,

} from '../../redux/actions/ingredients';

import { RootState }  from '../../redux/action-types';

const BurgerIngredients: React.FC = () => {
  const dispatch = useDispatch();
  const bunsRef = useRef<HTMLDivElement>(null);
  const saucesRef = useRef<HTMLDivElement>(null);
  const mainsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollEvent = () => {
    if(bunsRef.current && saucesRef.current && mainsRef.current && listRef.current) {
      const bunsPos = bunsRef.current.getBoundingClientRect().y - listRef.current.getBoundingClientRect().y;
      const saucesPos = saucesRef.current.getBoundingClientRect().y - listRef.current.getBoundingClientRect().y;
      const mainsPos = mainsRef.current.getBoundingClientRect().y - listRef.current.getBoundingClientRect().y;
      if (bunsPos <=0 && saucesPos > 0 &&  mainsPos > 0) {
        dispatch({ type: refreshBunsScroll });
      } else if (bunsPos < 0 && saucesPos <= 0 &&  mainsPos > 0) {
        dispatch({ type: refreshSaucesScroll });
      } else if (bunsPos < 0 && saucesPos < 0 &&  mainsPos <= 0) {
        dispatch({ type: refreshMainsScroll });
      }
    }
  };

  const { bunsScroll, saucesScroll, mainsScroll } = useSelector((store: RootState) => store.ingredients);
  return (
    <div className={styles['burger-ingredients']}>
       <BurgerIngredientsHeader  />
       <BurgerIngredientsList scrollEvent={scrollEvent} listRef={listRef} bunsRef={bunsRef} saucesRef={saucesRef} mainsRef={mainsRef} />
    </div>
  );
};

export default BurgerIngredients;