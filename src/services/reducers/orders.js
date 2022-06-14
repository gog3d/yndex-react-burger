import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAILED,
} from '../actions/orders';

const ordersState = {
  orders: {},
  ordersRequest: false,
  ordersFailed: false,
  userOrders: {},
  userOrdersRequest: false,
  userOrdersFailed: false,
  
  };
  
export const ordersReducer = (state = ordersState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST: {
      return {...state, ordersRequest: true};
    }
    case GET_ORDERS_SUCCESS: {
      return {
        ...state, 
        ordersFailed: false, 
        orders: action.restorePassword, 
        ordersRequest: false};
    }
    case GET_ORDERS_FAILED: {
      return {
        ...state, 
        ordersFailed: true, 
        ordersRequest: false};
    }
    case GET_USER_ORDERS_REQUEST: {
      return {...state, userOrdersRequest: true};
    }
    case GET_USER_ORDERS_SUCCESS: {
      return {
        ...state, 
        userOrdersFailed: false, 
        userOrders: action.restorePassword, 
        userOrdersRequest: false};
    }
    case GET_USER_ORDERS_FAILED: {
      return {
        ...state, 
        userOrdersFailed: true, 
        userOrdersRequest: false};
    }
    default: {
      return state;
    }
  }
};