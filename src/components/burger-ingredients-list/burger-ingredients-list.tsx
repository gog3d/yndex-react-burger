//import PropTypes from 'prop-types';
//import { useMemo, useRef, useEffect } from 'react';
import styles from './burger-ingredients-list.module.css';
import BurgerIngredientsListComponent from '../burger-ingredients-list-component/burger-ingredients-list-component';
//import { useSelector } from 'react-redux';

interface BurgerIngredientsListProps {
  scrollEvent: () => void,
  listRef: React.RefObject<HTMLDivElement>,
  bunsRef: React.RefObject<HTMLDivElement>,
  saucesRef: React.RefObject<HTMLDivElement>,
  mainsRef: React.RefObject<HTMLDivElement>,
};

const BurgerIngredientsList: React.FC<BurgerIngredientsListProps> = (props) => {
  const {scrollEvent, listRef, bunsRef, saucesRef, mainsRef } = props;
    return (
      <div onScroll={scrollEvent} ref={listRef} className={styles["burger-ingredients-list"]}>
        <div  ref={bunsRef} className={styles["burger-ingredients-list-type"]}>
           <span className="text text_type_main-medium">Булки</span>
        </div>
        <BurgerIngredientsListComponent
          type={ 'bun'}
         />
        <div ref={saucesRef} className={styles["burger-ingredients-list-type"]}>
          <span className="text text_type_main-medium">Соусы</span>
        </div>
        <BurgerIngredientsListComponent
          type={'sauce'}
         />
        <div   ref={mainsRef} className={styles["burger-ingredients-list-type"]}>
          <span className="text text_type_main-medium">Компоненты</span>
        </div>
        <BurgerIngredientsListComponent
          type={'main'}
         />
      </div>
  );
};

export default BurgerIngredientsList;