import { v4 as uuidv4 } from 'uuid';
import styles from './order-sheet-component.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { RootState }  from '../../redux/store';
import { TIngredient}  from '../../redux/action-types/data';
import { Location } from 'history';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export interface TTotal {
  bun: TIngredient | null,
  ingredients: Array<TIngredient>,
}


const OrderSheetComponent: React.FC<{ order: TOrders }> = ({ order }) => {
  const {
    burgerIngredients,
  } = useAppSelector((store: RootState) => store.ingredients);

  const today = new Date();
  const orderDate = new Date(order.createdAt);
  const day = Math.floor((today - orderDate)/(1000*3600*24));

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


  const items: Array<TIngredient> = [];
  burgerIngredients.map((item) => {
    order.ingredients.map((ingredient) => {
      if(ingredient === item._id) {
        items.push(item);
      }
    });
  });


  const total: TTotal = {
    bun: null,
    ingredients: [],
  }

  items.map((item) => {
    if(item.type === 'bun') {
      total.bun = item;
    } else {
      total.ingredients.push(item);
    }
  });

  const bunPrice = total.bun ? total.bun.price : 0;
  const ingredientsPrice = total.ingredients.reduce((sum, comp) => sum + comp.price, 0);
  const count = bunPrice + ingredientsPrice;

  return (
    <div className={styles['order-sheet-component']}>
      <div className={styles['order-sheet-component-block']}>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_digits-small">
            {`#${order.number}`}
          </span>
        </p>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_main-small">
            {`${date.status} ${orderDate.getUTCHours()}:${orderDate.getUTCMinutes()}`}
          </span>
        </p>
      </div>
      <div className={styles['order-sheet-component-block']}>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_main-medium">
            {`${order.name}`}
          </span>
        </p>
      </div>
      <div className={styles['order-sheet-component-block']}>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_main-small">
            {`${orderStatus.status}`}
          </span>
        </p>
      </div>
      <div className={styles['order-sheet-component-block']}>
        <div className={styles['order-sheet-component-img-block']}>
          { items.map((item) => 
            (
              <img src={item.image} key={uuidv4()} className={styles['order-sheet-component-img']} />
            )
          )}
        </div>
        <div className={styles['order-sheet-component-total-block']}>
          <p className={styles['order-sheet-component-text']}>
            <span className="text text_type_digits-small">
              {`${count}`}
            </span>
          </p>
          <CurrencyIcon type={'primary'} />
        </div>
      </div>
    </div>
  )
}

export default OrderSheetComponent;