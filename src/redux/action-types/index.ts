import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TIngredientsActions } from '../actions/ingredients';
import { TAuthActions } from '../actions/auth';
import { TForgotPasswordActions } from '../actions/forgot-password';
import { TResetPasswordActions } from '../actions/reset-password';
import { initStore } from '../store';


type TApplicationActions = 
  | TIngredientsActions
  | TAuthActions
  | TForgotPasswordActions
  | TResetPasswordActions;

const store = initStore();
export * from './wsActionTypes';
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;