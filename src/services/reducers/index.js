import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients.js';
import { restorePasswordReducer } from './restore-password.js';
import { newPasswordReducer } from './new-password.js';
import { authReducer } from './auth.js';
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  restorePassword: restorePasswordReducer,
  newPassword: newPasswordReducer,
  auth: authReducer,
});
