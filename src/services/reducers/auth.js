import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,

  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
  
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
} from '../actions/auth.js';

const authState = {
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
  };
  
export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case GET_LOGIN_REQUEST: {
      return {...state, loginRequest: true};
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state, 
        loginFailed: false, 
        login: action.login, 
        register: action.login, 
        loginRequest: false};
    }
    case GET_LOGIN_FAILED: {
      return {
        ...state, 
        loginFailed: true, 
        loginRequest: false};
    }
    
    case GET_REGISTER_REQUEST: {
      return {...state, registerRequest: true};
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state, 
        registerFailed: false, 
        register: action.register, 
        login: action.register, 
        registerRequest: false};
    }
    case GET_REGISTER_FAILED: {
      return {
        ...state, 
        registerFailed: true, 
        registerRequest: false};
    }
    
    case GET_LOGOUT_REQUEST: {
      return {...state, logoutRequest: true};
    }
    case GET_LOGOUT_SUCCESS: {
      return {
        ...state, 
        logoutFailed: false, 
        logout: action.logout, 
        logoutRequest: false};
    }
    case GET_LOGOUT_FAILED: {
      return {
        ...state, 
        logoutFailed: true, 
        logoutRequest: false};
    }
    
    case GET_TOKEN_REQUEST: {
      return {...state, tokenRequest: true};
    }
    case GET_TOKEN_SUCCESS: {
      return {
        ...state, 
        tokenFailed: false, 
        token: action.token, 
        tokenRequest: false};
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state, 
        tokenFailed: true, 
        tokenRequest: false};
    }
    default: {
      return state;
    }
  }
};