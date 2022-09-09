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
    { ...resetPasswordState, resetPasswordRequest: true })
  })
  it('should handle getresetPasswordSuccess', () => {
    expect(resetPasswordReducer(resetPasswordState, {
      type: getResetPasswordSuccess,
      payload: ResetPassword
    }
  )).toEqual(
    { ...resetPasswordState, resetPassword: ResetPassword })
  })
  it('should handle getresetPasswordFailed', () => {
    expect(resetPasswordReducer(resetPasswordState, {
      type: getResetPasswordFailed,
    }
  )).toEqual(
    { ...resetPasswordState, resetPasswordFailed: true })
  })
})