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

  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  
  GET_REFRESH_USER_REQUEST,
  GET_REFRESH_USER_SUCCESS,
  GET_REFRESH_USER_FAILED,

  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILED,


} from '../actions/auth';

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


    case GET_USER_REQUEST: {
      return {...state, userRequest: true};
    }
    case GET_USER_SUCCESS: {
      return {
        ...state, 
        userFailed: false, 
        user: action.user, 
        login: action.user,
        userRequest: false};
    }
    case GET_USER_FAILED: {
      return {
        ...state, 
        userFailed: true, 
        userRequest: false};
    }
    case GET_REFRESH_USER_REQUEST: {
      return {...state, refreshUserRequest: true};
    }
    case GET_REFRESH_USER_SUCCESS: {
      return {
        ...state, 
        refreshUserFailed: false, 
        refreshUser: action.refreshUser, 
        refreshUserRequest: false,
        login: {...state.login.user, user: action.refreshUser}
      };
    }
    case GET_REFRESH_USER_FAILED: {
      return {
        ...state, 
        refreshUserFailed: true, 
        refreshUserRequest: false};
    }
    case GET_AUTH_REQUEST: {
      return {...state, authRequest: true};
    }
    case GET_AUTH_SUCCESS: {
      return {
        ...state, 
        authFailed: false, 
        auth: action.auth, 
        authRequest: false,
//        login: {...state.login.user, user: action.refreshUser}
      };
    }
    case GET_AUTH_FAILED: {
      return {
        ...state, 
        authFailed: true, 
        authRequest: false};
    }
    default: {
      return state;
    }
  }
};