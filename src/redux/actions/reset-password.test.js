import { actionCreatorDescribeCallback } from '../../utils/redux-test-utils'
import {
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
  GET_RESET_PASSWORD_FAILED,
} from '../action-types';

import {
  getResetPasswordRequest,
  getResetPasswordSuccess,
  getResetPasswordFailed,
} from '../actions/reset-password';

actionCreatorDescribeCallback(getResetPasswordRequest, GET_RESET_PASSWORD_REQUEST);
actionCreatorDescribeCallback(getResetPasswordSuccess, GET_RESET_PASSWORD_SUCCESS);
actionCreatorDescribeCallback(getResetPasswordFailed, GET_RESET_PASSWORD_FAILED);