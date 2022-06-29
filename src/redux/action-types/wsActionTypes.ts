export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

export const WS_USER_CONNECTION_START: 'WS_USER_CONNECTION_START' = 'WS_USER_CONNECTION_START';
export const WS_USER_CONNECTION_SUCCESS: 'WS_USER_CONNECTION_SUCCESS' = 'WS_USER_CONNECTION_SUCCESS';
export const WS_USER_CONNECTION_ERROR: 'WS_USER_CONNECTION_ERROR' = 'WS_USER_CONNECTION_ERROR';
export const WS_USER_CONNECTION_CLOSED: 'WS_USER_CONNECTION_CLOSED' = 'WS_USER_CONNECTION_CLOSED';
export const WS_USER_GET_MESSAGE: 'WS_USER_GET_MESSAGE' = 'WS_USER_GET_MESSAGE';
export const WS_USER_SEND_MESSAGE: 'WS_USER_SEND_MESSAGE' = 'WS_USER_SEND_MESSAGE';


export interface TWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
};

export interface TWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: Event;
};

export interface TWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
};

export interface TWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

export interface TWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TWsDataType;
};

export interface TWsSendMessage {
  readonly type: typeof WS_SEND_MESSAGE;

};

export interface TWsUserConnectionStart {
  readonly type: typeof WS_USER_CONNECTION_START;
};

export interface TWsUserConnectionSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS;
  readonly payload: Event;
};

export interface TWsUserConnectionError {
  readonly type: typeof WS_USER_CONNECTION_ERROR;
  readonly payload: Event;
};

export interface TWsUserConnectionClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED;
};

export interface TWsUserGetMessage {
  readonly type: typeof WS_USER_GET_MESSAGE;
  readonly payload: TWsDataType;
};

export interface TWsUserSendMessage {
  readonly type: typeof WS_USER_SEND_MESSAGE;
};

export type TOrders = {
  ingredients: Array<string>,
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
  name: string,
}

export type TWsDataType = {
  success: boolean,
  orders: Array<TOrders>,
  total: number,
  totalToday: number
  }

export type TWsActions = 
| TWsConnectionStart
| TWsConnectionSuccess
| TWsConnectionError
| TWsConnectionClosed 
| TWsGetMessage 
| TWsSendMessage 
| TWsUserConnectionStart 
| TWsUserConnectionSuccess 
| TWsUserConnectionError 
| TWsUserConnectionClosed 
| TWsUserGetMessage 
| TWsUserSendMessage;

export type TWsState = {
  error: any | undefined;
  wsConnected: boolean;
  orders: null | TWsDataType;
  userError: undefined;
  userWsConnected: false; 
  userOrders: null | Array<TOrders>;
}