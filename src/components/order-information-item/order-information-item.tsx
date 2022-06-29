import styles from './order-information-item.module.css';


import { TWsState, TWsDataType, TOrders, RootState }  from '../../redux/action-types';
import { TIngredient}  from '../../redux/action-types/data';
import { Location } from 'history';


const OrderInformationItem: React.FC<{ item: TIngredient }> = ({ item }) => {

  return (
    <div className={styles['order-informations-item']} >
      <p className={styles['order-informations-item-header']}>
        <span className="text text_type_main-large">
           {item._id}
        </span>
      </p>
      <img src={item.image} className={styles['order-informations-item-img']} />
  </div>
  )
}

export default OrderInformationItem;