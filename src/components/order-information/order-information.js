import styles from './order-information.module.css';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrderInformationComponent from '../order-information-component/order-information-component.js';

const OrderInformation = () => {
  const items = useSelector(store => store.ingredients.burgerIngredients);
  const { id } = useParams();
  const item = items.find(item => item._id === id);

  return (
    <div className={styles['order-informations']} >
      <OrderInformationComponent item={item}/>
    </div>
  )
}


export default OrderInformation;