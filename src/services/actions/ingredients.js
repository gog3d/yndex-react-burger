import { baseURL }  from '../../utils/config.js';
import { checkResponse }  from '../utils.js';
import { getItemsRequest, getOrderDetailsRequest } from '../fakeApi';

export const ADD_CONSTRUCTOR_INGREDIENT='ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_CONSTRUCTOR_INGREDIENT='DELETE_CONSTRUCTOR_INGREDIENT';
export const UPDATE_CONSTRUCTOR_INGREDIENTS='UPDATE_CONSTRUCTOR_INGREDIENTS';

export const ADD_MODAL_INGREDIENTS='ADD_MODAL_INGREDIENTS';
export const DELETE_MODAL_INGREDIENTS='DELETE_MODAL_INGREDIENTS';

export const REFRESH_ORDERDETAILS_ITEMS = 'REFRESH_ORDERDETAILS';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_ORDERDETAILS_REQUEST = 'GET_ORDERDETAILS_REQUEST';
export const GET_ORDERDETAILS_SUCCESS = 'GET_ORDERDETAILS_SUCCESS';
export const GET_ORDERDETAILS_FAILED = 'GET_ORDERDETAILS_FAILED';

export const REFRESH_BUNS_SCROLL = 'REFRESH_BUNS_SCROLL';
export const REFRESH_SAUCES_SCROLL = 'REFRESH_SAUCES_SCROLL';
export const REFRESH_MAINS_SCROLL = 'REFRESH_MAINS_SCROLL';

export const getIngredients =  () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  fetch(baseURL + 'ingredients').then(checkResponse).then(obj => {
//  getItemsRequest().then(obj => {
    if (obj && obj.success) {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, burgerIngredients: obj.data });

      } else {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      }
    }).catch((error) => {
      dispatch({ type: GET_INGREDIENTS_FAILED });
    });
};


export const getOrderDetails = (body = null) => (dispatch) => {
  const idsComponents = {ingredients: body.map((comp)=>comp._id)};
  dispatch({ type: GET_ORDERDETAILS_REQUEST });
  fetch(baseURL + 'orders', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(idsComponents),
  }).then(checkResponse).then(obj => {
    if (obj) {
      dispatch({ type: GET_ORDERDETAILS_SUCCESS, orderDetails: obj.order.number});
    } else {
      dispatch({ type: GET_ORDERDETAILS_FAILED });
    }
  }).catch((error) => {
    dispatch({ type: GET_ORDERDETAILS_FAILED });
  });
};
