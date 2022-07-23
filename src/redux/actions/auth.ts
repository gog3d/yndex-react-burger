import { createAction } from "@reduxjs/toolkit";
//import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
import { setCookie, getCookie, deleteCookie, fetchRequest } from '../utils';
/*
import { 
  getLoginRequestApi,  
  getLogoutRequestApi, 
  getTokenRequestApi, 
  getRegisterRequestApi, 
  getUserRequestApi, 
  getRefreshUserRequestApi
  } from '../fakeApiAuth';
*/

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

} from '../action-types';
export const getLoginRequest = createAction(GET_LOGIN_REQUEST);
export const getLoginSuccess = createAction(GET_LOGIN_SUCCESS);
export const getLoginFailed = createAction(GET_LOGIN_FAILED);

export const getRegisterRequest = createAction(GET_REGISTER_REQUEST);
export const getRegisterSuccess = createAction(GET_REGISTER_SUCCESS);
export const getRegisterFailed = createAction(GET_REGISTER_FAILED);

export const getLogoutRequest = createAction(GET_LOGOUT_REQUEST);
export const getLogoutSuccess = createAction(GET_LOGOUT_SUCCESS);
export const getLogoutFailed = createAction(GET_LOGOUT_FAILED);
 
export const getUserRequest = createAction(GET_USER_REQUEST);
export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserFailed = createAction(GET_USER_FAILED);

export const getRefreshUserRequest = createAction(GET_REFRESH_USER_REQUEST);
export const getRefreshUserSuccess = createAction(GET_REFRESH_USER_SUCCESS);
export const getRefreshUserFailed = createAction(GET_REFRESH_USER_FAILED);

export const getAuthRequest = createAction(GET_AUTH_REQUEST);
export const getAuthSuccess = createAction(GET_AUTH_SUCCESS);
export const getAuthFailed = createAction(GET_AUTH_FAILED);

export const getTokenRequest = createAction(GET_TOKEN_REQUEST);
export const getTokenSuccess = createAction(GET_TOKEN_SUCCESS);
export const getTokenFailed = createAction(GET_TOKEN_FAILED);

export const getLogin = (body = null) => async (dispatch) => {
  dispatch({ type: getLoginRequest });
  try {
    const res = await fetchRequest.post('auth/login', body);
    const obj = await checkResponse(res);
   // const obj = await getLoginRequestApi({});
      if (obj) {
        dispatch({ type: getLoginSuccess, login: obj});
        dispatch({ type: getUserSuccess, user: obj});
        dispatch({ type: getAuthSuccess, auth: obj});
        const  accessToken = obj.accessToken.split('Bearer ')[1];
        const  refreshToken = obj.refreshToken;
        if (refreshToken) {
          setCookie('refreshToken', refreshToken);
        }
        if (accessToken) {
          setCookie('accessToken', accessToken);
        }
      } else {
        dispatch({ type: getLoginFailed });
      }
  } catch(error) {
    console.log(error);
    dispatch({ type: getLoginFailed });
  };
};

export const getAuth = () => async (dispatch) => {
  dispatch({ type: getAuthRequest });
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
      const res = await fetchRequest.post('auth/token', { 'token' : refreshToken });
      const obj = await checkResponse(res);
      //const obj = await getLoginRequestApi(body);
        if (obj) {
          dispatch({ type: getAuthSuccess, auth: obj});
          const  accessToken = obj.accessToken.split('Bearer ')[1];
          const  refreshToken = obj.refreshToken;
          if (refreshToken) {
            setCookie('refreshToken', refreshToken);
          }
          if (accessToken) {
            setCookie('accessToken', accessToken);
          }
        } else {
          dispatch({ type: getAuthFailed });
        }
    } catch(error) {
      console.log(error);
      dispatch({ type: getAuthFailed });
    }
  } else {
    dispatch({ type: getAuthFailed });
  }
};

export const getUser =  () => async (dispatch) => {
  dispatch({ type: getUserRequest });
  await getAuth();
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.get('auth/user', { 'Authorization': 'Token '+ accessToken });
      const obj = await checkResponse(res);
      //const obj = await getLoginRequestApi({});
      if (obj) {
        dispatch({ type: getUserSuccess, user: obj});
      } else {
        dispatch({ type: getUserFailed });
      }
    } catch(error){
        console.log(error)
        dispatch({ type: getUserFailed });
    }
  } else {
    dispatch({ type: getUserFailed });
  }
};

export const getRegister = (body = null) => async (dispatch) => {
  dispatch({ type: getRegisterRequest });
  try {
    const res = await fetchRequest.post('auth/register', body);
    const obj = await checkResponse(res);
      if (obj) {
        dispatch({ type: getRegisterSuccess, register: obj});
        const  accessToken = obj.accessToken.split('Bearer ')[1];
        const  refreshToken = obj.refreshToken;
        if (refreshToken) {
          setCookie('refreshToken', refreshToken);
        }
        if (accessToken) {
          setCookie('accessToken', accessToken);
        }
      } else {
        dispatch({ type: getRegisterFailed });
      }
  } catch(error) {
    console.log(error);
    dispatch({ type: getRegisterFailed });
  };
};

export const getLogout = () => async (dispatch) => {
  dispatch({ type: getLogoutRequest });
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
    const res = await fetchRequest.post('auth/logout', { 'token' : refreshToken });
    const obj = await checkResponse(res);
    //const obj = await getLogoutRequestApi();
      if (obj) {
        dispatch({ type: getLogoutSuccess, logout: obj});
        dispatch({ type: getUserSuccess, user: {}});
        dispatch({ type: getUserFailed });
        dispatch({ type: getAuthSuccess, auth: {}});
        dispatch({ type: getAuthFailed });
        const  accessToken = getCookie('accessToken');
        const  refreshToken = getCookie('refreshToken');
        if (refreshToken) {
          deleteCookie('refreshToken');
        }
        if (accessToken) {
          deleteCookie('accessToken');
        }
      } else {
        dispatch({ type: getLogoutFailed });
      }
  } catch(error) {
    console.log(error);
    dispatch({ type: getLogoutFailed });
  };
  } else {
    dispatch({ type: getLogoutFailed });
  
  }
};

export const getRefreshUser = (body = null) => async (dispatch) => {
  dispatch({ type: getRefreshUserRequest });
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.patch('auth/user', body, 
        { 'Authorization': 'Token '+ accessToken });
      const obj = await checkResponse(res);
      if (obj) {
        dispatch({ type: getRefreshUserSuccess, refreshUser: obj});
        dispatch({ type: getUserSuccess, user: obj});
      } else {
        dispatch({ type: getRefreshUserFailed });
      }
    } catch(error){
        console.log(error)
        dispatch({ type: getRefreshUserFailed });
    }
  } else {
    dispatch({ type: getRefreshUserFailed });
  }
};