import {
  GET_NEW_PASSWORD_REQUEST,
  GET_NEW_PASSWORD_SUCCESS,
  GET_NEW_PASSWORD_FAILED,
} from '../actions/new-password.js';

const newPasswordState = {
    newPassword: {},
    newPasswordRequest: false,
    newPasswordFailed: false,
  };
  
export const newPasswordReducer = (state = newPasswordState, action) => {
  switch (action.type) {
    case GET_NEW_PASSWORD_REQUEST: {
      return {...state, newPasswordRequest: true};
    }
    case GET_NEW_PASSWORD_SUCCESS: {
      return {
        ...state, 
        newPasswordFailed: false, 
        newPassword: action.newPassword, 
        newPasswordRequest: false};
    }
    case GET_NEW_PASSWORD_FAILED: {
      return {
        ...state, 
        newPasswordFailed: true, 
        newPasswordRequest: false};
    }
    default: {
      return state;
    }
  }
};