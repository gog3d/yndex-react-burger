import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
   
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  
  GET_REFRESH_USER_REQUEST,
  GET_REFRESH_USER_SUCCESS,
  GET_REFRESH_USER_FAILED,
  
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILED,

  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,

} from '../action-types/auth';
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailed,

  getRegisterRequest,
  getRegisterSuccess,
  getRegisterFailed,

  getLogoutRequest,
  getLogoutSuccess,
  getLogoutFailed,
 
  getUserRequest,
  getUserSuccess,
  getUserFailed,

  getRefreshUserRequest,
  getRefreshUserSuccess,
  getRefreshUserFailed,

  getAuthRequest,
  getAuthSuccess,
  getAuthFailed,

  getTokenRequest,
  getTokenSuccess,
  getTokenFailed,

  getLogin,
  getAuth,
  getUser,
  getRegister,
  getLogout,
  getRefreshUser

} from '../actions/auth';

import { actionCreatorDescribeCallback } from '../../utils/redux-test-utils'

actionCreatorDescribeCallback(getLoginRequest, GET_LOGIN_REQUEST);
actionCreatorDescribeCallback(getLoginSuccess, GET_LOGIN_SUCCESS);
actionCreatorDescribeCallback(getLoginFailed, GET_LOGIN_FAILED);

actionCreatorDescribeCallback(getRegisterRequest, GET_REGISTER_REQUEST);
actionCreatorDescribeCallback(getRegisterSuccess, GET_REGISTER_SUCCESS);
actionCreatorDescribeCallback(getRegisterFailed, GET_REGISTER_FAILED);

actionCreatorDescribeCallback(getLogoutRequest, GET_LOGOUT_REQUEST);
actionCreatorDescribeCallback(getLogoutSuccess,GET_LOGOUT_SUCCESS);
actionCreatorDescribeCallback(getLogoutFailed, GET_LOGOUT_FAILED);
 
actionCreatorDescribeCallback(getUserRequest, GET_USER_REQUEST);
actionCreatorDescribeCallback(getUserSuccess, GET_USER_SUCCESS);
actionCreatorDescribeCallback(getUserFailed, GET_USER_FAILED);

actionCreatorDescribeCallback(getRefreshUserRequest, GET_REFRESH_USER_REQUEST);
actionCreatorDescribeCallback(getRefreshUserSuccess, GET_REFRESH_USER_SUCCESS);
actionCreatorDescribeCallback(getRefreshUserFailed,GET_REFRESH_USER_FAILED);

actionCreatorDescribeCallback(getAuthRequest, GET_AUTH_REQUEST);
actionCreatorDescribeCallback(getAuthSuccess, GET_AUTH_SUCCESS);
actionCreatorDescribeCallback(getAuthFailed, GET_AUTH_FAILED);
actionCreatorDescribeCallback(getTokenRequest, GET_TOKEN_REQUEST);
actionCreatorDescribeCallback(getTokenSuccess, GET_TOKEN_SUCCESS);
actionCreatorDescribeCallback(getTokenFailed, GET_TOKEN_FAILED);

