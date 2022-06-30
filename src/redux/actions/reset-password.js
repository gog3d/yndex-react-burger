import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
import { getResetPasswordRequest } from '../fakeApiAuth';

export const GET_RESET_PASSWORD_REQUEST = 'GET_RESET_PASSWORD_REQUEST';
export const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';
export const GET_RESET_PASSWORD_FAILED = 'GET_RESET_PASSWORD_FAILED';

export const getResetPassword = (body = null) => (dispatch) => {
  dispatch({ type: GET_RESET_PASSWORD_REQUEST });
  fetch(baseURL + 'password-reset/reset', {
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
//  getResetPasswordRequest(body).then(obj => {
  if (obj) {
    dispatch({ type: GET_RESET_PASSWORD_SUCCESS, resetPassword: obj});
  } else {
    dispatch({ type: GET_RESET_PASSWORD_FAILED });
  }
  }).catch((error) => {
    dispatch({ type: GET_RESET_PASSWORD_FAILED });
  });
};