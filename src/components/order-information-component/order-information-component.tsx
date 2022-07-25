import { v4 as uuidv4 } from 'uuid';
import styles from './order-information-component.module.css';

import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderInformationComponentItem from '../order-information-component-item/order-information-component-item';

import { RootState }  from '../../redux/store';
import { TIngredient, TOrders}  from '../../types/data';
import { Location } from 'history';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export interface TTotal {
  bun: TIngredient | null,
  ingredients: Array<TIngredient>,
}

const OrderInformationComponent: React.FC<{ order: TOrders}> = (props) => {
  const { order } = props;
  const {
    burgerIngredients,
  } = useAppSelector((store: RootState) => store.ingredients);

  if(!order) return null;

  const today: Date = new Date();
  const orderDate: Date = new Date(order.createdAt);
  const day: number = Math.floor((Number(today) - Number(orderDate))/(1000*3600*24));

  const date = {
    status: '',
  };
  if(day === 0) {
     date.status = 'Сегодня';
  } else if (day === 1) {
    date.status = 'Вчера';
  } else if (5 > day > 1) {
    date.status = `${day} дня назад`;
  } else {
    date.status = `${day} дней назад`;
  }
  
  const orderStatus = {
    status: '',
  }
  if(order.status === 'done') {
    orderStatus.status = 'Выполнен';
  } else if(order.status === 'inwork') {
    orderStatus.status = 'В работе';
  } else {
    orderStatus.status = order.status;
  }

  const ingredients: Array<TIngredient> = [];
  burgerIngredients.map((item) => {
    order.ingredients.map((ingredient) => {
      if(ingredient === item._id) {
        ingredients.push(item);
      }
    });
  });


  const total: TTotal = {
    bun: null,
    ingredients: [],
  }

  ingredients.map((ingredient: TIngredient) => {
    if(ingredient.type === 'bun') {
      total.bun = ingredient;
    } else {
      total.ingredients.push(ingredient);
    }
  });

  const bunPrice = total.bun ? total.bun.price : 0;
  const ingredientsPrice = total.ingredients.reduce((sum, comp) => sum + comp.price, 0);
  const count = bunPrice + ingredientsPrice;

  const itemsObj: any = {};
  for(const ingredient of ingredients) {
    const name = ingredient.name;
    if(itemsObj[name] === undefined){
      itemsObj[name] = {};
      itemsObj[name].item = ingredient;
      if(ingredient.type === 'bun'){
        itemsObj[name].equal = 2;
      } else {
        itemsObj[name].equal = 1;
      }
    } else {
      itemsObj[name].equal +=1;
    }
  }
  
  const items = [];
  for(const item in itemsObj){
    items.push(itemsObj[item]);
  }

  return (
    <div className={styles['order-informations-component']} >
      <div className={styles['order-number-header']}>
        <p className={styles['order-number']}>
          <span className="text text_type_digits-default">
            {`#${order.number}`}
          </span>
        </p>
      </div>
      <div className={styles['order-informations-header']}>
        <p className={styles['order-burger-name']}>
          <span className="text text_type_main-medium">
            {`${order.name}`}
          </span>
        </p>
        <p className={styles['order-state']}>
          <span className="text text_type_main-small">
            {`${orderStatus.status}`}
          </span>
        </p>
        <p className={styles['order-burger-compound-text']}>
          <span className="text text_type_main-medium">
            Состав:
          </span>
        </p>
      </div>
      <div className={styles['order-burger-compound']}>
        { items.map((item) => 
          (
            <OrderInformationComponentItem 
            item={item.item} 
            equal={item.equal} 
            key={uuidv4()}
            />
          )
        )}
      </div>
      <div className={styles['order-footer']}>
        <p className={styles['order-date']}>
          <span className="text text_type_main-smalle">
            {`${date.status} ${orderDate.getUTCHours()}:${orderDate.getUTCMinutes()}`}
          </span>
        </p>
        <div className={styles['order-total-container']}>
          <p className={styles['order-total']}>
            <span className="text text_type_digits-default">
              {`${count}`}
            </span>
          </p>
          <CurrencyIcon type={'primary'} />
        </div>
      </div>
  </div>
  )
}

export default OrderInformationComponent;