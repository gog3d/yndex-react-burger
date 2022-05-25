import styles from './app.module.css';
import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route.js';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients.js';
import { getAuth, } from '../../services/actions/auth.js';
import AppHeader from '../app-header/app-header.js';
import AppConstructor from '../app-constructor/app-constructor.js';

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
//    dispatch(getAuth());
  }, [dispatch]);

  useEffect(() => {
//    dispatch(getIngredients());
    dispatch(getAuth());
  }, []);


  useEffect(() => {
    console.dir({
      auth,
      authRequest,
      authFailed,
    });
  },[
    auth,
    authRequest,
    authFailed,
  ]);
  
  return (
      <Router>
       <AppHeader />
       <AppConstructor />
      </Router>
   );
}
export default App;