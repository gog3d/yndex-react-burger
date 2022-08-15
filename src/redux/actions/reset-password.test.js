import {
  getResetPasswordRequest,
  getResetPasswordSuccess,
  getResetPasswordFailed,
} from '../actions/reset-password';

import { resetPasswordState, resetPasswordReducer } from '../reducers/reset-password';

const ResetPassword = {
  success: true,
  message: 'message',
};

describe('reset-password reducer', () => {
  it('return initil reset-password state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(resetPasswordState)
  })
  it('should handle getResetPasswordRequest', () => {
    expect(resetPasswordReducer(resetPasswordState, {
      type: getResetPasswordRequest,
    }
  )).toEqual(
    {
      resetPassword: {},
      resetPasswordRequest: true,
      resetPasswordFailed: false,
    })
  })
  it('should handle getresetPasswordSuccess', () => {
    expect(resetPasswordReducer(resetPasswordState, {
      type: getResetPasswordSuccess,
      resetPassword: ResetPassword
    }
  )).toEqual(
    {
      resetPassword: ResetPassword,
      resetPasswordRequest: false,
      resetPasswordFailed: false,
    })
  })
  it('should handle getresetPasswordFailed', () => {
    expect(resetPasswordReducer(resetPasswordState, {
      type: getResetPasswordFailed,
    }
  )).toEqual(
    {
      resetPassword: {},
      resetPasswordRequest: false,
      resetPasswordFailed: true,
    })
  })
})