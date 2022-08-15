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

import { TIngredientsState, TIngredient } from '../../types/data';

export const initialState: TIngredientsState = {
    burgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,
    constructorIngredients: {
      bun: null as (null | TIngredient),
      ingredients: [],
//        ingredients: null as (null | Array<TIngredient>),
    },
    modalIngredient: null as (TIngredient | null),
    //orderDetailsItems: [],
    orderDetailsItems: null as (null | Array<TIngredient>),
    orderDetails: null,
    orderDetailsRequest: false,
    orderDetailsFailed: false,
    bunsScroll: true,
    saucesScroll: false,
    mainsScroll: false,
    
//    restorePassword: {},
//    restorePasswordRequest: false,
//    restorePasswordFailed: false,
  };

export const ingredientsReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getIngredientsRequest, (state, action) => {
    state.burgerIngredientsRequest = true;
  })
  .addCase(getIngredientsSuccess, (state, action) => {
    state.burgerIngredientsFailed = false;
    state.burgerIngredients = action.payload;
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
      state.orderDetails = action.payload;
      state.orderDetailsRequest = false;
    })
    .addCase(getOrderdetailsFailed, (state, action) => {
      state.orderDetailsFailed = true; 
      state.orderDetailsRequest = false;
    })
    .addCase(refreshOrderdetailsItems, (state, action) => {
//      console.log('state.orderDetailsItems',  action.payload)
//      state.orderDetailsItems = action.orderDetailsItems;
        state.orderDetailsItems = action.payload;
    })
    .addCase(addConstructorIngredient, (state, action) => {
      //if (action.constructorIngredient.type === 'bun') {
        if (action.payload.type === 'bun') {
        state.constructorIngredients.bun = action.payload;
        //state.constructorIngredients.bun = action.constructorIngredient;
      } else {
        //state.constructorIngredients.ingredients.push({...action.constructorIngredient, uuid: uuidv4()});
        state.constructorIngredients.ingredients.push({...action.payload, uuid: uuidv4()});
      }
    })
    .addCase(updateConstructorIngredients, (state, action) => {
      //state.constructorIngredients.ingredients = [...action.ingredients];
      state.constructorIngredients.ingredients = [...action.payload];
    })
    .addCase(deleteConstructorIngredient, (state, action) => {
      //state.constructorIngredients.ingredients.splice(action.index, 1);
      state.constructorIngredients.ingredients.splice(action.payload, 1);
      //...state, constructorIngredients: {...state.constructorIngredients, ingredients: [...state.constructorIngredients.ingredients]
    })
    .addCase(deleteModalIngredients, (state, action) => {
      //state.modalIngredient = {};
      state.modalIngredient = null;
    })
    .addCase(addModalIngredients, (state, action) => {
      //state.modalIngredient = action.item;
      state.modalIngredient = action.payload;
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