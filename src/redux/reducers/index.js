//export * from './rootReducer';

import { combineReducers } from 'redux';
import { wsReducer } from './wsReducer';

import { ingredientsReducer } from './ingredients';
import { resetPasswordReducer } from './reset-password';
import { forgotPasswordReducer } from './forgot-password';
import { authReducer } from './auth';


export const rootReducer = combineReducers({
  orders: wsReducer,
  ingredients: ingredientsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
});