import { AppDispatch, AppThunk } from '../store';
import { createAction } from "@reduxjs/toolkit";
import { checkResponse }  from '../utils';
import { TRefreshUser } from '../../types/data';
import { setCookie, getCookie, deleteCookie, fetchRequest } from '../utils';

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

import { TRegister, TLogin, TUser, TLogout, TToken } from '../../types/data';

export const getLoginRequest = createAction(GET_LOGIN_REQUEST);
export const getLoginSuccess = createAction<TLogin>(GET_LOGIN_SUCCESS);
export const getLoginFailed = createAction(GET_LOGIN_FAILED);

export const getRegisterRequest = createAction(GET_REGISTER_REQUEST);
export const getRegisterSuccess = createAction<TRegister>(GET_REGISTER_SUCCESS);
export const getRegisterFailed = createAction(GET_REGISTER_FAILED);

export const getLogoutRequest = createAction(GET_LOGOUT_REQUEST);
export const getLogoutSuccess = createAction<TLogout>(GET_LOGOUT_SUCCESS);
export const getLogoutFailed = createAction(GET_LOGOUT_FAILED);
 
export const getUserRequest = createAction(GET_USER_REQUEST);
export const getUserSuccess = createAction<TLogin | null>(GET_USER_SUCCESS);
export const getUserFailed = createAction(GET_USER_FAILED);

export const getRefreshUserRequest = createAction(GET_REFRESH_USER_REQUEST);
export const getRefreshUserSuccess = createAction<TLogin>(GET_REFRESH_USER_SUCCESS);
export const getRefreshUserFailed = createAction(GET_REFRESH_USER_FAILED);

export const getAuthRequest = createAction(GET_AUTH_REQUEST);
export const getAuthSuccess = createAction<TToken>(GET_AUTH_SUCCESS);
export const getAuthFailed = createAction(GET_AUTH_FAILED);

export const getTokenRequest = createAction(GET_TOKEN_REQUEST);
export const getTokenSuccess = createAction<TToken>(GET_TOKEN_SUCCESS);
export const getTokenFailed = createAction(GET_TOKEN_FAILED);

export type TAuthAction = ReturnType<typeof getLoginRequest>
                          | ReturnType<typeof getLoginSuccess>
                          | ReturnType<typeof getLoginFailed>
                          | ReturnType<typeof getRegisterRequest>
                          | ReturnType<typeof getRegisterSuccess>
                          | ReturnType<typeof getRegisterFailed>
                          | ReturnType<typeof getLogoutRequest>
                          | ReturnType<typeof getLogoutSuccess>
                          | ReturnType<typeof getLogoutFailed>
                          | ReturnType<typeof getUserRequest>
                          | ReturnType<typeof getUserSuccess>
                          | ReturnType<typeof getUserFailed>
                          | ReturnType<typeof getRefreshUserRequest>
                          | ReturnType<typeof getRefreshUserSuccess>
                          | ReturnType<typeof getRefreshUserFailed>
                          | ReturnType<typeof getAuthRequest>
                          | ReturnType<typeof getAuthSuccess>
                          | ReturnType<typeof getAuthFailed>
                          | ReturnType<typeof getTokenRequest>
                          | ReturnType<typeof getTokenSuccess>
                          | ReturnType<typeof getTokenFailed>;
                          
export type TLoginPostBody = {
  email:string,
  password: string
}
export type TAuthPostBody = {
  token: string
}
export type TRefreshUserPatchBody =  {
  email: string,
  password: string
}

export const getLogin = (body: TLoginPostBody) => async (dispatch: AppDispatch) => {
  dispatch(getLoginRequest());
  try {
    const res = await fetchRequest.post('auth/login', body);
    const obj = await checkResponse(res);
      if (obj) {
        dispatch(getLoginSuccess(obj));
        dispatch(getUserSuccess(obj));
        dispatch(getAuthSuccess(obj));
        const  accessToken = obj.accessToken.split('Bearer ')[1];
        const  refreshToken = obj.refreshToken;
        if (refreshToken) {
          setCookie('refreshToken', refreshToken);
        }
        if (accessToken) {
          setCookie('accessToken', accessToken);
        }
      } else {
        dispatch(getLoginFailed());
      }
  } catch(error) {
    console.log(error);
    dispatch(getLoginFailed());
  };
};

