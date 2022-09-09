import { combineReducers } from 'redux';

import { ingredientsReducer } from './ingredients';
import { resetPasswordReducer } from './reset-password';
import { forgotPasswordReducer } from './forgot-password';
import { authReducer } from './auth';
import { wsOrders } from './wsOrders';
import { wsUserOrders } from './wsUserOrders';

export const rootReducer = combineReducers({
  wsOrders: wsOrders,
  wsUserOrders: wsUserOrders,
  ingredients: ingredientsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
});