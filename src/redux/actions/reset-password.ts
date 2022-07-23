import { createAction } from "@reduxjs/toolkit";
import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
//import { getResetPasswordRequestApi } from '../fakeApiAuth';

import {
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
  GET_RESET_PASSWORD_FAILED,
} from '../action-types';

export const getResetPasswordRequest = createAction(GET_RESET_PASSWORD_REQUEST);
export const getResetPasswordSuccess = createAction(GET_RESET_PASSWORD_SUCCESS);
export const getResetPasswordFailed = createAction(GET_RESET_PASSWORD_FAILED);


export const getResetPassword = (body = null) => (dispatch) => {
  dispatch({ type: getResetPasswordRequest });
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
//  getResetPasswordRequestApi(body).then(obj => {
  if (obj) {
    dispatch({ type: getResetPasswordSuccess, resetPassword: obj});
  } else {
    dispatch({ type: getResetPasswordFailed });
  }
  }).catch((error) => {
    dispatch({ type: getResetPasswordFailed });
  });
};