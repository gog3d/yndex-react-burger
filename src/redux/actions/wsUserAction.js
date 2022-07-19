import { createAction } from "@reduxjs/toolkit";
import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_GET_MESSAGE
} from '../action-types';

export const wsUserConnectionStart = createAction(WS_USER_CONNECTION_START);
export const wsUserConnectionSuccess = createAction(WS_USER_CONNECTION_SUCCESS);
export const wsUserConnectionError = createAction(WS_USER_CONNECTION_ERROR);
export const wsUserConnectionClosed = createAction(WS_USER_CONNECTION_CLOSED);
export const wsUserGetMessage = createAction(WS_USER_GET_MESSAGE);
