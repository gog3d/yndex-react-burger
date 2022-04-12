import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types'
import styles from './burger-constructor-list-container.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientType} from '../../utils/dataTypes.js';
import BurgerConstructorListComponent from '../burger-constructor-list-component/burger-constructor-list-component.js';
import { ConstructorContext } from '../../services/constructor-context.js';

const BurgerConstructorListContainer = () => {

  const [constructorState, constructorDispatcher] = React.useContext(ConstructorContext);

  const dataBun = React.useMemo(
    () => {
      return constructorState.components.length === 0 ? false : constructorState.components.find((comp)=>comp.type === 'bun');
    }, [constructorState]
  );

  const data = React.useMemo(
    () => {
      return constructorState.components.length === 0 ? false : constructorState.components;
    }, [constructorState]
  );

  return (
    <div className={styles["burger-constructor-list"]}>
      <div className={styles["burger-constructor-list-component-top"]} key={`${dataBun._id}_top`}>
        {
        dataBun &&
        <ConstructorElement
          type={'top'}
          isLocked={true}
          text={`${dataBun.name} (верх)`}
          price={constructorState.components.find((comp)=>comp.type === 'bun').price}
          thumbnail={constructorState.components.find((comp)=>comp.type === 'bun').image}
        />
        }
       </div>
      <div className={styles["burger-constructor-list-container"]} >
        {data &&
        <>
        {
          data.map((item, index)=>{
            const endElement = data.length - 1;
            if(item.type !== 'bun') return (
            <div className={styles["burger-constructor-list-component-midle"]} key={`${item._id}_midle`}>
              <BurgerConstructorListComponent
                price={item.price}
                name={item.name}
                img={item.image}
              />
            </div>
            )
          })
        }
        </>
        }
      </div>
      <div className={styles["burger-constructor-list-component-bottom"]}  key={`${dataBun._id}_bottom`}>
        {
         dataBun &&
        <ConstructorElement
          type={'bottom'}
          isLocked={true}
          text={`${dataBun.name} (низ)`}
          price={constructorState.components.find((comp)=>comp.type === 'bun').price}
          thumbnail={constructorState.components.find((comp)=>comp.type === 'bun').image}
        />
        }
      </div>
    </div>
  );
}

export default BurgerConstructorListContainer;