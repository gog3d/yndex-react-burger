import { createAction } from "@reduxjs/toolkit";
import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_GET_MESSAGE,
  WS_USER_DISCONNECT,
} from '../action-types';

import { TWsOrdersMessage } from '../../types/data';

export const wsUserConnectionStart = createAction(WS_USER_CONNECTION_START);
export const wsUserConnectionSuccess = createAction(WS_USER_CONNECTION_SUCCESS);
export const wsUserConnectionError = createAction(WS_USER_CONNECTION_ERROR);
export const wsUserConnectionClosed = createAction(WS_USER_CONNECTION_CLOSED);
export const wsUserGetMessage = createAction<TWsOrdersMessage>(WS_USER_GET_MESSAGE);
export const wsUserDisconnect = createAction(WS_USER_DISCONNECT);

export type TWsUserAction = ReturnType<typeof wsUserConnectionStart>
                            | ReturnType<typeof wsUserConnectionSuccess>
                            | ReturnType<typeof wsUserConnectionError>
                            | ReturnType<typeof wsUserConnectionClosed>
                            | ReturnType<typeof wsUserGetMessage>
                            | ReturnType<typeof wsUserDisconnect>;