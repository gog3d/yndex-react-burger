//import { baseURL }  from '../../utils/config.js';
import { 
  setCookie, 
  getCookie, 
  deleteCookie, 
  fetchRequest, 
  checkResponse 
} from '../utils';

import { TLogin, TLogout, TRegister, TToken, TAuthType, TUser } from '../action-types/data';
import { AppDispatch, AppThunk } from '../action-types';

import { 
  getLoginRequest,  
  getLogoutRequest, 
  getTokenRequest, 
  getRegisterRequest, 
  getUserRequest, 
  getRefreshUserRequest
  } from '../fakeApiAuth.js';

export const GET_LOGIN_REQUEST: 'GET_LOGIN_REQUEST' = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED: 'GET_LOGIN_FAILED' = 'GET_LOGIN_FAILED';

export const GET_REGISTER_REQUEST: 'GET_REGISTER_REQUEST' = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS: 'GET_REGISTER_SUCCESS' = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED: 'GET_REGISTER_FAILED' = 'GET_REGISTER_FAILED';

export const GET_LOGOUT_REQUEST: 'GET_LOGOUT_REQUEST' = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS: 'GET_LOGOUT_SUCCESS' = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAILED: 'GET_LOGOUT_FAILED' = 'GET_LOGOUT_FAILED';

export const GET_TOKEN_REQUEST: 'GET_TOKEN_REQUEST' = 'GET_TOKEN_REQUEST'; //!
export const GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS' = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILED: 'GET_TOKEN_FAILED' = 'GET_TOKEN_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const GET_REFRESH_USER_REQUEST: 'GET_REFRESH_USER_REQUEST' = 'GET_REFRESH_USER_REQUEST';
export const GET_REFRESH_USER_SUCCESS: 'GET_REFRESH_USER_SUCCESS' = 'GET_REFRESH_USER_SUCCESS';
export const GET_REFRESH_USER_FAILED: 'GET_REFRESH_USER_FAILED' = 'GET_REFRESH_USER_FAILED';

export const GET_AUTH_REQUEST: 'GET_AUTH_REQUEST' = 'GET_AUTH_REQUEST';
export const GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS' = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED: 'GET_AUTH_FAILED' = 'GET_AUTH_FAILED';

export interface IGetLoginRequest {
  readonly type: typeof GET_LOGIN_REQUEST;
};
export interface IGetLoginSuccess {
  readonly type: typeof GET_LOGIN_SUCCESS;
  readonly login: TLogin;
};
export interface IGetLoginFailed {
  readonly type: typeof GET_LOGIN_FAILED;
};
export interface IGetRegisterRequest {
  readonly type: typeof GET_REGISTER_REQUEST;
};
export interface IGetRegisterSuccess {
  readonly type: typeof GET_REGISTER_SUCCESS;
  readonly register: TLogin;
};
export interface IGetRegisterFailed {
  readonly type: typeof GET_REGISTER_FAILED;
};
export interface IGetLogoutRequest {
  readonly type: typeof GET_LOGOUT_REQUEST;
};
export interface IGetLogoutSuccess {
  readonly type: typeof GET_LOGOUT_SUCCESS;
  readonly logout: TLogout;
};
export interface IGetLogoutFailed {
  readonly type: typeof GET_LOGOUT_FAILED;
};
export interface IGetTokenRequest {
  readonly type: typeof GET_TOKEN_REQUEST;
};
export interface IGetTokenSuccess {
  readonly type: typeof GET_TOKEN_SUCCESS;
  readonly token: TToken;
};
export interface IGetTokenFailed {
  readonly type: typeof GET_TOKEN_FAILED;
};
export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
};
export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TLogin | TUser | null;
};
export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
};
export interface IGetRefreshUserRequest {
  readonly type: typeof GET_REFRESH_USER_REQUEST;
};
export interface IGetRefreshUserSuccess {
  readonly type: typeof GET_REFRESH_USER_SUCCESS;
  readonly refreshUser: TUser;
};
export interface IGetRefreshUserFailed {
  readonly type: typeof GET_REFRESH_USER_FAILED;
};
export interface IGetAuthRequest {
  readonly type: typeof GET_AUTH_REQUEST;
};
export interface IGetAuthSuccess {
  readonly type: typeof GET_AUTH_SUCCESS
  readonly auth: TToken | null;
};
export interface IGetAuthFailed {
  readonly type: typeof GET_AUTH_FAILED;
};

export type TAuthActions = 
  | IGetLoginRequest 
  | IGetLoginSuccess 
  | IGetLoginFailed 
  | IGetRegisterRequest 
  | IGetRegisterSuccess 
  | IGetRegisterFailed 
  | IGetLogoutRequest 
  | IGetLogoutSuccess 
  | IGetLogoutFailed 
  | IGetTokenRequest 
  | IGetTokenSuccess 
  | IGetTokenFailed 
  | IGetUserRequest 
  | IGetUserSuccess 
  | IGetUserFailed 
  | IGetRefreshUserRequest 
  | IGetRefreshUserSuccess 
  | IGetRefreshUserFailed 
  | IGetAuthRequest
  | IGetAuthSuccess 
  | IGetAuthFailed;

