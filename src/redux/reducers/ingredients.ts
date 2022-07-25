import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
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

import { TIngredientsState } from '../../types/data';

const initialState: TIngredientsState = {
    burgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,
    constructorIngredients: {
      bun: {},
      ingredients: [],
    },
    modalIngredient: {},
    orderDetailsItems: null,
    orderDetails: null,
    orderDetailsRequest: false,
    orderDetailsFailed: false,
    bunsScroll: true,
    saucesScroll: false,
    mainsScroll: false,
    
    restorePassword: {},
    restorePasswordRequest: false,
    restorePasswordFailed: false,
  };

export const ingredientsReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getIngredientsRequest, (state, action) => {
    state.burgerIngredientsRequest = true;
  })
  .addCase(getIngredientsSuccess, (state, action) => {
    state.burgerIngredientsFailed = false;
    state.burgerIngredients = action.burgerIngredients;
    state.burgerIngredientsRequest = false;
  })
    .addCase(getIngredientsFailed, (state, action) => {
      state.burgerIngredientsFailed = true; 
      state.burgerIngredientsRequest = false;
    })
    .addCase(getOrderdetailsRequest, (state, action) => {
      state.orderDetailsRequest = true;
    })
    .addCase(getOrderdetailsSuccess, (state, action) => {
      state.orderDetailsFailed = false; 
      state.orderDetails = action.orderDetails;
      state.orderDetailsRequest = false;
    })
    .addCase(getOrderdetailsFailed, (state, action) => {
      state.orderDetailsFailed = true; 
      state.orderDetailsRequest = false;
    })
    .addCase(refreshOrderdetailsItems, (state, action) => {
      state.orderDetailsItems = action.orderDetailsItems;
    })
    .addCase(addConstructorIngredient, (state, action) => {
      if (action.constructorIngredient.type === 'bun') {
        state.constructorIngredients.bun = action.constructorIngredient;
      } else {
        state.constructorIngredients.ingredients.push({...action.constructorIngredient, uuid: uuidv4()});
      }
    })
    .addCase(updateConstructorIngredients, (state, action) => {
      state.constructorIngredients = [...action.ingredients];
    })
    .addCase(deleteConstructorIngredient, (state, action) => {
      state.constructorIngredients.ingredients.splice(action.index, 1);
      //...state, constructorIngredients: {...state.constructorIngredients, ingredients: [...state.constructorIngredients.ingredients]
    })
    .addCase(deleteModalIngredients, (state, action) => {
      state.modalIngredients = {};
    })
    .addCase(addModalIngredients, (state, action) => {
      state.modalIngredients = action.item;
    })
    .addCase(refreshBunsScroll, (state, action) => {
      state.bunsScroll = true;
      state.saucesScroll = false;
      state.mainsScroll = false;
    })
    .addCase(refreshSaucesScroll, (state, action) => {
      state.bunsScroll = false;
      state.saucesScroll = true;
      state.mainsScroll = false;
    })
    .addCase(refreshMainsScroll, (state, action) => {
      state.bunsScroll = false;
      state.saucesScroll = false;
      state.mainsScroll = true;
    })
});