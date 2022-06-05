import PropTypes from 'prop-types';
import styles from './burger-ingredients-list-component.module.css';
import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item';
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

import { StateType, IngredientType }  from '../../services/types/data';

interface BurgerIngredientsListComponentProps {
  type: string,
}


const BurgerIngredientsListComponent: React.FC<BurgerIngredientsListComponentProps> = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const location = useLocation();

  const history = useHistory();
  const items = useSelector((store: StateType) => store.ingredients.burgerIngredients).
    filter((item) => item.type === type);
  
    const onClickItem = (item: IngredientType, location: any): void => {
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

export default BurgerIngredientsListComponent;
