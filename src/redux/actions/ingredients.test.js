import { actionCreatorDescribeCallback } from '../../utils/redux-test-utils'
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

import {
  addConstructorIngredient,
  deleteConstructorIngredient,
  updateConstructorIngredients,
  
  addModalIngredients,
  deleteModalIngredients,
  
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  
  getOrderdetailsRequest,
  getOrderdetailsSuccess,
  getOrderdetailsFailed,
  
  refreshBunsScroll,
  refreshSaucesScroll,
  refreshMainsScroll,

  refreshOrderdetailsItems,

} from '../actions/ingredients';

actionCreatorDescribeCallback(addConstructorIngredient, ADD_CONSTRUCTOR_INGREDIENT);
actionCreatorDescribeCallback(deleteConstructorIngredient, DELETE_CONSTRUCTOR_INGREDIENT);
actionCreatorDescribeCallback(updateConstructorIngredients, UPDATE_CONSTRUCTOR_INGREDIENTS);
actionCreatorDescribeCallback(addModalIngredients, ADD_MODAL_INGREDIENTS);
actionCreatorDescribeCallback(deleteModalIngredients, DELETE_MODAL_INGREDIENTS);
 
actionCreatorDescribeCallback(refreshOrderdetailsItems, REFRESH_ORDERDETAILS_ITEMS);

actionCreatorDescribeCallback(getIngredientsRequest, GET_INGREDIENTS_REQUEST);
actionCreatorDescribeCallback(getIngredientsSuccess, GET_INGREDIENTS_SUCCESS);
actionCreatorDescribeCallback(getIngredientsFailed, GET_INGREDIENTS_FAILED);
actionCreatorDescribeCallback(getOrderdetailsRequest, GET_ORDERDETAILS_REQUEST);
actionCreatorDescribeCallback(getOrderdetailsSuccess, GET_ORDERDETAILS_SUCCESS);
actionCreatorDescribeCallback(getOrderdetailsFailed, GET_ORDERDETAILS_FAILED);

actionCreatorDescribeCallback(refreshBunsScroll, REFRESH_BUNS_SCROLL);
actionCreatorDescribeCallback(refreshSaucesScroll, REFRESH_SAUCES_SCROLL);
actionCreatorDescribeCallback(refreshMainsScroll, REFRESH_MAINS_SCROLL);

