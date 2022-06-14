import {
  GET_RESET_PASSWORD_REQUEST,
  GET_RESET_PASSWORD_SUCCESS,
  GET_RESET_PASSWORD_FAILED,
} from '../actions/reset-password.js';

const resetPasswordState = {
  resetPassword: {},
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  };
  
export const resetPasswordReducer = (state = resetPasswordState, action) => {
  switch (action.type) {
    case GET_RESET_PASSWORD_REQUEST: {
      return {...state, resetPasswordRequest: true};
    }
    case GET_RESET_PASSWORD_SUCCESS: {
      return {
        ...state, 
        resetPasswordFailed: false, 
        resetPassword: action.resetPassword, 
        resetPasswordRequest: false};
    }
    case GET_RESET_PASSWORD_FAILED: {
      return {
        ...state, 
        resetPasswordFailed: true, 
        resetPasswordRequest: false};
    }
    default: {
      return state;
    }
  }
};