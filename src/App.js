import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConstructorPage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, IngredientPage, NotFound404 } from './pages';
import { ProtectedRoute } from './components/protected-route.js';

import AppHeader from './components/app-header/app-header.js';
const App = () => {
  return (
      <Router>
       <AppHeader />
        <Switch>
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
          <Route path={'/ingredients/:ingredientId'} exact={true}>
            <IngredientPage />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
   );
}
export default App;
