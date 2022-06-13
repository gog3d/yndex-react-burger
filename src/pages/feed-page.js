import styles from './feed-page.module.css';
import { v4 as uuidv4 } from 'uuid';
import OrderSheetComponent from '../components/order-sheet-component/order-sheet-component.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";



export const FeedPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const history = useHistory();
  const items = useSelector(store => store.ingredients.burgerIngredients)//.
//    filter((item) => item.type === type);

  const onClickItem = (item, location) => {
    history.push({
      pathname: `/feed/${item._id}`,
      state: {background: location},
    });
  };


  return(
    <div className={styles["page__content"]}>
      <main className={styles["main"]}>
        <p>
          <span className="text text_type_main-large">
            {`Лента заказов`}
          </span>
        </p>
        <div className={styles['feed-orders']}>
          <div className={styles['feed-orders-sheet']}>
          { items.map((item, index) => {return(
            <div key={uuidv4()} className={styles['feed-orders-item']} onClick={() => onClickItem(item, location)}>
              <OrderSheetComponent item={ item } />
            </div> )}) }
          </div>
          <div className={styles['feed-orders-state']}>
              feed-orders-state
            <div className={styles['feed-orders-orders-list']}>
              <div className={styles['feed-orders-ready']}>
                <p>
                  <span className="text text_type_main-medium">
                    {`Готовы:`}
                  </span>
                </p>
                { [121212, 121212, 121212, 121212, 121212,  ].map((item, index) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item}`}
                    </span>
                  </p>  )}) }
              </div>

              <div className={styles['feed-orders-in-work']}>
                <p>
                  <span className="text text_type_main-medium">
                    {`В работе:`}
                  </span>
                </p>
                { [121212, 121212, 121212, 121212, 121212,  ].map((item, index) => {return(
                  <p  key={uuidv4()} className={styles['feed-orders-text']}>
                    <span className="text text_type_digits-default">
                    {`${item}`}
                    </span>
                  </p>  )}) }

              </div>
            </div>

            <div className={styles['feed-orders-text-block']}>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_main-medium">
                  {`Выполнено за все время:`}
                </span>
              </p>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_digits-large">
                  {`${"28752"}`}
                </span>
              </p>
            </div>

            <div className={styles['feed-orders-text-block']}>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_main-medium">
                  {`Выполнено за сегодня:`}
                </span>
              </p>
              <p className={styles['feed-orders-text']}>
                <span className="text text_type_digits-large">
                  {`${"287"}`}
                </span>
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}