import styles from './order-information-component-item.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { TWsState, TWsDataType, TOrders, RootState }  from '../../redux/action-types';
import { TIngredient}  from '../../redux/action-types/data';
import { Location } from 'history';


const OrderInformationComponentItem: React.FC<{ item: TIngredient, equal: number }> = ({ item, equal}) => {

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
            {`${equal}x${item.price}`}
          </span>
        </p>
        <CurrencyIcon type={'primary'} />
      </div>
    </div>
  )
}

export default OrderInformationComponentItem;