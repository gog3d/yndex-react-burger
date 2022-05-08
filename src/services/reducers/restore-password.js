import {
  GET_RESTORE_PASSWORD_REQUEST,
  GET_RESTORE_PASSWORD_SUCCESS,
  GET_RESTORE_PASSWORD_FAILED,
} from '../actions/restore-password.js';

const restorePasswordState = {
    restorePassword: {},
    restorePasswordRequest: false,
    restorePasswordFailed: false,
  };
  
export const restorePasswordReducer = (state = restorePasswordState, action) => {
  switch (action.type) {
    case GET_RESTORE_PASSWORD_REQUEST: {
      return {...state, restorePasswordRequest: true};
    }
    case GET_RESTORE_PASSWORD_SUCCESS: {
      return {
        ...state, 
        restorePasswordFailed: false, 
        restorePassword: action.restorePassword, 
        restorePasswordRequest: false};
    }
    case GET_RESTORE_PASSWORD_FAILED: {
      return {
        ...state, 
        restorePasswordFailed: true, 
        restorePasswordRequest: false};
    }
    default: {
      return state;
    }
  }
};