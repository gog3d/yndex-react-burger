import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/auth';
import { Route, Switch, useLocation, Link, useHistory, Redirect } from 'react-router-dom';
import { setCookie, getCookie } from '../../services/utils';

import {
  ConstructorPage, 
  LoginPage, RegisterPage, 
  ForgotPasswordPage, 
  ResetPasswordPage, 
  ProfilePage, 
  IngredientPage, 
  NotFound404 
} from '../../pages';

import ModalIngredient from '../modal-ingredient/modal-ingredient';
import IngredientDetails from '../ingredient-details/ingredient-details';

import ProtectedRoute from '../protected-route';
import { StateType }  from '../../services/types/data';


const AppConstructor = () => {

 const {
    auth,
    authRequest,
    authFailed,
  } = useSelector((store: StateType) => store.auth);


  const location = useLocation<any>();
  const background = location.state && location.state.background;

  return (
      <div>
        <Switch location={background || location}>
          <Route path='/'  exact={true}>
            <ConstructorPage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginPage />
          </Route>
          <Route path='/register' exact={true}>
            <RegisterPage />
          </Route>
          <Route path='/forgot-password' exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path='/reset-password' exact={true}>
            <ResetPasswordPage />
          </Route>
          <ProtectedRoute path='/profile'>
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/ingredients/:ingredientId">
            <IngredientPage />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
        {
          background && 
          <Route path="/ingredients/:ingredientId">
            <ModalIngredient>
              <IngredientDetails />
            </ModalIngredient> 
          </Route>
          }
      </div>
   );
}
export default AppConstructor;
