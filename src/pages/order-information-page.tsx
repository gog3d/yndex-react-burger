import styles from './order-information-page.module.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react'
import {
  /*useHistory,
  useLocation,*/
  useParams
} from "react-router-dom";

import OrderInformationComponent from '../components/order-information-component/order-information-component';
import { TWsState, TWsDataType, TOrders, RootState }  from '../redux/action-types';

export const OrderInformationPage: React.FC = () => {
  const { orders } = useSelector((store: RootState) => store.orders.orders);
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