export const getLogin: AppThunk = (body: null | { 'email': string, 'password': string} = null) => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_LOGIN_REQUEST });
  try {
    const res = await fetchRequest.post('auth/login', body);
    const obj: TLogin = await checkResponse(res);
  //  const obj = await getLoginRequest({});
      if (obj) {
        dispatch({ type: GET_LOGIN_SUCCESS, login: obj});
        dispatch({ type: GET_USER_SUCCESS, user: obj});
        dispatch({ type: GET_AUTH_SUCCESS, auth: obj});
        const  accessToken = obj.accessToken.split('Bearer ')[1];
        const  refreshToken = obj.refreshToken;
        if (refreshToken) {
          setCookie('refreshToken', refreshToken);
        }
        if (accessToken) {
          setCookie('accessToken', accessToken);
        }
      } else {
        dispatch({ type: GET_LOGIN_FAILED });
      }
  } catch(error) {
    console.log(error);
    dispatch({ type: GET_LOGIN_FAILED });
  };
};

export const getAuth: AppThunk = () => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_AUTH_REQUEST });
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
      const res = await fetchRequest.post('auth/token', { 'token' : refreshToken });
      const obj: TLogin = await checkResponse(res);
   //   const obj = await getLoginRequest(body);
        if (obj) {
          dispatch({ type: GET_AUTH_SUCCESS, auth: obj});
          const  accessToken = obj.accessToken.split('Bearer ')[1];
          const  refreshToken = obj.refreshToken;
          if (refreshToken) {
            setCookie('refreshToken', refreshToken);
          }
          if (accessToken) {
            setCookie('accessToken', accessToken);
          }
        } else {
          dispatch({ type: GET_AUTH_FAILED });
        }
    } catch(error) {
      console.log(error);
      dispatch({ type: GET_AUTH_FAILED });
    }
  } else {
    dispatch({ type: GET_AUTH_FAILED });
  }
};

export const getUser:AppThunk =  () => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  await getAuth();
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.get('auth/user', { 'Authorization': 'Token '+ accessToken });
      const obj: TLogin = await checkResponse(res);
      //const obj = await getLoginRequest({});
      if (obj) {
        dispatch({ type: GET_USER_SUCCESS, user: obj});
      } else {
        dispatch({ type: GET_USER_FAILED });
      }
    } catch(error){
        console.log(error)
        dispatch({ type: GET_USER_FAILED });
    }
  } else {
    dispatch({ type: GET_USER_FAILED });
  }
};

export const getRegister: AppThunk = (body = null) => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_REGISTER_REQUEST });
  try {
    const res = await fetchRequest.post('auth/register', body);
    const obj: TLogin = await checkResponse(res);
      if (obj) {
        dispatch({ type: GET_REGISTER_SUCCESS, register: obj});
        const  accessToken = obj.accessToken.split('Bearer ')[1];
        const  refreshToken = obj.refreshToken;
        if (refreshToken) {
          setCookie('refreshToken', refreshToken);
        }
        if (accessToken) {
          setCookie('accessToken', accessToken);
        }
      } else {
        dispatch({ type: GET_REGISTER_FAILED });
      }
  } catch(error) {
    console.log(error);
    dispatch({ type: GET_REGISTER_FAILED });
  };
};

export const getLogout: AppThunk = () => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
    const res = await fetchRequest.post('auth/logout', { 'token' : refreshToken });
    const obj: TLogout = await checkResponse(res);
    //const obj = await getLogoutRequest();
      if (obj) {
        dispatch({ type: GET_LOGOUT_SUCCESS, logout: obj});
        dispatch({ type: GET_USER_SUCCESS, user: null});
        dispatch({ type: GET_USER_FAILED});
        dispatch({ type: GET_AUTH_SUCCESS, auth: null});
        dispatch({ type: GET_AUTH_FAILED });
        const  accessToken = getCookie('accessToken');
        const  refreshToken = getCookie('refreshToken');
        if (refreshToken) {
          deleteCookie('refreshToken');
        }
        if (accessToken) {
          deleteCookie('accessToken');
        }
      } else {
        dispatch({ type: GET_LOGOUT_FAILED });
      }
  } catch(error) {
    console.log(error);
    dispatch({ type: GET_LOGOUT_FAILED });
  };
  } else {
    dispatch({ type: GET_LOGOUT_FAILED });
  
  }
};

export const getRefreshUser: AppThunk = (body = null) => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_REFRESH_USER_REQUEST });
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.patch('auth/user', body, 
        { 'Authorization': 'Token '+ accessToken });
      const obj: TUser = await checkResponse(res);
      if (obj) {
        dispatch({ type: GET_REFRESH_USER_SUCCESS, refreshUser: obj});
        dispatch({ type: GET_USER_SUCCESS, user: obj});
      } else {
        dispatch({ type: GET_REFRESH_USER_FAILED });
      }
    } catch(error){
        console.log(error)
        dispatch({ type: GET_REFRESH_USER_FAILED });
    }
  } else {
    dispatch({ type: GET_REFRESH_USER_FAILED });
  }
};