import { actionCreatorDescribeCallback } from '../../utils/redux-test-utils'

import {
  
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
  GET_FORGOT_PASSWORD_FAILED,

} from '../action-types';

import {
  getForgotPasswordRequest,
  getForgotPasswordSuccess,
  getForgotPasswordFailed,
} from '../actions/forgot-password';

actionCreatorDescribeCallback(getForgotPasswordRequest, GET_FORGOT_PASSWORD_REQUEST);
actionCreatorDescribeCallback(getForgotPasswordSuccess, GET_FORGOT_PASSWORD_SUCCESS);
actionCreatorDescribeCallback(getForgotPasswordFailed, GET_FORGOT_PASSWORD_FAILED);

