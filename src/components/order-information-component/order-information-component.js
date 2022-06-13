import styles from './order-information-component.module.css';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderInformationComponentItem from '../order-information-component-item/order-information-component-item.js';

const OrderInformationComponent = ({ item }) => {

  if(!item) return null;

  return (
    <div className={styles['order-informations-component']} >
      <div className={styles['order-number-header']}>
        <p className={styles['order-number']}>
          <span className="text text_type_digits-default">
            {`#${"034533"}`}
          </span>
        </p>
      </div>
      <div className={styles['order-informations-header']}>
        <p className={styles['order-burger-name']}>
          <span className="text text_type_main-medium">
            {`${"Black Hole Singulariti острый бургер"}`}
          </span>
        </p>
        <p className={styles['order-state']}>
          <span className="text text_type_main-small">
            {`${"Выполнен"}`}
          </span>
        </p>
        <p className={styles['order-burger-compound-text']}>
          <span className="text text_type_main-medium">
            Состав:
          </span>
        </p>
      </div>
      <div className={styles['order-burger-compound']}>
        
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
        <OrderInformationComponentItem item={item}/>
      </div>
      <div className={styles['order-footer']}>
        <p className={styles['order-date']}>
          <span className="text text_type_main-smalle">
            {"date"}
          </span>
        </p>
        <div className={styles['order-total-container']}>
          <p className={styles['order-total']}>
            <span className="text text_type_digits-default">
              {`${item.price}`}
            </span>
          </p>
          <CurrencyIcon type={'primary'} />
        </div>
      </div>
  </div>
  )
}

export default OrderInformationComponent;