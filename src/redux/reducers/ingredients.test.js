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

import { initialState, ingredientsReducer } from '../reducers/ingredients';
import { 
  burgerIngredients, 
  orderDetails, 
  orderDetailsItems, 
  bun, 
  item, 
  ingredients, 
  ingredientsWithMain,
  deleteIndexIngredients
} from '../../utils/redux-test-utils';
const data = burgerIngredients.data;

describe('ingrediets reducer', () => {
  it('return initil ingrediets state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState)
  })
  it('should handle getIngredientsRequest', () => {
    expect(ingredientsReducer(initialState, {
      type: getIngredientsRequest,
    }
  )).toEqual(
    { ...initialState, burgerIngredientsRequest: true })
  })
  it('should handlegetIngredientsFailed ', () => {
    expect(ingredientsReducer(initialState, {
      type: getIngredientsFailed,
    }
  )).toEqual(
    { ...initialState, burgerIngredientsFailed: true })
  })
  it('should handle getIngredientsSuccess', () => {
    expect(ingredientsReducer(initialState, {
      type: getIngredientsSuccess,
      payload: data,
    }
  )).toEqual(
    { ...initialState, burgerIngredients: data })
  })
  it('should handle getOrderdetailsRequest', () => {
    expect(ingredientsReducer(initialState, {
      type: getOrderdetailsRequest,
    }
  )).toEqual(
    { ...initialState, orderDetailsRequest: true })
  })
  it('should handle getOrderdetailsFailed', () => {
    expect(ingredientsReducer(initialState, {
      type: getOrderdetailsFailed,
    }
  )).toEqual(
    { ...initialState, orderDetailsFailed: true })
  })
  it('should handle getOrderdetailsSuccess', () => {
    expect(ingredientsReducer(initialState, {
      type: getOrderdetailsSuccess,
      payload: orderDetails,
    }
  )).toEqual(
    { ...initialState, orderDetails: orderDetails })
  })
  it('should handle refreshOrderdetailsItems', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshOrderdetailsItems,
      payload: orderDetailsItems
    }
  )).toEqual(
    { ...initialState, orderDetailsItems: orderDetailsItems })
  })
  
  it('should handle addConstructorIngredient bun', () => {
    expect(ingredientsReducer(initialState, {
      type: addConstructorIngredient,
      payload: bun
    }
  )).toEqual(
    { ...initialState, constructorIngredients: {...initialState.constructorIngredients, bun: bun } })
  })
  
  it('should handle addConstructorIngredient main', () => {
    expect(ingredientsReducer(
    {
      ...initialState, constructorIngredients: {
        ...initialState.constructorIngredients, bun: bun 
        } 
    }, {
      type: addConstructorIngredient,
      payload: item
    }
  )).toMatchObject(
    { ...initialState,
      constructorIngredients: {
        bun: bun,
        ingredients: ingredientsWithMain,
      },
    })
  })
it('should handle updateConstructorIngredients', () => {
    expect(ingredientsReducer(initialState, {
      type: updateConstructorIngredients,
      payload: ingredients
    }
  )).toEqual(
    { ...initialState,
      constructorIngredients: {
        bun: null,
        ingredients: ingredients,
      },
    })
  })
  it('should handle deleteConstructorIngredient', () => {
    expect(ingredientsReducer({ ...initialState, 
      constructorIngredients: {
        bun: null,
        ingredients: ingredients,
      },
    }, {
      type: deleteConstructorIngredient,
      payload: 1
    }
  )).toEqual(
    { ...initialState,
      constructorIngredients: {
        bun: null,
        ingredients: deleteIndexIngredients,
      },
    })
  })
  it('should handle deleteModalIngredients', () => {
    expect(ingredientsReducer(initialState, {
      type: deleteModalIngredients,
    }
  )).toEqual(
    { ...initialState,
    })
  })
  it('should handle refreshBunsScroll', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshBunsScroll,
    }
  )).toEqual(
    { ...initialState, bunsScroll: true })
  })
  
  it('should handle refreshSaucesScroll', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshSaucesScroll,
    }
  )).toEqual(
    { ...initialState, bunsScroll: false, saucesScroll: true })
  })
  it('should handle refreshMainScroll', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshMainsScroll,
    }
  )).toEqual(
    { ...initialState, bunsScroll: false, mainsScroll: true })
  })
})