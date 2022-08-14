import { createAction } from "@reduxjs/toolkit";
import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';

import { setCookie, getCookie, deleteCookie, fetchRequest } from '../utils';
//import { getItemsRequest, getOrderDetailsRequest } from './fakeApi';
import { TIngredient } from '../../types/data';

import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  
  ADD_MODAL_INGREDIENTS,
  DELETE_MODAL_INGREDIENTS,
  
 
  REFRESH_ORDERDETAILS_ITEMS,

  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
  
  REFRESH_BUNS_SCROLL,
  REFRESH_SAUCES_SCROLL,
  REFRESH_MAINS_SCROLL,

} from '../action-types';

import { AppDispatch } from '../store';

export const addConstructorIngredient = createAction(ADD_CONSTRUCTOR_INGREDIENT);
export const deleteConstructorIngredient = createAction(DELETE_CONSTRUCTOR_INGREDIENT);
export const updateConstructorIngredients = createAction(UPDATE_CONSTRUCTOR_INGREDIENTS);

export const addModalIngredients = createAction(ADD_MODAL_INGREDIENTS);
export const deleteModalIngredients = createAction(DELETE_MODAL_INGREDIENTS);

export const refreshOrderdetailsItems = createAction(REFRESH_ORDERDETAILS_ITEMS);

export const getIngredientsRequest = createAction(GET_INGREDIENTS_REQUEST);
export const getIngredientsSuccess = createAction(GET_INGREDIENTS_SUCCESS);
export const getIngredientsFailed = createAction(GET_INGREDIENTS_FAILED);

export const getOrderdetailsRequest = createAction(GET_ORDERDETAILS_REQUEST);
export const getOrderdetailsSuccess = createAction(GET_ORDERDETAILS_SUCCESS);
export const getOrderdetailsFailed = createAction(GET_ORDERDETAILS_FAILED)

export const refreshBunsScroll = createAction(REFRESH_BUNS_SCROLL);
export const refreshSaucesScroll = createAction(REFRESH_SAUCES_SCROLL);
export const refreshMainsScroll = createAction(REFRESH_MAINS_SCROLL);

export type TIngredientsAction = ReturnType<typeof addConstructorIngredient>
                                | ReturnType<typeof deleteConstructorIngredient>
                                | ReturnType<typeof updateConstructorIngredients>
                                | ReturnType<typeof addModalIngredients>
                                | ReturnType<typeof deleteModalIngredients>
                                | ReturnType<typeof refreshOrderdetailsItems>
                                | ReturnType<typeof getIngredientsRequest>
                                | ReturnType<typeof getIngredientsSuccess>
                                | ReturnType<typeof getIngredientsFailed>
                                | ReturnType<typeof getOrderdetailsRequest>
                                | ReturnType<typeof getOrderdetailsSuccess>
                                | ReturnType<typeof getOrderdetailsFailed>
                                | ReturnType<typeof refreshBunsScroll>
                                | ReturnType<typeof refreshSaucesScroll>
                                | ReturnType<typeof refreshMainsScroll>;

export const getIngredients =  () => (dispatch: AppDispatch) => {
  dispatch({ type: getIngredientsRequest });
  fetch(baseURL + 'ingredients').then(checkResponse).then(obj => {
  //getItemsRequest().then(obj => {
    if (obj && obj.success) {
      dispatch({ type: getIngredientsSuccess, burgerIngredients: obj.data });

      } else {
        dispatch({ type: getIngredientsFailed });
      }
    }).catch((error) => {
      dispatch({ type: getIngredientsFailed });
    });
};

export const getOrderDetails = (body: Array<TIngredient>) => (dispatch: AppDispatch) => {
  const idsComponents = {ingredients: body.map((comp)=>comp._id)};
  const accessToken = getCookie('accessToken');
  dispatch({ type: getOrderdetailsRequest });
  fetch(baseURL + 'orders', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(idsComponents),
  }).then(checkResponse).then(obj => {
    console.log(obj)
    if (obj) {
      dispatch({ type: getOrderdetailsSuccess, orderDetails: obj.order.number});
    } else {
      dispatch({ type: getOrderdetailsFailed });
    }
  }).catch((error) => {
    dispatch({ type: getOrderdetailsFailed });
  });
};
