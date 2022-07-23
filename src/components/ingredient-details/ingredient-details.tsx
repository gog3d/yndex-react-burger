import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { RootState }  from '../../redux/action-types';
import { TIngredient}  from '../../redux/action-types/data';
import { Location } from 'history';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const IngredientDetails: React.FC = () => {
  const items = useAppSelector((store: RootState) => store.ingredients.burgerIngredients);
  const { ingredientId } = useParams<{ ingredientId: string }>();

  const item = items.find(e => e._id === ingredientId);

  if (!item) return null;

  return (
    <div className={styles['ingredient-details']} >
      <p className={styles['ingredient-details-header']}>
        <span className="text text_type_main-large">
          Детали ингредиента
        </span>
      </p>
      <img src={item.image} className={styles['ingredient-details-img']} />
      <p className={styles['ingredient-details-identificator']}>
        <span className="text text_type_main-medium">
          {item.name}
        </span>
      </p>
      <div className={styles['ingredient-details-text']}>
        <p className={styles['ingredient-details-text1']}>
          <span className="text text_type_main-default text_color_inactive">
            Каллории, ккал
          </span>
          <span className="text text_type_main-default text_color_inactive">
            {item.calories}
          </span>
        </p>
        <p className={styles['ingredient-details-text2']}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_main-default text_color_inactive">
            {item.proteins}
          </span>
        </p>
        <p className={styles['ingredient-details-text3']}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_main-default text_color_inactive">
            {item.fat}
          </span>
        </p>
        <p className={styles['ingredient-details-text4']}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_main-default text_color_inactive">
            {item.carbohydrates}
          </span>
        </p>
      </div>
    </div>
  )
}

export default IngredientDetails;

