import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor-list-component.module.css';
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorListComponent = (props) => {
  const {name, price, img} = props;
  const [locked, setIsLocked] =useState(false);
  const [type, setType] = useState('primary')
  const changeCountUp=props.changeCountUp;
  const changeCountDown=props.changeCountDown;
  
  const onClickBurgerConstructorListComponent = () => {
    locked === false ? changeCountUp(price) : changeCountDown(price);
    setIsLocked(locked === true ? false : true);
    setType(type === 'primary' ? 'secondary' : 'primary');
  };
  return (
    <div
      className={styles["burger-constructor-list-component"]}
      onClick={onClickBurgerConstructorListComponent}
      >
      <DragIcon className={styles['dragon-icon']} type={type} />
      <ConstructorElement
        isLocked={locked}
        text={name}
        price={price}
        thumbnail={img}
        />
    </div>
  );
}

BurgerConstructorListComponent.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  changeCountUp: PropTypes.func,
  changeCountDown: PropTypes.func,
};

export default BurgerConstructorListComponent;