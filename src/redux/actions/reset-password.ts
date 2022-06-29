import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
//import { getResetPasswordRequest } from '../fakeApiAuth.js';
import { AppDispatch, AppThunk } from '../action-types';
import { TResetPasswordType } from '../action-types/data';

export const GET_RESET_PASSWORD_REQUEST: 'GET_RESET_PASSWORD_REQUEST' = 'GET_RESET_PASSWORD_REQUEST';
export const GET_RESET_PASSWORD_SUCCESS: 'GET_RESET_PASSWORD_SUCCESS' = 'GET_RESET_PASSWORD_SUCCESS';
export const GET_RESET_PASSWORD_FAILED: 'GET_RESET_PASSWORD_FAILED' = 'GET_RESET_PASSWORD_FAILED';

export interface IGetResetPasswordRequest {
  readonly type: typeof GET_RESET_PASSWORD_REQUEST;
};
export interface IGetResetPasswordSuccess {
  readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
  readonly resetPassword: TResetPasswordType;
};
export interface IGetResetPasswordFailed {
  readonly type: typeof GET_RESET_PASSWORD_FAILED;
};

export type TResetPasswordActions = 
  | IGetResetPasswordRequest
  | IGetResetPasswordSuccess
  | IGetResetPasswordFailed;

export const getResetPassword: AppThunk = (body = null) => (dispatch: AppDispatch) => {
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