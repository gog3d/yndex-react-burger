import styles from './feed-page.module.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useMemo } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";

import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { TOrders }  from '../types/data';
import { RootState }  from '../redux/store';
import { Location } from 'history';

export const FeedPage: React.FC = () => {
  const location = useLocation<Location>();
  const history = useHistory();
  
    const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useAppSelector((store: RootState) => store.wsOrders);

  const doneOrders = useMemo(() => {
    if(wsOrders) {
      return wsOrders.filter((order:TOrders) => order.status === 'done')
    }
  }, [wsOrders]);

  const inWorkOrders = useMemo(() => {
    if(wsOrders) {
      return wsOrders.filter((order: TOrders) => order.status === 'inwork')
    }
  }, [wsOrders]);

  if(!wsOrders) {
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
          { wsOrders.map((order: TOrders, index: number) => { return (
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