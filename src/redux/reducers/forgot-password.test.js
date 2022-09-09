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
    { ...forgotPasswordState, forgotPasswordRequest: true })
  })
  it('should handle getForgotPasswordSuccess', () => {
    expect(forgotPasswordReducer(forgotPasswordState, {
      type: getForgotPasswordSuccess,
      payload: ForgotPassword
    }
  )).toEqual(
    { ...forgotPasswordState, forgotPassword: ForgotPassword })
  })
  it('should handle getForgotPasswordFailed', () => {
    expect(forgotPasswordReducer(forgotPasswordState, {
      type: getForgotPasswordFailed,
    }
  )).toEqual(
    { ...forgotPasswordState, forgotPasswordFailed: true })
  })
})