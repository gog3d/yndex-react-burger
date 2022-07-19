import styles from './order-information.module.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  useParams
} from "react-router-dom";

//import { TWsState, TWsDataType, TOrders }  from '../../redux/action-types';
//import { TIngredient}  from '../../redux/action-types/data';
//import { Location } from 'history';


import OrderInformationComponent from '../order-information-component/order-information-component';

const OrderInformation = () => {
  
  const { 
    wsUserError, 
    wsUserConnected, 
    wsUserOrders, 
    wsUserOrdersTotal, 
    wsUserOrdersTotalToday 
  } = useSelector((store) => store.wsUserOrders);

  const { 
    wsError, 
    wsConnected, 
    wsOrders, 
    wsOrdersTotal, 
    wsOrdersTotalToday 
  } = useSelector((store) => store.wsOrders);

  const { id } = useParams();

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