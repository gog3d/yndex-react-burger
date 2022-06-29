import {
  GET_FORGOT_PASSWORD_REQUEST,
  GET_FORGOT_PASSWORD_SUCCESS,
  GET_FORGOT_PASSWORD_FAILED,
  TForgotPasswordActions,
} from '../actions/forgot-password';
import { TForgotPasswordState } from '../action-types/data';

const forgotPasswordState: TForgotPasswordState = {
  forgotPassword: null,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  };
  
export const forgotPasswordReducer = (
  state = forgotPasswordState, 
  action: TForgotPasswordActions
  ) => {
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