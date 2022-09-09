import { createReducer } from "@reduxjs/toolkit";
import {
  getResetPasswordRequest,
  getResetPasswordSuccess,
  getResetPasswordFailed,
} from '../actions/reset-password';

import { TResetPasswordState, TResetPasswordType } from '../../types/data';

export const resetPasswordState: TResetPasswordState = {
  resetPassword: null as (null | TResetPasswordType),
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
      state.resetPassword = action.payload;
      state.resetPasswordRequest = false;
    })
    .addCase(getResetPasswordFailed, (state, action)=>{
      state.resetPasswordFailed = true;
      state.resetPasswordRequest = false;
    })
});
