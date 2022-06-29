//import { composeWithDevTools } from 'redux-devtools-extension'
import { compose, createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers';

import { createSocketMiddleware } from './middleware';


import thunkMiddleware from 'redux-thunk';

const wsUrl = 'wss://norma.nomoreparties.space/orders';

export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware, createSocketMiddleware(wsUrl)))
  );

 