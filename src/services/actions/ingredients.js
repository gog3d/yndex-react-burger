import { baseURL }  from '../../utils/config.js';
import { getItemsRequest } from '../fakeApi';

export const ADD_CONSTRUCTOR_INGREDIENT='ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_CONSTRUCTOR_INGREDIENT='DELETE_CONSTRUCTOR_INGREDIENT';

export const GET_CONSTRUCTOR_INGREDIENTS='GET_CONSTRUCTOR_INGREDIENTS';

export const ADD_MODAL_INGREDIENTS='ADD_MODAL_INGREDIENTS';
export const DELETE_MODAL_INGREDIENTS='DELETE_MODAL_INGREDIENTS';

export const REFRESH_ORDERDETAILS = 'REFRESH_ORDERDETAILS';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_ORDERDETAILS_REQUEST = 'GET_ORDERDETAILS_REQUEST';
export const GET_ORDERDETAILS_SUCCESS = 'GET_ORDERDETAILS_SUCCESS';
export const GET_ORDERDETAILS_FAILED = 'GET_ORDERDETAILS_FAILED';

export const getIngredients =  () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  fetch(baseURL + 'ingredients').then(res => res.json()).then(obj => {
    if (obj && obj.success) {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, burgerIngredients: obj.data });
      const constructorIngredients = [
        obj.data.find((element) => element.type === 'bun'), 
        obj.data.find((element) => element.type === 'main'), 
        obj.data.find((element) => element.type === 'sauce')
      ];
      dispatch({ type: GET_CONSTRUCTOR_INGREDIENTS, constructorIngredients: constructorIngredients});
    } else {
      dispatch({ type: GET_INGREDIENTS_FAILED });
    }
  })
};


export const getOrderDetails = async () => (dispatch) => {

};
