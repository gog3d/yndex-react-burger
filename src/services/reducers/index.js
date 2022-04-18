import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients.js';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});
