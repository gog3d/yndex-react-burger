import styles from './order-information-page.module.css';
import { useMemo } from 'react'
import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

import OrderInformationComponent from '../components/order-information-component/order-information-component';
import { RootState }  from '../redux/store';
import { TOrders } from '../types/data';

import { wsUserConnectionStart } from '../redux/actions/wsUserAction';
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
  } = useAppSelector((store: RootState) => store.wsUserOrders);

  const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useAppSelector((store: RootState) => store.wsOrders);


  useEffect(() => {
    const accessToken = getCookie('accessToken')
    dispatch({ type: wsUserConnectionStart, payload: `?token=${accessToken}` });
    //dispatch({ type: wsUserConnectionStart, payload: ':3002' });
  }, [dispatch]);
  
  const order = useMemo(() => {
      if(wsOrders) {
        const allOrders = wsOrders.find((order: TOrders) => order._id === id);
        if (allOrders) return allOrders;
      } 
      if(wsUserOrders) {
        const userOrders = wsUserOrders.find((order: TOrders) => order._id === id);
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
