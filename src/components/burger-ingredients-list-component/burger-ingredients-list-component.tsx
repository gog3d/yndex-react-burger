import styles from './burger-ingredients-list-component.module.css';
import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";
import { TIngredient}  from '../../redux/action-types/data';
import { Location } from 'history';

import { useAppSelector } from '../../redux/hooks';

interface BurgerIngredientsListComponentProps {
  type: string,
}

const BurgerIngredientsListComponent: React.FC<BurgerIngredientsListComponentProps> = (props) => {
  const { type } = props;
  const location = useLocation<Location>();

  const history = useHistory();
  const items = useAppSelector((store) => store.ingredients.burgerIngredients).
    filter((item) => item.type === type);
  const onClickItem = (
    item: TIngredient, location: Location
    ) => {
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
