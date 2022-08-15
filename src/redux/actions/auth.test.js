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
  getLogin,

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
      {
        login: {},
        loginRequest: true,
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
      }
    )
  })
  it('should handle getLoginSuccess', () => {
    expect(authReducer(authState, {
      type: getLoginSuccess,
      login: Login, 
    }
      )).toEqual(
      {
        login: Login,
        loginRequest: false,
        loginFailed: false,
        
        register: Login,
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
      }
    )
  })
  it('should handle getLoginFailed', () => {
    expect(authReducer(authState, {
      type: getLoginFailed, 
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: true,
            
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
        }
      )
  })
  it('should handle getRegisterRequest', () => {
    expect(authReducer(authState, {
      type: getRegisterRequest,
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: true,
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
        }
      )
  })
  it('should handle getRegisterSuccess', () => {
    expect(authReducer(authState, {
      type: getRegisterSuccess,
      register: Register, 
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: Register,
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
        }
      )
  })
  it('should handle getRegisterFailed', () => {
    expect(authReducer(authState, {
      type: getRegisterFailed, 
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: false,
          registerFailed: true,
            
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
        }
      )
  })
  it('should handle getLogoutRequest', () => {
    expect(authReducer(authState, {
      type: getLogoutRequest,
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: false,
          registerFailed: false,
            
          logout: {},
          logoutRequest: true,
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
        }
      )
  })
  it('should handle getLogoutSuccess', () => {
    expect(authReducer(authState, {
      type: getLogoutSuccess,
      logout: Logout, 
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: false,
          registerFailed: false,
            
          logout: Logout,
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
        }
      )
  })
  it('should handle getLogoutFailed', () => {
    expect(authReducer(authState, {
      type: getLogoutFailed,
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: false,
          registerFailed: false,
            
          logout: {},
          logoutRequest: false,
          logoutFailed: true,
            
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
        }
      )
  })
  it('should handle getTokenRequest', () => {
    expect(authReducer(authState, {
      type: getTokenRequest,
    }
      )).toEqual(
        {
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
          tokenRequest: true,
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
        }
      )
  })
  it('should handle getTokenSuccess', () => {
    expect(authReducer(authState, {
      type: getTokenSuccess,
      token: Token, 
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: false,
          registerFailed: false,
            
          logout: {},
          logoutRequest: false,
          logoutFailed: false,
            
          token: Token,
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
        }
      )
  })
  it('should handle getTokenFailed', () => {
    expect(authReducer(authState, {
      type: getTokenFailed,
    }
      )).toEqual(
        {
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
          tokenFailed: true,
        
          user: {},
          userRequest: false,
          userFailed: false,
        
          refreshUser: {},
          refreshUserRequest: false,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getUserRequest', () => {
    expect(authReducer(authState, {
      type: getUserRequest,
    }
      )).toEqual(
        {
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
          userRequest: true,
          userFailed: false,
        
          refreshUser: {},
          refreshUserRequest: false,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getUserSuccess', () => {
    expect(authReducer(authState, {
      type: getUserSuccess,
      user: User, 
    }
      )).toEqual(
        {
          login: User,
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
        
          user: User,
          userRequest: false,
          userFailed: false,
        
          refreshUser: {},
          refreshUserRequest: false,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getUserFailed', () => {
    expect(authReducer(authState, {
      type: getUserFailed, 
    }
      )).toEqual(
        {
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
          userFailed: true,
        
          refreshUser: {},
          refreshUserRequest: false,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getRefreshUserRequest', () => {
    expect(authReducer(authState, {
      type: getRefreshUserRequest,
    }
      )).toEqual(
        {
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
          refreshUserRequest: true,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getRefreshUserSuccess', () => {
    expect(authReducer(
      {
        login: {
          success: true,
          user: {
              email: 'email',
              name: 'name',
          },
          accessToken: 'accessToken',
          refreshToken: 'refreshToken'
        },
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
      }
      , {
      type: getRefreshUserSuccess,
      refreshUser: User, 
    }
      )).toEqual(
        {
          login: {
            success: true,
            user: User,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken'
          },
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
        
          refreshUser: User,
          refreshUserRequest: false,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getRefreshUserFailed', () => {
    expect(authReducer(authState, {
      type: getRefreshUserFailed,
    }
      )).toEqual(
        {
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
          refreshUserFailed: true,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getAuthRequest', () => {
    expect(authReducer(authState, {
      type: getAuthRequest,
    }
      )).toEqual(
        {
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
          authRequest: true,
          authFailed: false
        }
      )
  })
  it('should handle getAuthSuccess', () => {
    expect(authReducer(authState, {
      type: getAuthSuccess,
      auth: Token, 
    }
      )).toEqual(
        {
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
            
          auth: Token,
          authRequest: false,
          authFailed: false
        }
      )
  })
  it('should handle getAuthFailed', () => {
    expect(authReducer(authState, {
      type: getAuthFailed,
    }
      )).toEqual(
        {
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
          authFailed: true
        }
      )
  })
})

