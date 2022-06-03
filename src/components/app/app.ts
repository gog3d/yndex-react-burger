import styles from './app.module.css';
import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { getAuth, } from '../../services/actions/auth';
import AppHeader from '../app-header/app-header';
import AppConstructor from '../app-constructor/app-constructor';

import { Link, useHistory, Redirect } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();

 const {
    auth,
    authRequest,
    authFailed,
  } = useSelector(store => store.auth);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, []);


  return (
      <Router>
       <AppHeader />
       <AppConstructor />
      </Router>
   );
}
export default App;