import styles from './order-information-component-item.module.css';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderInformationComponentItem = ({ item }) => {

  return (
    <div className={styles['order-informations-component-item']} >
      <div className={styles['order-informations-component-item-left']}>
        <img src={item.image} className={styles['order-informations-component-item-img']} />
        <p className={styles['order-informations-component-item-name']}>
          <span className="text text_type_main-small">
            {`${item.name}`}
          </span>
        </p>
      </div>

      <div className={styles['order-informations-component-item-right']}>
        <p className={styles['order-informations-component-item-price']}>
          <span className="text text_type_digits-default">
            {`${item.price}x${item.price}`}
          </span>
        </p>
        <CurrencyIcon type={'primary'} />
      </div>
    </div>
  )
}

export default OrderInformationComponentItem;