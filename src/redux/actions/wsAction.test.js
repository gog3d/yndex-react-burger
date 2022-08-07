import { actionCreatorDescribeCallback } from '../../utils/redux-test-utils'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_DISCONNECT,
} from '../action-types';

import { 
  wsConnectionSuccess, 
  wsConnectionError, 
  wsConnectionClosed, 
  wsGetMessage
} from '../actions/wsAction';

actionCreatorDescribeCallback(wsConnectionSuccess, WS_CONNECTION_SUCCESS);
actionCreatorDescribeCallback(wsConnectionError, WS_CONNECTION_ERROR);
actionCreatorDescribeCallback(wsConnectionClosed, WS_CONNECTION_CLOSED);
actionCreatorDescribeCallback(wsGetMessage, WS_GET_MESSAGE);


