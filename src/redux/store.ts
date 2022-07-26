import { AnyAction } from 'redux'
import { configureStore, createSerializableStateInvariantMiddleware  } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { createWsMiddleware } from './middleware';
import { ThunkAction } from 'redux-thunk'

import {  
  wsConnectionStart, 
  wsConnectionSuccess, 
  wsConnectionError, 
  wsConnectionClosed, 
  wsGetMessage,
  wsDisconnect,
} from './actions/wsAction';

import {  
  wsUserConnectionStart, 
  wsUserConnectionSuccess, 
  wsUserConnectionError, 
  wsUserConnectionClosed, 
  wsUserGetMessage,
  wsUserDisconnect,
} from './actions/wsUserAction';

const url = 'wss://norma.nomoreparties.space/orders';
//const url = 'ws://localhost';

const wsUserActions = {
  wsStart: wsUserConnectionStart,
  onOpen: wsUserConnectionSuccess,
  onError: wsUserConnectionError,
  onMessage: wsUserGetMessage,
  onClose: wsUserConnectionClosed,
  wsDisconnect: wsUserDisconnect,
}
const wsActions = {
  wsStart: wsConnectionStart,
  onOpen: wsConnectionSuccess,
  onError: wsConnectionError,
  onMessage: wsGetMessage,
  onClose: wsConnectionClosed,
  wsDisconnect: wsDisconnect,
}

const wsUserMiddleware = createWsMiddleware(url, wsUserActions);
const wsMiddleware = createWsMiddleware(url, wsActions);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {    
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      wsMiddleware, 
      wsUserMiddleware, 
      );
  },
  devTools: process.env.NODE_ENV !=='production',
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>