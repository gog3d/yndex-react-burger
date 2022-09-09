import styles from './feed-page.module.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useMemo, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";

import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { wsConnectionStart, wsDisconnect } from '../redux/actions/wsAction';
import { TOrders }  from '../types/data';
import { TLocationState } from '../types/data';

export const FeedPage: React.FC = () => {
  const location = useLocation<TLocationState>()
  const history = useHistory();
  const dispatch = useAppDispatch()
    const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useAppSelector((store) => store.wsOrders);

  useEffect(() => {
    dispatch({ type: wsConnectionStart, payload: '/all' });
    //dispatch({ type: wsConnectionStart, payload: ':3001' });
    return () => {
      dispatch({type: wsDisconnect});
    }
  }, [dispatch]);

  const onClickItem = useCallback(
    (item: TOrders) => {
      return history.push({
        pathname: `/feed/${item._id}`,
        state: {background: location},
    });
  }, [location]);

  const doneOrders = useMemo(() => {
    if(wsOrders) {
      return wsOrders.filter((order: TOrders) => order.status === 'done')
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
          { wsOrders ? wsOrders.map((order: TOrders, index: number) => { return (
            //<div key={uuidv4()} className={styles['feed-orders-item']} onClick={() => onClickItem(order, location)}>
            <div key={uuidv4()} className={styles['feed-orders-item']} onClick={() => onClickItem(order)}>
              <OrderSheetComponent order={ order } />
            </div> )}): null }
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
                { doneOrders ? doneOrders.map((item: TOrders, index: Number) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item.number}`}
                    </span>
                  </p>  )}) : null }
              </div>
              <div className={styles['feed-orders-in-work']}>
                { inWorkOrders ? inWorkOrders.map((item: TOrders, index: Number) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item}`}
                    </span>
                  </p>  )}) : null}

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
