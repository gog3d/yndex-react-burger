import React, {useEffect } from 'react';
import styles from './order-information.module.css';
import { useMemo } from 'react';import { useSelector } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import OrderInformationComponent from '../order-information-component/order-information-component';
import { useAppSelector } from '../../redux/hooks';

const OrderInformation: React.FC = () => {
  
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

  const { id } = useParams<{ id: string }>();

  const order = useMemo(() => {
    if(wsOrders) {
      const userOrders = wsUserOrders.find((order) => order._id === id);
      const orders = wsOrders.find((order) => order._id === id);
      if(orders) {
        return orders;
      } else if(userOrders) {
        return userOrders;
      } else{
        console.log('orders is empty');
        return null;
      }
    }
  }, [wsOrders]);

  if (!order) return null;

  return (
    <div className={styles['order-information']} >
      <OrderInformationComponent order={order}/>
    </div>
  )
}

export default OrderInformation;