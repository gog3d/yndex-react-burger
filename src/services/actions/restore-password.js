import { baseURL }  from '../../utils/config.js';

export const GET_RESTORE_PASSWORD_REQUEST = 'GET_RESTORE_PASSWORD_REQUEST';
export const GET_RESTORE_PASSWORD_SUCCESS = 'GET_RESTORE_PASSWORD_SUCCESS';
export const GET_RESTORE_PASSWORD_FAILED = 'GET_RESTORE_PASSWORD_FAILED';

export const getRestorePassword = (body = null) => (dispatch) => {
  dispatch({ type: GET_RESTORE_PASSWORD_REQUEST });
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
  }).then(res => res.json()).then(obj => {
  if (obj) {
    dispatch({ type: GET_RESTORE_PASSWORD_SUCCESS, restorePassword: obj});
  } else {
    dispatch({ type: GET_RESTORE_PASSWORD_FAILED });
  }
  }).catch((error) => {
    dispatch({ type: GET_RESTORE_PASSWORD_FAILED });
  });
};