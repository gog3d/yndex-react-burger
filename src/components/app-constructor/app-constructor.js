import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
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

import { ProtectedRoute } from '../protected-route.js';

const AppConstructor = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
      <div>
        <Switch location={background || location}>
          <Route path='/' exact={true}>
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
          < ProtectedRoute path='/profile' exact={true}>
            <ProfilePage />
          </ ProtectedRoute>
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
