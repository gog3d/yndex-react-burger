import styles from './ingredient-page.module.css';
import image from '../image/7d9fa34b16200edb585c8855f1699057.gif';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const IngredientPage = () => {
  const { burgerIngredients } = useSelector(store => store.ingredients);
  const { orderDetails } = useSelector(store => store.ingredients);
  const { ingredientId } = useParams();

//  console.log(burgerIngredients, ingredientId);

  const item = burgerIngredients[ingredientId];
  return (
    <div className={styles['ingredient-details']} >
    {
    item &&
     <>
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
      </>
      }
    </div>
    
  )
}