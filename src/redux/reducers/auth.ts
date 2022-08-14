import { createReducer } from '@reduxjs/toolkit';
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailed,

  getRegisterRequest,
  getRegisterSuccess,
  getRegisterFailed,

  getLogoutRequest,
  getLogoutSuccess,
  getLogoutFailed,
 
  getUserRequest,
  getUserSuccess,
  getUserFailed,

  getRefreshUserRequest,
  getRefreshUserSuccess,
  getRefreshUserFailed,

  getAuthRequest,
  getAuthSuccess,
  getAuthFailed,

  getTokenRequest,
  getTokenSuccess,
  getTokenFailed,
  
} from '../actions/auth';

//import { getTokenRequestApi } from '../fakeApiAuth';

import { TAuthState, TRegister, TLogin, TLogout, TToken } from '../../types/data';


export const authState: TAuthState = {
    login: null as (null | TLogin),
    loginRequest: false,
    loginFailed: false,
    
//    register: null as (null | TRegister),
    register: null as (null | TLogin),
    registerRequest: false,
    registerFailed: false,
    
    logout: null as (null | TLogout),
    logoutRequest: false,
    logoutFailed: false,
    
    token: null as (null | TToken),
    tokenRequest: false,
    tokenFailed: false,

    user: null as (null | TLogin),
    userRequest: false,
    userFailed: false,

    refreshUser: null as (null | TLogin),
//    refreshUser:  any,
    refreshUserRequest: false,
    refreshUserFailed: false,
    
    auth: null as (null | TToken),
    authRequest: false,
    authFailed: false
  };
  
export const authReducer = createReducer(authState, (builder) => {
  builder
  .addCase(getLoginRequest, (state, action) => {
      state.loginRequest = true;
    })  
    .addCase(getLoginSuccess, (state, action) => {
      state.loginFailed = false; 
      state.login = action.payload; 
      state.register = action.payload; 
      state.loginRequest = false;
    })

    .addCase(getLoginFailed, (state, action) => {
      state.loginFailed = true; 
      state.loginRequest = false;
    })
    
    .addCase(getRegisterRequest, (state, action) => {
      state.registerRequest = true;
    })
    .addCase(getRegisterSuccess, (state, action) => {
      state.registerFailed = false;
      state.register = action.payload;
      state.registerRequest = false;
    })
    .addCase(getRegisterFailed, (state, action) => {
      state.registerFailed = true; 
      state.registerRequest = false;
    })
    .addCase(getLogoutRequest, (state, action) => {
      state.logoutRequest = true;
    })
    .addCase(getLogoutSuccess, (state, action) => {
      state.logoutFailed = false;
      state.logout = action.payload; 
      state.logoutRequest = false;
    })
    .addCase(getLogoutFailed, (state, action) => {
      state.logoutFailed = true;
      state.logoutRequest = false;
    })
    .addCase(getTokenRequest, (state, action)=>{
      state.tokenRequest = true;
    })
    .addCase(getTokenSuccess, (state, action)=>{
      state.tokenFailed = false; 
      state.token = action.payload;
      state.tokenRequest = false;
    })
    .addCase(getTokenFailed, (state, action)=>{
      state.tokenFailed = true; 
      state.tokenRequest = false;
    })
    .addCase(getUserRequest, (state, action)=>{
      state.userRequest = true;
    })
    .addCase(getUserSuccess, (state, action)=>{
      state.userFailed = false; 
      state.user = action.payload; 
      state.login = action.payload;
      state.userRequest =  false;
    })
    .addCase(getUserFailed, (state, action)=>{
      state.userFailed = true; 
      state.userRequest = false;
    })
    .addCase(getRefreshUserRequest, (state, action)=>{
      state.refreshUserRequest = true;
    })
    .addCase(getRefreshUserSuccess, (state, action)=>{
      state.refreshUserFailed = false; 
      state.refreshUser = action.payload; 
      state.refreshUserRequest = false; 
//      if(state.login) state.login.user = action.payload;
      state.login = action.payload;
    })
    .addCase(getRefreshUserFailed, (state, action)=>{
      state.refreshUserFailed = true; 
      state.refreshUserRequest = false;
    })
    .addCase(getAuthRequest, (state, action)=>{
      state.authRequest = true;
    })
    .addCase(getAuthSuccess, (state, action)=>{
      state.authFailed = false; 
      state.auth = action.payload; 
      state.authRequest = false;
    })
    .addCase(getAuthFailed, (state, action)=>{
      state.authFailed = true; 
      state.authRequest = false;
    })
});