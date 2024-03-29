import { createReducer } from '@reduxjs/toolkit';

import {
  getForgotPasswordRequest,
  getForgotPasswordSuccess,
  getForgotPasswordFailed,
} from '../actions/forgot-password';

import { TForgotPasswordState,TForgotPasswordType } from '../../types/data';

export const forgotPasswordState: TForgotPasswordState = {
  forgotPassword: null as (null | TForgotPasswordType),
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  };
  
export const forgotPasswordReducer = createReducer(forgotPasswordState, (builder) => {
  builder
  .addCase(getForgotPasswordRequest, (state, action) => {
    state.forgotPasswordRequest = true;
  })
  .addCase(getForgotPasswordSuccess, (state, action) => {
    state.forgotPasswordFailed = false; 
    state.forgotPassword = action.payload; 
    state.forgotPasswordRequest = false;
  })
  .addCase(getForgotPasswordFailed, (state, action) => {
    state.forgotPasswordFailed = true; 
    state.forgotPasswordRequest = false;
  })
});