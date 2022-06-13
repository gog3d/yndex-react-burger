import styles from './order-information-item.module.css';
import { useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

const OrderInformationItem = ({ item }) => {
//  const items = useSelector(store => store.ingredients.burgerIngredients);


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