import { v4 as uuidv4 } from 'uuid';
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
} from '../actions/ingredients.js';



const initialState = {
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
  };

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {...state, burgerIngredientsRequest: true};
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state, 
        burgerIngredientsFailed: false, 
        burgerIngredients: action.burgerIngredients, 
        burgerIngredientsRequest: false};
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state, 
        burgerIngredientsFailed: true, 
        burgerIngredientsRequest: false};
    }
    case GET_ORDERDETAILS_REQUEST: {
      return {...state, orderDetailsRequest: true};
    }
    case GET_ORDERDETAILS_SUCCESS: {
      return {
        ...state, 
        orderDetailsFailed: false, 
        orderDetails: action.orderDetails, 
        orderDetailsRequest: false};
    }
    case GET_ORDERDETAILS_FAILED: {
      return {
        ...state, 
        orderDetailsFailed: true, 
        orderDetailsRequest: false};
    }
    case REFRESH_ORDERDETAILS_ITEMS: {
      return {
        ...state, 
        orderDetailsItems: action.orderDetailsItems,
      };
    }
    case ADD_CONSTRUCTOR_INGREDIENT: {
      return action.constructorIngredient.type === 'bun' ? {
        ...state,
        constructorIngredients: {...state.constructorIngredients, bun: action.constructorIngredient}
      } : {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients, ingredients: [...state.constructorIngredients.ingredients, {...action.constructorIngredient, uuid: uuidv4()}]
          },
        }
    }
    case UPDATE_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        constructorIngredients: {
          ...state.constructorIngredients, 
            ingredients: [...action.ingredients]
          },
        }
    }
    case DELETE_CONSTRUCTOR_INGREDIENT: {
       state.constructorIngredients.ingredients.splice(action.index, 1);
       return {
        ...state, constructorIngredients: {
          ...state.constructorIngredients, ingredients: [
            ...state.constructorIngredients.ingredients
            ]
        },
      }
    }
    case  DELETE_MODAL_INGREDIENTS: {
       return {
       ...state, modalIngredients: {},
       }
    }
    case ADD_MODAL_INGREDIENTS: {
       return {
       ...state, modalIngredients: action.item,
       }
    }
    case REFRESH_BUNS_SCROLL: {
      return {
        ...state, 
        bunsScroll: true, saucesScroll: false, mainsScroll: false,
        };
    }
    case REFRESH_SAUCES_SCROLL: {
      return {
        ...state, 
        bunsScroll: false, saucesScroll: true, mainsScroll: false,
        };
    }
    case REFRESH_MAINS_SCROLL: {
      return {
        ...state, 
        bunsScroll: false, saucesScroll: false, mainsScroll: true,
        };
    }
    default: {
      return state;
    }
  }
};