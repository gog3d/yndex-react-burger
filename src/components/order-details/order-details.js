import React, {useState} from 'react';
import styles from './order-details.module.css';
import image from '../../image/7d9fa34b16200edb585c8855f1699057.gif';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
  return (
    <div className={styles['order-details']} >
      <p className={styles['order-details-number']}>
        <span className="text text_type_digits-large">
          034536
        </span>
      </p>
      <p className={styles['order-details-identificator']}>
        <span className="text text_type_main-medium">
          идентификатор заказа
        </span>
      </p>
        <img src={image} className={styles['order-details-img']} />
      <p className={styles['order-details-text1']}>
        <span className="text text_type_main-default">
          Ваш заказ начали готовить
        </span>
      </p>
      <p className={styles['order-details-text2']}>
        <span className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </span>
      </p>
    </div>
  )
}

export default OrderDetails;
