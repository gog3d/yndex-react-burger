import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { RootState } from '../store';

export type TwsActionTypes = {
  wsStart: ActionCreatorWithPayload<string>,
  //wsDisconnect: ActionCreatorWithoutPayload,
  //wsSendMessage?: ActionCreatorWithPayload<any>,
  //wsConnecting: ActionCreatorWithoutPayload,
  onOpen: ActionCreatorWithoutPayload,
  onClose: ActionCreatorWithoutPayload,
  onError: ActionCreatorWithPayload<string>,
  onMessage: ActionCreatorWithPayload<any>,
}
export const createWsMiddleware = (wsUrl: string, wsActions: TwsActionTypes): Middleware<{}, RootState>  => {
  const wsMiddleware = (store) => {
    let socket: WebSocket | null = null;;
    return next => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsStart,
        onOpen,
        onError,
        onMessage,
        onClose
      } = wsActions;
      if (type === wsStart) {
        console.log(`${wsUrl}${payload}`);
        socket = new WebSocket(`${wsUrl}${payload}`);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({type: onOpen});
        };
        socket.onerror = event => {
          console.log(`ws error: ${event}`);
          dispatch({type: onError});
        };
        socket.onmessage = event => {
          const { data } = event;
          dispatch({type: onMessage, payload: JSON.parse(data)});
        };
        socket.close = event => {
           dispatch({type: onClose});
        };
      }
      next(action);
    }
  };
  return wsMiddleware;
};