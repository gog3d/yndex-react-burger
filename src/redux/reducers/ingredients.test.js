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

//console.dir({ bun, item, ingredients, deleteIndexIngredients, ingredientsWithMain });

describe('ingrediets reducer', () => {
  it('return initil ingrediets state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState)
  })
  it('should handle getIngredientsRequest', () => {
    expect(ingredientsReducer(initialState, {
      type: getIngredientsRequest,
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: true,
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
    })
  })
  it('should handlegetIngredientsFailed ', () => {
    expect(ingredientsReducer(initialState, {
      type: getIngredientsFailed,
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: true,
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
    })
  })
  it('should handle getIngredientsSuccess', () => {
    expect(ingredientsReducer(initialState, {
      type: getIngredientsSuccess,
      burgerIngredients: data,
    }
  )).toEqual(
    {
      burgerIngredients: data,
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
    })
  })
  it('should handle getOrderdetailsRequest', () => {
    expect(ingredientsReducer(initialState, {
      type: getOrderdetailsRequest,
    }
  )).toEqual(
    {
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
      orderDetailsRequest: true,
      orderDetailsFailed: false,
      bunsScroll: true,
      saucesScroll: false,
      mainsScroll: false,
      
      restorePassword: {},
      restorePasswordRequest: false,
      restorePasswordFailed: false,
    })
  })
  it('should handle getOrderdetailsFailed', () => {
    expect(ingredientsReducer(initialState, {
      type: getOrderdetailsFailed,
    }
  )).toEqual(
    {
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
      orderDetailsFailed: true,
      bunsScroll: true,
      saucesScroll: false,
      mainsScroll: false,
      
      restorePassword: {},
      restorePasswordRequest: false,
      restorePasswordFailed: false,
    })
  })
  it('should handle getOrderdetailsSuccess', () => {
    expect(ingredientsReducer(initialState, {
      type: getOrderdetailsSuccess,
      orderDetails: orderDetails,
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: {},
        ingredients: [],
      },
      modalIngredient: {},
      orderDetailsItems: null,
      orderDetails: orderDetails,
      orderDetailsRequest: false,
      orderDetailsFailed: false,
      bunsScroll: true,
      saucesScroll: false,
      mainsScroll: false,
      
      restorePassword: {},
      restorePasswordRequest: false,
      restorePasswordFailed: false,
    })
  })
  it('should handle refreshOrderdetailsItems', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshOrderdetailsItems,
      orderDetailsItems: orderDetailsItems
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: {},
        ingredients: [],
      },
      modalIngredient: {},
      orderDetailsItems: orderDetailsItems,
      orderDetails: null,
      orderDetailsRequest: false,
      orderDetailsFailed: false,
      bunsScroll: true,
      saucesScroll: false,
      mainsScroll: false,
      
      restorePassword: {},
      restorePasswordRequest: false,
      restorePasswordFailed: false,
    })
  })
  it('should handle addConstructorIngredient bun', () => {
    expect(ingredientsReducer(initialState, {
      type: addConstructorIngredient,
      constructorIngredient: bun
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: bun,
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
    })
  })
  it('should handle addConstructorIngredient main', () => {
    expect(ingredientsReducer({
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: bun,
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
    }, {
      type: addConstructorIngredient,
      constructorIngredient: item
    }
  )).toMatchObject(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: bun,
        ingredients: ingredientsWithMain,
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
    })
  })

  it('should handle updateConstructorIngredients', () => {
    expect(ingredientsReducer(initialState, {
      type: updateConstructorIngredients,
      ingredients: ingredients
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: {},
        ingredients: ingredients,
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
    })
  })
  it('should handle deleteConstructorIngredient', () => {
    expect(ingredientsReducer({
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: {},
        ingredients: ingredients,
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
    }, {
      type: deleteConstructorIngredient,
      index: 1
    }
  )).toEqual(
    {
      burgerIngredients: [],
      burgerIngredientsRequest: false,
      burgerIngredientsFailed: false,
      constructorIngredients: {
        bun: {},
        ingredients: deleteIndexIngredients,
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
    })
  })
  it('should handle deleteModalIngredients', () => {
    expect(ingredientsReducer(initialState, {
      type: deleteModalIngredients,
    }
  )).toEqual(
    {
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
    })
  })
  it('should handle refreshBunsScroll', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshBunsScroll,
    }
  )).toEqual(
    {
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
    })
  })
  it('should handle refreshSaucesScroll', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshSaucesScroll,
    }
  )).toEqual(
    {
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
      bunsScroll: false,
      saucesScroll: true,
      mainsScroll: false,
      
      restorePassword: {},
      restorePasswordRequest: false,
      restorePasswordFailed: false,
    })
  })
  it('should handle refreshMainScroll', () => {
    expect(ingredientsReducer(initialState, {
      type: refreshMainsScroll,
    }
  )).toEqual(
    {
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
      bunsScroll: false,
      saucesScroll: false,
      mainsScroll: true,
      
      restorePassword: {},
      restorePasswordRequest: false,
      restorePasswordFailed: false,
    })
  })

})