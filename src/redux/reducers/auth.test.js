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

import { authReducer, authState } from '../reducers/auth';

const Login = {
  success: true,
  user: {
      email: 'email',
      name: 'name',
  },
  accessToken: 'accessToken',
  refreshToken: 'refreshToken'
};
const Register = {
  success: true,
  user: {
      email: 'email',
      name: 'name',
  },
  accessToken: 'accessToken',
  refreshToken: 'refreshToken'
};
const Logout = {
  success: true,
  message: 'message',
};
const Token = {
  success: true,
  accessToken: 'accessToken',
  refreshToken: 'refreshToken'
}
const User = {
  email: 'email',
  name: 'name',
}

describe('auth reducer', () => {
  it('return initil auth state', () => {
    expect(authReducer(undefined, {})).toEqual(authState)
  })
  it('should handle getLoginRequest', () => {
    expect(authReducer(authState, {
      type: getLoginRequest,
    }
      )).toEqual(
      { ...authState, loginRequest: true }
    )
  })
  it('should handle getLoginSuccess', () => {
    expect(authReducer(authState, {
      type: getLoginSuccess,
      payload: Login, 
    }
      )).toEqual(
      { ...authState,  login: Login, register: Login, loginFailed: false }
    )
  })
  it('should handle getLoginFailed', () => {
    expect(authReducer(authState, {
      type: getLoginFailed, 
    }
      )).toEqual(
        { ...authState, loginFailed: true }
      )
  })
  it('should handle getRegisterRequest', () => {
    expect(authReducer(authState, {
      type: getRegisterRequest,
    }
      )).toEqual(
        {...authState,  registerRequest: true }
      )
  })
  it('should handle getRegisterSuccess', () => {
    expect(authReducer(authState, {
      type: getRegisterSuccess,
      payload: Register, 
    }
      )).toEqual(
        { ...authState, register: Register }
      )
  })
  it('should handle getRegisterFailed', () => {
    expect(authReducer(authState, {
      type: getRegisterFailed, 
    }
      )).toEqual(
        { ...authState, registerFailed: true }
      )
  })
  it('should handle getLogoutRequest', () => {
    expect(authReducer(authState, {
      type: getLogoutRequest,
    }
      )).toEqual(
        { ...authState, logoutRequest: true }
      )
  })
  it('should handle getLogoutSuccess', () => {
    expect(authReducer(authState, {
      type: getLogoutSuccess,
      payload: Logout, 
    }
      )).toEqual(
        { ...authState, logout: Logout }
      )
  })
  it('should handle getLogoutFailed', () => {
    expect(authReducer(authState, {
      type: getLogoutFailed,
    }
      )).toEqual(
        { ...authState, logoutFailed: true }
      )
  })
  it('should handle getTokenRequest', () => {
    expect(authReducer(authState, {
      type: getTokenRequest,
    }
      )).toEqual(
        { ...authState, tokenRequest: true }
      )
  })
  it('should handle getTokenSuccess', () => {
    expect(authReducer(authState, {
      type: getTokenSuccess,
      payload: Token, 
    }
      )).toEqual(
        { ...authState,  token: Token }
      )
  })
  it('should handle getTokenFailed', () => {
    expect(authReducer(authState, {
      type: getTokenFailed,
    }
      )).toEqual(
        { ...authState, tokenFailed: true }
      )
  })
  it('should handle getUserRequest', () => {
    expect(authReducer(authState, {
      type: getUserRequest,
    }
      )).toEqual(
        { ...authState, userRequest: true }
      )
  })
  it('should handle getUserSuccess', () => {
    expect(authReducer(authState, {
      type: getUserSuccess,
      payload: Login, 
    }
      )).toEqual(
        { ...authState,  user: Login, login: Login }
      )
  })
  it('should handle getUserFailed', () => {
    expect(authReducer(authState, {
      type: getUserFailed, 
    }
      )).toEqual(
         { ...authState, userFailed: true }
      )
  })
  it('should handle getRefreshUserRequest', () => {
    expect(authReducer(authState, {
      type: getRefreshUserRequest,
    }
      )).toEqual(
        { ...authState, refreshUserRequest: true }
      )
  })
  it('should handle getRefreshUserSuccess', () => {
    expect(authReducer({ ...authState, login: Login }, {
      type: getRefreshUserSuccess,
      payload: Login, 
    }
      )).toEqual(
        { ...authState,
          login: Login, refreshUser: Login }
      )
  })
  it('should handle getRefreshUserFailed', () => {
    expect(authReducer(authState, {
      type: getRefreshUserFailed,
    }
      )).toEqual(
        { ...authState, refreshUserFailed: true }
      )
  })
  it('should handle getAuthRequest', () => {
    expect(authReducer(authState, {
      type: getAuthRequest,
    }
      )).toEqual(
        { ...authState, authRequest: true }
      )
  })
  it('should handle getAuthSuccess', () => {
    expect(authReducer(authState, {
      type: getAuthSuccess,
      payload: Token, 
    }
      )).toEqual(
        { ...authState, auth: Token }
      )
  })
  it('should handle getAuthFailed', () => {
    expect(authReducer(authState, {
      type: getAuthFailed,
    }
      )).toEqual(
        { ...authState, authFailed: true }
      )
  })
})
