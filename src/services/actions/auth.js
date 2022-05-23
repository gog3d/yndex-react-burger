import { baseURL }  from '../../utils/config.js';
import { checkResponse }  from '../utils.js';
import { setCookie, getCookie, getRefreshToken } from '../utils.js';

import { 
  getLoginRequest,  
  getLogoutRequest, 
  getTokenRequest, 
  getRegisterRequest, 
  getUserRequest, 
  getRefreshUserRequest
  } from '../fakeApiAuth.js';

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

export const getLogin = (body = null) => (dispatch) => {
  dispatch({ type: GET_LOGIN_REQUEST });
  fetch(baseURL + 'auth/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  }).then(checkResponse).then(obj => {
  //getLoginRequest(body).then(obj => {
    if (obj) {
      dispatch({ type: GET_LOGIN_SUCCESS, login: obj});
      const  accessToken = obj.accessToken.split('Bearer ')[1];
      const  refreshToken = obj.refreshToken;
      if (refreshToken) {
//        console.log(refreshToken);
        setCookie('refreshToken', refreshToken);
      }
      if (accessToken) {
//        console.log(accsessToken);
        setCookie('accessToken', accessToken);
      }
    } else {
      dispatch({ type: GET_LOGIN_FAILED });
    }
  }).catch((error) => {
    dispatch({ type: GET_LOGIN_FAILED });
  });
};

export const getRegister = (body = null) => (dispatch) => {
  dispatch({ type: GET_LOGIN_REQUEST });
  fetch(baseURL + 'auth/register', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  }).then(checkResponse).then(obj => {
//  getRegisterRequest(body).then(obj => {
    if (obj) {
      dispatch({ type: GET_REGISTER_SUCCESS, register: obj});
    } else {
      dispatch({ type: GET_REGISTER_FAILED });
    }
  }).catch((error) => {
//    console.log(error);
    dispatch({ type: GET_REGISTER_FAILED });
  });
};

export const getLogout = (body = null) => (dispatch) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  /*fetch(baseURL + 'auth/logout', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  }).then(checkResponse).then(obj => {*/
  getLogoutRequest(body).then(obj => {
    if (obj) {
      dispatch({ type: GET_LOGOUT_SUCCESS, logout: obj});
    } else {
      dispatch({ type: GET_LOGOUT_FAILED });
    }
  }).catch((error) => {
    dispatch({ type: GET_LOGOUT_FAILED });
  });
};

export const getToken =  (body = null) =>  (dispatch) => {
  dispatch({ type: GET_TOKEN_REQUEST });
  fetch(baseURL + 'auth/token', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  }).then(checkResponse).then(obj => {
//  getTokenRequest(body).then(obj => {
    if (obj) {
      dispatch({ type: GET_TOKEN_SUCCESS, token: obj});
      const  accessToken = obj.accessToken.split('Bearer ')[1];
      const  refreshToken = obj.refreshToken;
      if (refreshToken) {
        console.log({refreshToken});
        setCookie('refreshToken', refreshToken);
      }
      if (accessToken) {
        console.log({accessToken});
        setCookie('accessToken', accessToken);
      }
    } else {
      dispatch({ type: GET_TOKEN_FAILED });
    }
  }).catch((error) => {
    dispatch({ type: GET_TOKEN_FAILED });
  });
};

export const getUser =  (body = null) => (dispatch) => {
getRefreshToken().then((accessToken)=>{
///  const accessToken = getCookie('accessToken');
  console.log(accessToken);
  dispatch({ type: GET_USER_REQUEST });
  fetch(baseURL + 'auth/user', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Token '+ accessToken,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then(checkResponse).then(obj => {
//  getUserRequest(body).then(obj => {}
    if (obj) {
      dispatch({ type: GET_USER_SUCCESS, user: obj});
    } else {
      dispatch({ type: GET_USER_FAILED });
    }
  }).catch((error) => {
    console.log(error)
    dispatch({ type: GET_USER_FAILED });
  });
 });
};

export const getRefreshUser = (body = null) => (dispatch) => {
  dispatch({ type: GET_REFRESH_USER_REQUEST });
  fetch(baseURL + 'auth/user', {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Token '+ body.autorization,
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  }).then(checkResponse).then(obj => {
//  getRefreshUserRequest(body).then(obj => {
    if (obj) {
      dispatch({ type: GET_REFRESH_USER_SUCCESS, user: obj});
    } else {
      dispatch({ type: GET_REFRESH_USER_FAILED });
    }
  }).catch((error) => {
    dispatch({ type: GET_REFRESH_USER_FAILED });
  });
};