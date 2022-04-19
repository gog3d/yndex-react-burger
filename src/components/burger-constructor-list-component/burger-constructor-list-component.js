import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor-list-component.module.css';
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  GET_CONSTRUCTOR_INGREDIENTS,
  ADD_MODAL_INGREDIENT,
  DELETE_MODAL_INGREDIENTS,
  REFRESH_ORDERDETAILS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from '../../services/actions/ingredients.js';


const BurgerConstructorListComponent = (props) => {
  const dispatch = useDispatch();

  const { item, index } = props;
  const [locked, setIsLocked] =useState(false);
  const [type, setType] = useState('primary')

  const onClickBurgerConstructorListComponent = () => {
    setIsLocked(locked === true ? false : true);
    setType(type === 'primary' ? 'secondary' : 'primary');
    dispatch({ type: DELETE_CONSTRUCTOR_INGREDIENT, index: index });
  };
  return (
    <div
      className={styles["burger-constructor-list-component"]}

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

BurgerConstructorListComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BurgerConstructorListComponent;