export const getAuth = () => async (dispatch: AppDispatch) => {
  dispatch(getAuthRequest());
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
      const res = await fetchRequest.post('auth/token', { 'token' : refreshToken });
      const obj = await checkResponse(res);
      //const obj = await getLoginRequestApi(body);
        if (obj) {
          dispatch(getAuthSuccess(obj));
          const  accessToken = obj.accessToken.split('Bearer ')[1];
          const  refreshToken = obj.refreshToken;
          if (refreshToken) {
            setCookie('refreshToken', refreshToken);
          }
          if (accessToken) {
            setCookie('accessToken', accessToken);
          }
        } else {
          dispatch(getAuthFailed());
        }
    } catch(error) {
      console.log(error);
      dispatch(getAuthFailed());
    }
  } else {
    dispatch(getAuthFailed());
  }
};

export const getUser =  () => async (dispatch: AppDispatch) => {
  dispatch(getUserRequest());
  await getAuth();
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.get('auth/user', { 'Authorization': 'Token '+ accessToken });
      const obj = await checkResponse(res);
     // const obj = await getLoginRequestApi({});
      if (obj) {
        dispatch(getUserSuccess(obj));
      } else {
        dispatch(getUserFailed());
      }
    } catch(error){
        console.log(error)
        dispatch(getUserFailed());
    }
  } else {
    dispatch(getUserFailed());
  }
};

export type TRegisterBody = { 
  email: string, 
  password: string, 
  name: string
 }

export const getRegister = (body: TRegisterBody) => async (dispatch: AppDispatch) => {
  dispatch(getRegisterRequest());
  try {
    const res = await fetchRequest.post('auth/register', body);
    const obj = await checkResponse(res);
      if (obj) {
        dispatch(getRegisterSuccess(obj));
        const  accessToken = obj.accessToken.split('Bearer ')[1];
        const  refreshToken = obj.refreshToken;
        if (refreshToken) {
          setCookie('refreshToken', refreshToken);
        }
        if (accessToken) {
          setCookie('accessToken', accessToken);
        }
      } else {
        dispatch(getRegisterFailed());
      }
  } catch(error) {
    console.log(error);
    dispatch(getRegisterFailed());
  };
};

export const getLogout = () => async (dispatch: AppDispatch) => {
  dispatch(getLogoutRequest());
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
    const res = await fetchRequest.post('auth/logout', { 'token' : refreshToken });
    const obj = await checkResponse(res);
    //const obj = await getLogoutRequestApi();
      if (obj) {
        dispatch(getLogoutSuccess(obj));
        dispatch(getUserSuccess(null));
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
        dispatch(getLogoutFailed());
      }
  } catch(error) {
    console.log(error);
    dispatch(getLogoutFailed());
  };
  } else {
    dispatch(getLogoutFailed());
  
  }
};

export const getRefreshUser = (body: TRefreshUserPatchBody) => async (dispatch: AppDispatch) => {
  dispatch(getRefreshUserRequest());
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const obj = undefined;
      if (body !== null) {
        const res = await fetchRequest.patch('auth/user', body, 
          { 'Authorization': 'Token '+ accessToken });
        const obj = await checkResponse(res);
      }
      if (obj) {
        dispatch(getRefreshUserSuccess(obj));
        dispatch(getUserSuccess(obj));
      } else {
        dispatch(getRefreshUserFailed());
      }
    } catch(error){
        console.log(error)
        dispatch(getRefreshUserFailed());
    }
  } else {
    dispatch(getRefreshUserFailed());
  }
};
