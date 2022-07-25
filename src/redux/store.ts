import { AnyAction } from 'redux'
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { createWsMiddleware } from './middleware';
import { ThunkAction } from 'redux-thunk'

import {  
  wsConnectionStart, 
  wsConnectionSuccess, 
  wsConnectionError, 
  wsConnectionClosed, 
  wsGetMessage,
} from './actions/wsAction';

import {  
  wsUserConnectionStart, 
  wsUserConnectionSuccess, 
  wsUserConnectionError, 
  wsUserConnectionClosed, 
  wsUserGetMessage,
} from './actions/wsUserAction';

import { TwsActionTypes } from '../redux/middleware/index';

const url = 'wss://norma.nomoreparties.space/orders';
//const url = 'ws://localhost';

const wsUserActions = {
  wsStart: wsUserConnectionStart,
  onOpen: wsUserConnectionSuccess,
  onError: wsUserConnectionError,
  onMessage: wsUserGetMessage,
  onClose: wsUserConnectionClosed,
}
const wsActions = {
  wsStart: wsConnectionStart,
  onOpen: wsConnectionSuccess,
  onError: wsConnectionError,
  onMessage: wsGetMessage,
  onClose: wsConnectionClosed,
}

const wsUserMiddleware = createWsMiddleware(url, wsUserActions);
const wsMiddleware = createWsMiddleware(url, wsActions);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(wsMiddleware, wsUserMiddleware);
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