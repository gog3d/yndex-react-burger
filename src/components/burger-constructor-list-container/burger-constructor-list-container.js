import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types'
import styles from './burger-constructor-list-container.module.css';
import {Tab, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import types from '../../utils/types.js';
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
       <Tab value={`${dataBun.name}_up`} key={`${dataBun._id}_up`}>
        <ConstructorElement
          key={startIndex}
          type={'top'}
          isLocked={true}
          text={`${dataBun.name} (верх)`}
          price={dataBun.price}
          thumbnail={dataBun.image}
        />
      </Tab>
      <div className={styles["burger-constructor-list-container"]} >
        {
          data.map((item, index)=>{
            const endElement = data.length - 1;
            if(item.type !== 'bun') return (
            <Tab value={item.name} key={item._id}>
              <BurgerConstructorListComponent
                key={index}
                changeCountUp={props.changeCountUp}
                changeCountDown={props.changeCountDown}
                price={item.price}
                name={item.name}
                img={item.image}
              />
            </Tab>
            )
          })
        }
      </div>
      <Tab value={`${dataBun.name}_down`} key={`${dataBun._id}_down`}>
        <ConstructorElement
          key={startIndex}
          type={'bottom'}
          isLocked={true}
          text={`${dataBun.name} (низ)`}
          price={dataBun.price}
          thumbnail={dataBun.image}
        />
      </Tab>
    </div>
  );
}

BurgerConstructorListContainer.propTypes = types(PropTypes);

export default BurgerConstructorListContainer;