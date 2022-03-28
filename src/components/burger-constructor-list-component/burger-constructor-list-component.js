import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './burger-constructor-list-component.module.css';
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorListComponent = (props) => {
  const {name, price, img, constructorElementType} = props;
  const [locked, setIsLocked] =useState(false);
  const [type, setType] = useState('primary')
  const [position, setPosition] = useState('static');
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
      style={{position: position}}
      onClick={onClickBurgerConstructorListComponent}
      >
      <DragIcon className={styles['dragon-icon']} type={type} />
      <ConstructorElement
        type={constructorElementType}
        isLocked={locked}
        text={name}
        price={price}
        thumbnail={img}
        />
    </div>
  );
}

BurgerConstructorListComponent.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  constructorElementType: PropTypes.string,
};

export default BurgerConstructorListComponent;