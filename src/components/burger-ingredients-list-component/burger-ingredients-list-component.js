import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component.module.css';
import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item.js';
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

const BurgerIngredientsListComponent = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const location = useLocation();

  const history = useHistory();
  const items = useSelector(store => store.ingredients.burgerIngredients).
    filter((item) => item.type === type);
  const onClickItem = (item) => {
    history.push({
      pathname: `/ingredients/${item._id}`,
      state: {background: location},
    });
  };

  return (
    <div className={styles['burger-ingredients-list-component']}>
      {
        items.map((item, index)=>{
          return (
          <div  key={item._id + '1'}>
            <div className={styles['burger-ingredients-list-component-items']} 
              key={item._id}
              onClick={()=> onClickItem(item, location)}
            >
              <BurgerIngredientsListComponentItem 
                key={item._id}
                item = {item}
              />
            </div>
          </div>
          )
        })
      }
    </div>
  );
};

BurgerIngredientsListComponent.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredientsListComponent;
