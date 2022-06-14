import {
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
  GET_FORGOT_PASSWORD_FAILED,
} from '../actions/forgot-password';

const forgotPasswordState = {
  forgotPassword: {},
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  };
  
export const forgotPasswordReducer = (state = forgotPasswordState, action) => {
  switch (action.type) {
    case GET_FORGOT_PASSWORD_REQUEST: {
      return {...state, forgotPasswordRequest: true};
    }
    case GET_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state, 
        forgotPasswordFailed: false, 
        forgotPassword: action.restorePassword, 
        forgotPasswordRequest: false};
    }
    case GET_FORGOT_PASSWORD_FAILED: {
      return {
        ...state, 
        forgotPasswordFailed: true, 
        forgotPasswordRequest: false};
    }
    default: {
      return state;
    }
  }
};