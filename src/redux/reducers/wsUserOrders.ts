import { createReducer } from '@reduxjs/toolkit';
import { 
  wsUserConnectionSuccess, 
  wsUserConnectionError, 
  wsUserConnectionClosed, 
  wsUserGetMessage
} from '../actions/wsUserAction';

import { TWsUserOrdersState } from '../../types/data';

export const initialState: TWsUserOrdersState = { 
  wsUserError: undefined,
  wsUserConnected: false, 
  wsUserOrders: [],
  wsUserOrdersTotal: null,
  wsUserOrdersTotalToday: null,
};

export const wsUserOrders = createReducer(initialState, (builder) => {
  builder
    .addCase(wsUserConnectionSuccess, (state, action) => {
      state.wsUserError = undefined;
      state.wsUserConnected = true;
    })
    .addCase(wsUserConnectionError, (state, action) => {
      state.wsUserError = true;
      state.wsUserConnected = false;
    })
    .addCase(wsUserConnectionClosed, (state, action) => {
      state.wsUserError = undefined;
      state.wsUserConnected = false;
      state.wsUserOrders = [];
    })
    .addCase(wsUserGetMessage, (state, action) => {
      state.wsUserError = undefined;
      state.wsUserConnected = true;
      if(action.payload.success) {
        state.wsUserOrders = action.payload.orders;
        state.wsUserOrdersTotal = action.payload.total;
        state.wsUserOrdersTotalToday = action.payload.totalToday;
      }
    })
});
