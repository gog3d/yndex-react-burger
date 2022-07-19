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
///!!!!
//import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';

//import { TIngredient}  from '../redux/action-types/data';
//import { Location } from 'history';

export const FeedPage = () => {
  const location = useLocation();
  const history = useHistory();
  
  //const { orders, total, totalToday } = useSelector((store: TOrders) => store.orders.orders);

  const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useSelector((store) => store.wsOrders);

  const doneOrders = useMemo(() => {
    if(wsOrders) {
      return wsOrders.filter((order) => order.status === 'done')
    }
  }, [wsOrders]);

  const inWorkOrders = useMemo(() => {
    if(wsOrders) {
      return wsOrders.filter((order) => order.status === 'inwork')
    }
  }, [wsOrders]);

  if(!wsOrders) {
    return null
  }

  const onClickItem = (item, location) => {
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
          { wsOrders.map((order, index) => { return (
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
                { doneOrders.map((item, index) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item.number}`}
                    </span>
                  </p>  )}) }
              </div>
              <div className={styles['feed-orders-in-work']}>
                { inWorkOrders.map((item, index) => {return(
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
                  {`${wsOrdersTotal}`}
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
                  {`${wsOrdersTotalToday}`}
                </span>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}