import { createAction } from "@reduxjs/toolkit";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_DISCONNECT,
} from '../action-types';

import { TWsOrdersMessage } from '../../types/data';

export const wsConnectionStart = createAction(WS_CONNECTION_START);
export const wsConnectionSuccess = createAction(WS_CONNECTION_SUCCESS);
export const wsConnectionError = createAction(WS_CONNECTION_ERROR);
export const wsConnectionClosed = createAction(WS_CONNECTION_CLOSED);
export const wsGetMessage = createAction<TWsOrdersMessage>(WS_GET_MESSAGE);
export const wsDisconnect = createAction(WS_DISCONNECT);

export type TWsAction = ReturnType<typeof wsConnectionStart>
                        | ReturnType<typeof wsConnectionSuccess>
                        | ReturnType<typeof wsConnectionError>
                        | ReturnType<typeof wsConnectionClosed>
                        | ReturnType<typeof wsGetMessage>
                        | ReturnType<typeof wsDisconnect>;