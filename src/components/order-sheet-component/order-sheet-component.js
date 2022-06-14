import styles from './order-sheet-component.module.css';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderSheetComponent = ({ item }) => {

  return (
    <div className={styles['order-sheet-component']}>
      <div className={styles['order-sheet-component-block']}>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_digits-small">
            {`#${"034535"}`}
          </span>
        </p>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_main-small">
            {`${"Сегодня"}, ${"16:20 i-GHT+3"}`}
          </span>
        </p>
      </div>
      <div className={styles['order-sheet-component-block']}>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_main-medium">
            {`${"Death Star Starship Main бургер"}`}
          </span>
        </p>
      </div>
      <div className={styles['order-sheet-component-block']}>
        <p className={styles['order-sheet-component-text']}>
          <span className="text text_type_main-small">
            {`${"Отменен"}`}
          </span>
        </p>
      </div>
      <div className={styles['order-sheet-component-block']}>
        <div className={styles['order-sheet-component-img-block']}>
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />
          <img src={item.image} className={styles['order-sheet-component-img']} />

        </div>
        <div className={styles['order-sheet-component-total-block']}>
          <p className={styles['order-sheet-component-text']}>
            <span className="text text_type_digits-small">
              {`${"44444444444444480"}`}
            </span>
          </p>
          <CurrencyIcon type={'primary'} />
        </div>
      </div>
    </div>
  )
}

export default OrderSheetComponent;