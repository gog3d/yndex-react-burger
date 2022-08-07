import { actionCreatorDescribeCallback } from '../../utils/redux-test-utils'
import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_GET_MESSAGE,
  WS_USER_DISCONNECT,
} from '../action-types';

import { 
  wsUserConnectionSuccess, 
  wsUserConnectionError, 
  wsUserConnectionClosed, 
  wsUserGetMessage
} from '../actions/wsUserAction';

actionCreatorDescribeCallback(wsUserConnectionSuccess, WS_USER_CONNECTION_SUCCESS);
actionCreatorDescribeCallback(wsUserConnectionError, WS_USER_CONNECTION_ERROR);
actionCreatorDescribeCallback(wsUserConnectionClosed, WS_USER_CONNECTION_CLOSED);
actionCreatorDescribeCallback(wsUserGetMessage, WS_USER_GET_MESSAGE);

