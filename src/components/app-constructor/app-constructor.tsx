import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import {
  ConstructorPage, 
  LoginPage, RegisterPage, 
  ForgotPasswordPage, 
  ResetPasswordPage, 
  ProfilePage, 
  IngredientPage,
  FeedPage,
  OrdersPage,
  OrderInformationPage, 
  NotFound404 
} from '../../pages';

import ModalOrderInformation from '../modal-order-information/modal-order-information';
import ModalIngredient from '../modal-ingredient/modal-ingredient';

import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderInformation from '../order-information/order-information';
import ProtectedRoute from '../protected-route';
import  { TLocationState }  from '../../types/data';

const AppConstructor: React.FC = () => {
 
  const location = useLocation<TLocationState>();
  const background = location.state && location.state.background;

  return (
      <div>
        <Switch location = { background || location }>
          <Route path='/' exact={true}>
            <ConstructorPage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginPage />
          </Route>
          <Route path='/register' exact={true}>
            <RegisterPage />
          </Route>
          <Route path='/forgot-password'  exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path='/reset-password'  exact={true}>
            <ResetPasswordPage />
          </Route>
          <ProtectedRoute path='/profile'  exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/ingredients/:ingredientId">
            <IngredientPage />
          </Route>
          <Route path='/feed' exact={true}>
            <FeedPage />
          </Route>
          <Route path='/profile/orders'  exact={true}>
            <OrdersPage />
          </Route>
          <Route path="/feed/:id">
            <OrderInformationPage />
          </Route>
          <Route path="/profile/orders/:id">
            <OrderInformationPage />
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
          {
          background && 
          <Route path="/feed/:id">
            <ModalOrderInformation>
              <OrderInformation />
            </ModalOrderInformation>
          </Route>
          }
          {
          background && 
          <Route path="/profile/orders/:id">
            <ModalOrderInformation>
              <OrderInformation />
            </ModalOrderInformation>
          </Route>
          }
      </div>
   );
}
export default AppConstructor;
