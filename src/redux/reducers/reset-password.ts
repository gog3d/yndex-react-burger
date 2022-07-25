import { createReducer } from "@reduxjs/toolkit";
import {
  getResetPasswordRequest,
  getResetPasswordSuccess,
  getResetPasswordFailed,
} from '../actions/reset-password';

import { TResetPasswordState } from '../../types/data';

const resetPasswordState: TResetPasswordState = {
  resetPassword: {},
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  };
  
export const resetPasswordReducer = createReducer(resetPasswordState, (builder)=>{
  builder
    .addCase(getResetPasswordRequest, (state, action)=>{
      state.resetPasswordRequest = true;
    })
    .addCase(getResetPasswordSuccess, (state, action)=>{
      state.resetPasswordFailed = false;
      state.resetPassword = action.resetPassword;
      state.resetPasswordRequest = false;
    })
    .addCase(getResetPasswordFailed, (state, action)=>{
      state.resetPasswordFailed = true;
      state.resetPasswordRequest = false;
    })
});
