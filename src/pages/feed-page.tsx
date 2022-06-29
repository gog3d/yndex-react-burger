import styles from './feed-page.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";

import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component';

import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';
import { TIngredient}  from '../redux/action-types/data';
import { Location } from 'history';

export const FeedPage: React.FC = () => {
  const location = useLocation<Location>();
  const history = useHistory();
  
  const { orders, total, totalToday } = useSelector((store: TOrders) => store.orders.orders);

  const doneOrders = useMemo(() => {
    if(orders) {
      return orders.filter((order: TOrders) => order.status === 'done')
    }
  }, [orders]);

  const inWorkOrders = useMemo(() => {
    if(orders) {
      return orders.filter((order: TOrders) => order.status === 'inwork')
    }
  }, [orders]);

  if(!orders) {
    return null
  }

  const onClickItem = (item: TOrders, location: Location) => {
    history.push({
      pathname: `/feed/${item._id}`,
      state: {background: location},
    });
  };
  
  return(
    <div className={styles["page__content"]}>
      <main className={styles["main"]}>
        <p>
          <span className="text text_type_main-large">
            {`Лента заказов`}
          </span>
        </p>
        <div className={styles['feed-orders']}>
          <div className={styles['feed-orders-sheet']}>
          { orders.map((order: TOrders, index: number) => { return (
            <div key={uuidv4()} className={styles['feed-orders-item']} onClick={() => onClickItem(order, location)}>
              <OrderSheetComponent order={ order } />
            </div> )}) }
          </div>
          <div className={styles['feed-orders-state']}>
            <div className={styles['feed-orders-orders-list-header']}>
              <div className={styles['feed-orders-orders-text-header']}>
                <p>
                  <span className="text text_type_main-medium">
                    {`Готовы:`}
                  </span>
                </p>
              </div>
              <div className={styles['feed-orders-orders-text-header']}>
                <p>
                  <span className="text text_type_main-medium">
                    {`В работе:`}
                  </span>
                </p>
              </div>
            </div>
            <div className={styles['feed-orders-orders-list']}>
              <div className={styles['feed-orders-ready']}>
                { doneOrders.map((item: TOrders, index: number) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item.number}`}
                    </span>
                  </p>  )}) }
              </div>
              <div className={styles['feed-orders-in-work']}>
                { inWorkOrders.map((item: TOrders, index: number) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item}`}
                    </span>
                  </p>  )}) }

              </div>
            </div>

            <div className={styles['feed-orders-text-block']}>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_main-medium">
                  {`Выполнено за все время:`}
                </span>
              </p>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_digits-large">
                  {`${total}`}
                </span>
              </p>
            </div>

            <div className={styles['feed-orders-text-block']}>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_main-medium">
                  {`Выполнено за сегодня:`}
                </span>
              </p>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_digits-large">
                  {`${totalToday}`}
                </span>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}