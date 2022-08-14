import { createAction } from "@reduxjs/toolkit";
import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';

import {
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
  GET_RESET_PASSWORD_FAILED,
} from '../action-types';

import { AppDispatch, AppThunk } from '../store';

export const getResetPasswordRequest = createAction(GET_RESET_PASSWORD_REQUEST);
export const getResetPasswordSuccess = createAction(GET_RESET_PASSWORD_SUCCESS);
export const getResetPasswordFailed = createAction(GET_RESET_PASSWORD_FAILED);

export type TResetPassword = ReturnType<typeof getResetPasswordRequest>
                            | ReturnType<typeof getResetPasswordSuccess>
                            | ReturnType<typeof getResetPasswordFailed>;

export type TResetPasswordBody = { 
  password: string,
  token: string
 }                            

export const getResetPassword = (body: TResetPasswordBody) => (dispatch: AppDispatch) => {
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