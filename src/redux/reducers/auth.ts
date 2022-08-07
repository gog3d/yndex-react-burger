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

import { TAuthState } from '../../types/data';


export const authState: TAuthState = {
    login: {},
    loginRequest: false,
    loginFailed: false,
    
    register: {},
    registerRequest: false,
    registerFailed: false,
    
    logout: {},
    logoutRequest: false,
    logoutFailed: false,
    
    token: {},
    tokenRequest: false,
    tokenFailed: false,

    user: {},
    userRequest: false,
    userFailed: false,

    refreshUser: {},
    refreshUserRequest: false,
    refreshUserFailed: false,
    
    auth: {},
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
      state.login = action.login; 
      state.register = action.login; 
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
      state.register = action.register;
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
      state.logout = action.logout; 
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
      state.token = action.token;
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
      state.user = action.user; 
      state.login = action.user;
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
      state.refreshUser = action.refreshUser; 
      state.refreshUserRequest = false; 
      state.login.user = action.refreshUser;
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
      state.auth = action.auth; 
      state.authRequest = false;
    })
    .addCase(getAuthFailed, (state, action)=>{
      state.authFailed = true; 
      state.authRequest = false;
    })
});