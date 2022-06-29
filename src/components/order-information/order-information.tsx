import styles from './order-information.module.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  useParams
} from "react-router-dom";

import { TWsState, TWsDataType, TOrders }  from '../../redux/action-types';
import { TIngredient}  from '../../redux/action-types/data';
import { Location } from 'history';


import OrderInformationComponent from '../order-information-component/order-information-component';

const OrderInformation = () => {
  const { success, orders, total, totalToday } = useSelector((store: TWsDataType) => store.orders.orders);
  const { id } = useParams<{ id: string }>();

  const order = useMemo(() => {
    if(orders) {
      return orders.find((order: TOrders) => order._id === id)
    }
  }, [orders]);

  if (!order) return null;

  return (
    <div className={styles['order-information']} >
      <OrderInformationComponent order={order}/>
    </div>
  )
}

export default OrderInformation;