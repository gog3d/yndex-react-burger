import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients.js';
import { resetPasswordReducer } from './reset-password.js';
import { forgotPasswordReducer } from './forgot-password.js';
import { authReducer } from './auth.js';

import { ordersReducer } from './orders';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  orders: ordersReducer,
});
