import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
import { setCookie, getCookie, deleteCookie, fetchRequest } from '../utils';

import { 
  getLoginRequest,  
  getLogoutRequest, 
  getTokenRequest, 
  getRegisterRequest, 
  getUserRequest, 
  getRefreshUserRequest
  } from '../fakeApiAuth';

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';

export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const GET_REFRESH_USER_REQUEST = 'GET_REFRESH_USER_REQUEST';
export const GET_REFRESH_USER_SUCCESS = 'GET_REFRESH_USER_SUCCESS';
export const GET_REFRESH_USER_FAILED = 'GET_REFRESH_USER_FAILED';

export const GET_AUTH_REQUEST = 'GET_AUTH_REQUEST';
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED';


export const getLogin: any = (body: object = {}) => async (dispatch: any) => {
  dispatch({ type: GET_LOGIN_REQUEST });
  try {
    const res = await fetchRequest.post('auth/login', body);
    const obj = await checkResponse(res);
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

export const getAuth: any = () => async (dispatch: any) => {
  dispatch({ type: GET_AUTH_REQUEST });
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
      const res = await fetchRequest.post('auth/token', { 'token' : refreshToken });
      const obj = await checkResponse(res);
        if (obj) {
        //  console.log(obj);
          dispatch({ type: GET_AUTH_SUCCESS, auth: obj});
          const  accessToken = obj.accessToken.split('Bearer ')[1];
          const  refreshToken = obj.refreshToken;
          if (refreshToken) {
//            console.log(refreshToken);
            setCookie('refreshToken', refreshToken);
          }
          if (accessToken) {
//            console.log(accessToken);
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

export const getUser: any =  () => async (dispatch: any) => {
  dispatch({ type: GET_USER_REQUEST });
  await getAuth();
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.get('auth/user', { 'Authorization': 'Token '+ accessToken });
      const obj = await checkResponse(res);
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

export const getRegister: any = (body: object = {}) => async (dispatch: any) => {
  dispatch({ type: GET_REGISTER_REQUEST });
  try {
    const res = await fetchRequest.post('auth/register', body);
    const obj = await checkResponse(res);
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

export const getLogout: any = () => async (dispatch: any) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    try {
    const res = await fetchRequest.post('auth/logout', { 'token' : refreshToken });
    const obj = await checkResponse(res);
      if (obj) {
        dispatch({ type: GET_LOGOUT_SUCCESS, logout: obj});
        dispatch({ type: GET_USER_SUCCESS, user: {}});
        dispatch({ type: GET_USER_FAILED});
        dispatch({ type: GET_AUTH_SUCCESS, auth: {}});
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

export const getRefreshUser: any = (body: object = {}) => async (dispatch: any) => {
  dispatch({ type: GET_REFRESH_USER_REQUEST });
  const accessToken = getCookie('accessToken');
  if(accessToken) {
    try {
      const res = await fetchRequest.patch('auth/user', body, 
        { 'Authorization': 'Token '+ accessToken });
      const obj = await checkResponse(res);
      if (obj) {
        dispatch({ type: GET_REFRESH_USER_SUCCESS, refreshUser: obj});
        dispatch({ type: GET_USER_SUCCESS, refreshUser: obj});
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