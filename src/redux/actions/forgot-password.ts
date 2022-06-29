import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
//import { getForgotPasswordRequest } from '../fakeApiAuth';
import { AppDispatch, AppThunk } from '../action-types';
import { TForgotPasswordType } from '../action-types/data';

export const GET_FORGOT_PASSWORD_REQUEST: 'GET_FORGOT_PASSWORD_REQUEST' = 'GET_FORGOT_PASSWORD_REQUEST';
export const GET_FORGOT_PASSWORD_SUCCESS: 'GET_FORGOT_PASSWORD_SUCCESS' = 'GET_FORGOT_PASSWORD_SUCCESS';
export const GET_FORGOT_PASSWORD_FAILED: 'GET_FORGOT_PASSWORD_FAILED' = 'GET_FORGOT_PASSWORD_FAILED';

export interface IGetForgotPasswordRequest {
  readonly type: typeof GET_FORGOT_PASSWORD_REQUEST;
};

export interface IGetForgotPasswordSuccess {
  readonly type: typeof GET_FORGOT_PASSWORD_SUCCESS;
  readonly restorePassword: TForgotPasswordType;
};

export interface IGetForgotPasswordFailed {
  readonly type: typeof GET_FORGOT_PASSWORD_FAILED;
};

export type TForgotPasswordActions = 
  | IGetForgotPasswordRequest
  | IGetForgotPasswordSuccess
  | IGetForgotPasswordFailed;

export const getForgotPassword: AppThunk = (body: null | {email: string} = null) => (dispatch: AppDispatch) => {
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
    dispatch({ type: GET_FORGOT_PASSWORD_FAILED });
  }
  }).catch((error) => {
    dispatch({ type: GET_FORGOT_PASSWORD_FAILED });
  });
};