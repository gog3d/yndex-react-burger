import { baseURL }  from '../../utils/config.js';
import { checkResponse }  from '../utils.js';
//import { getForgotPasswordRequest } from '../fakeApiAuth';

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';

export const GET_USER_ORDERS_REQUEST = 'GET_USER_ORDERS_REQUEST';
export const GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';
export const GET_USER_ORDERS_FAILED = 'GET_USER_ORDERS_FAILED';
/*
export const getForgotPassword = (body = null) => (dispatch) => {
  dispatch({ type: GET_FORGOT_PASSWORD_REQUEST });
  fetch(baseURL + 'password-reset', {
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
//    getForgotPasswordRequest(body).then(obj => {
  if (obj) {
    dispatch({ type: GET_FORGOT_PASSWORD_SUCCESS, restorePassword: obj});
  } else {
//    console.log('fail');
    dispatch({ type: GET_FORGOT_PASSWORD_FAILED });
  }
  }).catch((error) => {
//    console.log(error);
    dispatch({ type: GET_FORGOT_PASSWORD_FAILED });
  });
};
*/