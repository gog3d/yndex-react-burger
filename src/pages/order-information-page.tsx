import styles from './order-information-page.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react'
import React, { useState, useEffect, useCallback } from 'react';
import {
  /*useHistory,
  useLocation,*/
  useParams
} from "react-router-dom";

import OrderInformationComponent from '../components/order-information-component/order-information-component';
import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';

import { wsUserConnectionStart } from '../redux/actions/wsUserAction';

export const OrderInformationPage: React.FC = () => {
  const dispatch = useDispatch();
  //const { orders } = useSelector((store: RootState) => store.orders.orders);
  const { id } = useParams<{ id: string }>();

  
  const { 
    wsUserError, 
    wsUserConnected, 
    wsUserOrders, 
    wsUserOrdersTotal, 
    wsUserOrdersTotalToday 
  } = useSelector((store: TOrders) => store.wsUserOrders);

  const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useSelector((store: TOrders) => store.wsOrders);


  useEffect(() => {
    dispatch({ type: wsUserConnectionStart, payload: ':3002' });
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
