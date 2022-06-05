import { baseURL }  from '../../utils/config';
import { checkResponse }  from '../utils';
import { getForgotPasswordRequest } from '../fakeApiAuth';

export const GET_FORGOT_PASSWORD_REQUEST = 'GET_FORGOT_PASSWORD_REQUEST';
export const GET_FORGOT_PASSWORD_SUCCESS = 'GET_FORGOT_PASSWORD_SUCCESS';
export const GET_FORGOT_PASSWORD_FAILED = 'GET_FORGOT_PASSWORD_FAILED';

export const getForgotPassword: any = (body: object = {}) => (dispatch: any) => {
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