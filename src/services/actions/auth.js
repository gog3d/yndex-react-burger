import { baseURL }  from '../../utils/config.js';
import { checkResponse }  from '../utils.js';
export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';

export const GET_TOKEN_REQUEST = 'GET_TOKE_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKE_SUCCESS';
export const GET_TOKEN_FAILED = 'GET_TOKE_FAILED';

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
  if (obj) {
    dispatch({ type: GET_LOGIN_SUCCESS, login: obj});
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
  if (obj) {
    dispatch({ type: GET_REGISTER_SUCCESS, register: obj});
  } else {
    dispatch({ type: GET_REGISTER_FAILED });
  }
  }).catch((error) => {
    dispatch({ type: GET_REGISTER_FAILED });
  });
};

export const getLogout = (body = null) => (dispatch) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  fetch(baseURL + 'auth/logout', {
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
  if (obj) {
    dispatch({ type: GET_LOGOUT_SUCCESS, logout: obj});
  } else {
    dispatch({ type: GET_LOGOUT_FAILED });
  }
  }).catch((error) => {
    dispatch({ type: GET_LOGOUT_FAILED });
  });
};

export const getToken = (body = null) => (dispatch) => {
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
  if (obj) {
    dispatch({ type: GET_TOKEN_SUCCESS, token: obj});
  } else {
    dispatch({ type: GET_TOKEN_FAILED });
  }
  }).catch((error) => {
    dispatch({ type: GET_TOKEN_FAILED });
  });
};