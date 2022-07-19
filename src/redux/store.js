
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware';
import { createWsMiddleware } from './middleware';
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

const url = 'wss://norma.nomoreparties.space/orders';
//wss://norma.nomoreparties.space/orders/all
//const wsUrl = 'ws://localhost:3001';
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

/*
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
*/