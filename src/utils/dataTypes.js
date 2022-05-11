import {PropTypes} from 'prop-types';

export const IngredientType = PropTypes.shape({
    "_id": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired,
    "proteins": PropTypes.number.isRequired,
    "fat": PropTypes.number.isRequired,
    "carbohydrates": PropTypes.number.isRequired,
    "calories": PropTypes.number.isRequired,
    "price": PropTypes.number.isRequired,
    "image": PropTypes.string.isRequired,
    "image_mobile": PropTypes.string.isRequired,
    "image_large": PropTypes.string.isRequired,
    "__v": PropTypes.number.isRequired
  });

/*

BurgerConstructorListComponent.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};


BurgerIngredientsListComponent.propTypes = {
  items: PropTypes.array.isRequired,
};


BurgerIngredientsListComponentItem.propTypes = {
  item: PropTypes.object.isRequired,
};


IngredientDetails.propTypes = {
  item:  PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "proteins": PropTypes.number.isRequired,
    "fat": PropTypes.number.isRequired,
    "carbohydrates": PropTypes.number.isRequired,
    "calories": PropTypes.number.isRequired,
    "image": PropTypes.string.isRequired,
  }),
};


*/