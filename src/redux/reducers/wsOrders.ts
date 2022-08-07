import { createReducer } from '@reduxjs/toolkit';
import { 
  wsConnectionSuccess, 
  wsConnectionError, 
  wsConnectionClosed, 
  wsGetMessage
} from '../actions/wsAction';

import { TWsOrdersState } from '../../types/data';

export const initialState: TWsOrdersState = { 
  wsError: undefined,
  wsConnected: false, 
  wsOrders: [],
  wsOrdersTotal: null,
  wsOrdersTotalToday: null,
};

export const wsOrders = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnectionSuccess, (state) => {
      state.wsError = undefined;
      state.wsConnected = true;
    })
    .addCase(wsConnectionError, (state) => {
      state.wsError = true;
      state.wsConnected = false;
    })
    .addCase(wsConnectionClosed, (state) => {
      state.wsError = undefined;
      state.wsConnected = false;
      state.wsOrders = [];
    })
    .addCase(wsGetMessage, (state, action) => {
      state.wsError = undefined;
      state.wsConnected = true;
      if(action.payload.success) {
        state.wsOrders = action.payload.orders;
        state.wsOrdersTotal = action.payload.total;
        state.wsOrdersTotalToday = action.payload.totalToday;
      }
    })
});
