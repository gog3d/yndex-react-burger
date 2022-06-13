import styles from './order-information-page.module.css';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import OrderInformationComponent from '../components/order-information-component/order-information-component.js';

export const OrderInformationPage = () => {
  const items = useSelector(store => store.ingredients.burgerIngredients);
  const { id } = useParams();
  const item = items.find(item => item._id === id);
  if (!item) return null;
  
  return (
    <div className={styles['order-information']} >
      <OrderInformationComponent item={item}/>
    </div>
  )
}
