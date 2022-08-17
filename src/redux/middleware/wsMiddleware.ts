import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Middleware, MiddlewareAPI, AnyAction } from 'redux';
import { AppDispatch, RootState } from '../store';
/*
export type TwsActionTypes = {
  wsStart: ActionCreatorWithPayload<string>,
  wsDisconnect: ActionCreatorWithoutPayload,
  //wsSendMessage?: ActionCreatorWithPayload<any>,
  //wsConnecting: ActionCreatorWithoutPayload,
  onOpen: ActionCreatorWithoutPayload,
  onClose: ActionCreatorWithoutPayload,
  onError: ActionCreatorWithPayload<string>,
  onMessage: ActionCreatorWithPayload<any>,
}
*/

export type TwsActionTypes = {
  wsStart: ActionCreatorWithoutPayload,
  wsDisconnect: ActionCreatorWithoutPayload,
  onOpen: ActionCreatorWithoutPayload,
  onClose: ActionCreatorWithoutPayload,
  onError: ActionCreatorWithoutPayload,
  onMessage: ActionCreatorWithPayload<any>,
}

export const createWsMiddleware = (wsUrl: string, wsActions: TwsActionTypes): Middleware  => {
  const wsMiddleware = (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next:AppDispatch) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsStart,
        wsDisconnect,
        onOpen,
        onError,
        onMessage,
        onClose
      } = wsActions;
      if (type === wsStart) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({type: onOpen});
        };
        socket.onerror = event => {
          console.log(`ws error: ${event}`);
//          dispatch({type: onError});
          dispatch(onError());
          
        };
        socket.onmessage = event => {
          const { data } = event;
          dispatch(onMessage(JSON.parse(data)));
        };
        socket.close = event => {
           dispatch(onClose());
        };
        
        if (type === wsDisconnect) {
          socket.close();
          dispatch(onClose());
        }
      }
      next(action);
    }
  };
  return wsMiddleware;
};