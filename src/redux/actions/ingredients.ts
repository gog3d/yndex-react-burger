import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
//import { getItemsRequest, getOrderDetailsRequest } from '../fakeApi';
import { getCookie } from '../utils';
import { TIngredient } from '../action-types/data';
import { AppDispatch, AppThunk } from '../action-types';

export const ADD_CONSTRUCTOR_INGREDIENT: 'ADD_CONSTRUCTOR_INGREDIENT' = 'ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_CONSTRUCTOR_INGREDIENT: 'DELETE_CONSTRUCTOR_INGREDIENT' = 'DELETE_CONSTRUCTOR_INGREDIENT';
export const UPDATE_CONSTRUCTOR_INGREDIENTS: 'UPDATE_CONSTRUCTOR_INGREDIENTS' = 'UPDATE_CONSTRUCTOR_INGREDIENTS';

export const ADD_MODAL_INGREDIENTS: 'ADD_MODAL_INGREDIENTS' = 'ADD_MODAL_INGREDIENTS';
export const DELETE_MODAL_INGREDIENTS: 'DELETE_MODAL_INGREDIENTS' = 'DELETE_MODAL_INGREDIENTS';

export const REFRESH_ORDERDETAILS_ITEMS: 'REFRESH_ORDERDETAILS_ITEMS' = 'REFRESH_ORDERDETAILS_ITEMS';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export const GET_ORDERDETAILS_REQUEST: 'GET_ORDERDETAILS_REQUEST' = 'GET_ORDERDETAILS_REQUEST';
export const GET_ORDERDETAILS_SUCCESS: 'GET_ORDERDETAILS_SUCCESS' = 'GET_ORDERDETAILS_SUCCESS';
export const GET_ORDERDETAILS_FAILED: 'GET_ORDERDETAILS_FAILED' = 'GET_ORDERDETAILS_FAILED';

export const REFRESH_BUNS_SCROLL: 'REFRESH_BUNS_SCROLL' = 'REFRESH_BUNS_SCROLL';
export const REFRESH_SAUCES_SCROLL: 'REFRESH_SAUCES_SCROLL' = 'REFRESH_SAUCES_SCROLL';
export const REFRESH_MAINS_SCROLL: 'REFRESH_MAINS_SCROLL' = 'REFRESH_MAINS_SCROLL';

export interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  readonly constructorIngredient: TIngredient;
};
export interface IDeleteConstructorIngredient {
  readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
  readonly index: number;
};

export interface  IUpdateConstructorIngredients {
  readonly type: typeof UPDATE_CONSTRUCTOR_INGREDIENTS;
  readonly ingredients: Array<TIngredient>;
};

export interface  IAddModalIngredients{
  readonly type: typeof ADD_MODAL_INGREDIENTS;
  readonly item: TIngredient;
};

export interface IDeleteModalIngredients {
  readonly type: typeof DELETE_MODAL_INGREDIENTS;
  readonly modalIngredients: Array<TIngredient> | null;
};

export interface  IRefreshOrderdetailsItems{
  readonly type: typeof REFRESH_ORDERDETAILS_ITEMS;
  readonly orderDetailsItems: Array<TIngredient>;
};

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

export interface  IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly burgerIngredients: Array<TIngredient>;
};

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export interface IGetOrderdetailsRequest {
  readonly type: typeof GET_ORDERDETAILS_REQUEST;
};

export interface IGetOrderdetailsSuccess {
  readonly type: typeof GET_ORDERDETAILS_SUCCESS;
  readonly orderDetails: number;
};

export interface IGetOrderdetailsFailed {
  readonly type: typeof GET_ORDERDETAILS_FAILED;
};

export interface IRefreshBunsScroll {
  readonly type: typeof REFRESH_BUNS_SCROLL;
};

export interface IRefreshSaucesScroll {
  readonly type: typeof REFRESH_SAUCES_SCROLL;
};

export interface IRefreshMainsScroll {
  readonly type: typeof REFRESH_MAINS_SCROLL;
};

export type TIngredientsActions = 
| IAddConstructorIngredient 
| IDeleteConstructorIngredient 
| IUpdateConstructorIngredients 
| IAddModalIngredients
| IDeleteModalIngredients 
| IRefreshOrderdetailsItems
| IGetIngredientsRequest 
| IGetIngredientsSuccess 
| IGetIngredientsFailed 
| IGetOrderdetailsRequest 
| IGetOrderdetailsSuccess 
| IGetOrderdetailsFailed 
| IRefreshBunsScroll
| IRefreshSaucesScroll
| IRefreshMainsScroll;

export const getIngredients: AppThunk =  () => (dispatch: AppDispatch) => {
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


export const getOrderDetails: AppThunk = (body = null) => (dispatch: AppDispatch) => {
  const idsComponents = { ingredients: body.map((comp: TIngredient)=>comp._id)};
  const accessToken = getCookie('accessToken');
  dispatch({ type: GET_ORDERDETAILS_REQUEST });
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
      dispatch({ type: GET_ORDERDETAILS_SUCCESS, orderDetails: obj.order.number});
    } else {
      dispatch({ type: GET_ORDERDETAILS_FAILED });
    }
  }).catch((error) => {
    dispatch({ type: GET_ORDERDETAILS_FAILED });
  });
};
