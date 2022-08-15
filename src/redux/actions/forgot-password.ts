import { AppDispatch, AppThunk } from '../store';
import { createAction } from "@reduxjs/toolkit";
import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';

import {
  
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
  GET_FORGOT_PASSWORD_FAILED,

} from '../action-types';

import { TForgotPasswordType } from '../../types/data';

export const getForgotPasswordRequest = createAction(GET_FORGOT_PASSWORD_REQUEST);
export const getForgotPasswordSuccess = createAction<TForgotPasswordType>(GET_FORGOT_PASSWORD_SUCCESS);
export const getForgotPasswordFailed = createAction(GET_FORGOT_PASSWORD_FAILED);



export type TForgotPasswordAction = ReturnType<typeof getForgotPasswordRequest>
                                    | ReturnType<typeof getForgotPasswordSuccess>
                                    | ReturnType<typeof getForgotPasswordFailed>;

export type TForgotPasswordBody = {
  email: string
}

export const getForgotPassword = (body: TForgotPasswordBody) => (dispatch: AppDispatch) => {
  dispatch(getForgotPasswordRequest());
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
    console.log(obj)
    dispatch(getForgotPasswordSuccess(obj));
  } else {
//    console.log('fail');
    dispatch(getForgotPasswordFailed());
  }
  }).catch((error) => {
//    console.log(error);
    dispatch(getForgotPasswordFailed());
  });
};