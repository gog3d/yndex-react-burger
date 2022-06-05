import styles from './order-details.module.css';
import image from '../../image/7d9fa34b16200edb585c8855f1699057.gif';
import { useSelector } from 'react-redux';

import { IngredientType, StateType } from '../../services/types/data';

const OrderDetails = () => {

  const { orderDetails } = useSelector((store:StateType) => store.ingredients);

    return (
    <div className={styles['order-details']} >
      <p className={styles['order-details-number']}>
        <span className="text text_type_digits-large">
          {orderDetails}
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
