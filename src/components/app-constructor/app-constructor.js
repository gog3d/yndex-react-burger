import React, { useEffect }from 'react';
//import { Route, Switch, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getUser, getToken } from '../../services/actions/auth.js';
import { Route, Switch, useLocation, Link, useHistory, Redirect } from 'react-router-dom';
import { setCookie, getCookie, getRefreshToken } from '../../services/utils.js';

import {
  ConstructorPage, 
  LoginPage, RegisterPage, 
  ForgotPasswordPage, 
  ResetPasswordPage, 
  ProfilePage, 
  IngredientPage, 
  NotFound404 
} from '../../pages';

import ModalIngredient from '../modal-ingredient/modal-ingredient.js';
//import BurgerIngredientsListComponentItem from '../burger-ingredients-list-component-item/burger-ingredients-list-component-item.js';
import IngredientDetails from '../ingredient-details/ingredient-details.js';

import ProtectedRoute from '../protected-route.js';

const AppConstructor = () => {

 const {
    auth,
    authRequest,
    authFailed,
  } = useSelector(store => store.auth);


  const location = useLocation();
  const background = location.state && location.state.background;

  return (
      <div>
        <Switch location={background || location}>
          <ProtectedRoute path='/' needAuth={true}  exact={true}>
            <ConstructorPage />
          </ProtectedRoute>
          <ProtectedRoute path='/login' needAuth={false} exact={true}>
            <LoginPage />
          </ProtectedRoute>
          <ProtectedRoute path='/register' needAuth={false} exact={true}>
            <RegisterPage />
          </ProtectedRoute>
          <ProtectedRoute path='/forgot-password' needAuth={false} exact={true}>
            <ForgotPasswordPage />
          </ProtectedRoute>
          <ProtectedRoute path='/reset-password' needAuth={true} exact={true}>
            <ResetPasswordPage />
          </ProtectedRoute>
          <ProtectedRoute path='/profile' needAuth={true} exact={true}>
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
