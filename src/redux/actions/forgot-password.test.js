import {
  getForgotPasswordRequest,
  getForgotPasswordSuccess,
  getForgotPasswordFailed,
} from '../actions/forgot-password';

import { forgotPasswordState, forgotPasswordReducer } from '../reducers/forgot-password';

const ForgotPassword = {
  success: true,
  message: 'message',
};

describe('forgot-password reducer', () => {
  it('return initil forgot-password state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(forgotPasswordState)
  })
  it('should handle getForgotPasswordRequest', () => {
    expect(forgotPasswordReducer(forgotPasswordState, {
      type: getForgotPasswordRequest,
    }
  )).toEqual(
    {
      forgotPassword: {},
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
    })
  })
  it('should handle getForgotPasswordSuccess', () => {
    expect(forgotPasswordReducer(forgotPasswordState, {
      type: getForgotPasswordSuccess,
      restorePassword: ForgotPassword
    }
  )).toEqual(
    {
      forgotPassword: ForgotPassword,
      forgotPasswordRequest: false,
      forgotPasswordFailed: false,
    })
  })
  it('should handle getForgotPasswordFailed', () => {
    expect(forgotPasswordReducer(forgotPasswordState, {
      type: getForgotPasswordFailed,
    }
  )).toEqual(
    {
      forgotPassword: {},
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
    })
  })
})