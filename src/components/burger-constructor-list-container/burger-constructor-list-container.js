import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types'
import styles from './burger-constructor-list-container.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {stateTypes} from '../../utils/dataTypes.js';
import BurgerConstructorListComponent from '../burger-constructor-list-component/burger-constructor-list-component.js';

const BurgerConstructorListContainer = (props) => {
  const { state } = props;
  const { obj } = state;
  const { data } = obj;
  const bunNum = 0;
  const dataBun = data[bunNum];
  const startIndex = 0;
 
  return (
    <div className={styles["burger-constructor-list"]}>
      <div className={styles["burger-constructor-list-component-top"]} key={`${dataBun._id}_top`}>
        <ConstructorElement

          type={'top'}
          isLocked={true}
          text={`${dataBun.name} (верх)`}
          price={dataBun.price}
          thumbnail={dataBun.image}
        />
        </div>
      <div className={styles["burger-constructor-list-container"]} >
        {
          data.map((item, index)=>{
            const endElement = data.length - 1;
            if(item.type !== 'bun') return (
            <div className={styles["burger-constructor-list-component-midle"]} key={`${item._id}_midle`}>
              <BurgerConstructorListComponent
                changeCountUp={props.changeCountUp}
                changeCountDown={props.changeCountDown}
                price={item.price}
                name={item.name}
                img={item.image}
              />
            </div>
            )
          })
        }
      </div>
      <div className={styles["burger-constructor-list-component-bottom"]}  key={`${dataBun._id}_bottom`}>
        <ConstructorElement
          type={'bottom'}
          isLocked={true}
          text={`${dataBun.name} (низ)`}
          price={dataBun.price}
          thumbnail={dataBun.image}
        />
      </div>
    </div>
  );
}

BurgerConstructorListContainer.propTypes = stateTypes;

export default BurgerConstructorListContainer;