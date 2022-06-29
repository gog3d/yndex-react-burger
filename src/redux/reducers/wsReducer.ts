import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,

  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_GET_MESSAGE,
  TWsActions
} from '../action-types';
import { TWsState } from '../action-types/wsActionTypes';

const initialState: TWsState = {
  error: undefined,
  wsConnected: false, 
  orders: null,
  
  userError: undefined,
  userWsConnected: false, 
  userOrders: null,
};

export const wsReducer = (state = initialState, action: TWsActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: {...action.payload},
      };
    case WS_USER_CONNECTION_SUCCESS:
      return {
        ...state,
        userError: undefined,
        userWsConnected: true,
      };
    case WS_USER_CONNECTION_ERROR:
      return {
        ...state,
        userError: action.payload,
        userWsConnected: false
      };
    case WS_USER_CONNECTION_CLOSED:
    console.log('close')//
      return {
        ...state,
        userError: undefined,
        userWsConnected: false,
        userOrders: {},
      };
    case WS_USER_GET_MESSAGE:
    console.log(action.payload)//
      return {
        ...state,
        userError: undefined,
        userOrders: {...action.payload},
      };
    default:
      return state;
  }
};