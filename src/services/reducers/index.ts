import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { resetPasswordReducer } from './reset-password';
import { forgotPasswordReducer } from './forgot-password';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
});
