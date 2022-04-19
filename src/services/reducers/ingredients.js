import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  GET_CONSTRUCTOR_INGREDIENTS,
  ADD_MODAL_INGREDIENTS,
  DELETE_MODAL_INGREDIENTS,
  REFRESH_ORDERDETAILS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from '../actions/ingredients.js';



const initialState = {
    burgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,
    
    constructorIngredients: [],
    currentIngredient: {},
    modalIngredient: {},
    orderDetails: {},
    orderDetailsRequest: false,
    orderDetailsFailed: false,

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
    case GET_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state, 
        constructorIngredients: action.constructorIngredients, 
      }
    }
    case ADD_CONSTRUCTOR_INGREDIENT: {
      return action.constructorIngredient.type === 'bun' ? {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients.filter((el)=> el.type !== 'bun'), 
          action.constructorIngredient,
        ],
      } : {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients, 
          action.constructorIngredient],
        }
    }
    case DELETE_CONSTRUCTOR_INGREDIENT: {
       state.constructorIngredients.splice(action.index, 1);
       return {
       ...state, constructorIngredients: [...state.constructorIngredients],
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

    default: {
      return state;
    }
  }
};