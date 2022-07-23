import { createAction } from "@reduxjs/toolkit";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../action-types';

export const wsConnectionStart = createAction(WS_CONNECTION_START);
export const wsConnectionSuccess = createAction(WS_CONNECTION_SUCCESS);
export const wsConnectionError = createAction(WS_CONNECTION_ERROR);
export const wsConnectionClosed = createAction(WS_CONNECTION_CLOSED);
export const wsGetMessage = createAction(WS_GET_MESSAGE);
