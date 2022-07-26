import styles from './order-information-page.module.css';
import { useMemo } from 'react'
import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

import OrderInformationComponent from '../components/order-information-component/order-information-component';
import { wsUserConnectionStart, wsUserDisconnect } from '../redux/actions/wsUserAction';
import { wsConnectionStart, wsDisconnect } from '../redux/actions/wsAction';
import { getCookie } from '../redux/utils';

import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const OrderInformationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  
  const { 
    wsUserError, 
    wsUserConnected, 
    wsUserOrders, 
    wsUserOrdersTotal, 
    wsUserOrdersTotalToday 
  } = useAppSelector((store) => store.wsUserOrders);

  const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useAppSelector((store) => store.wsOrders);

  useEffect(() => {
    dispatch({ type: wsConnectionStart, payload: '/all' });
    const accessToken = getCookie('accessToken')
    dispatch({ type: wsUserConnectionStart, payload: `?token=${accessToken}` });
    //dispatch({ type: wsUserConnectionStart, payload: ':3002' });
    return () => {
      dispatch({type: wsUserDisconnect});
      dispatch({type: wsDisconnect});
    }
  }, [dispatch]);
  
  const order = useMemo(() => {
      if(wsOrders) {
        const allOrders = wsOrders.find((order) => order._id === id);
        if (allOrders) return allOrders;
      } 
      if(wsUserOrders) {
        const userOrders = wsUserOrders.find((order) => order._id === id);
        if (userOrders) {
          return userOrders;
        } else{
          console.log('orders is empty');
          return null;
        }
      } 
  }, [wsOrders, wsUserOrders]);

  if (!order) return null;

  return (
    <div className={styles['order-information']} >
      <OrderInformationComponent order={order}/>
    </div>
  )
}
