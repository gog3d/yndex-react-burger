import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { getAuth, } from '../../services/actions/auth';
import AppHeader from '../app-header/app-header';
import AppConstructor from '../app-constructor/app-constructor';
import { StateType }  from '../../services/types/data';


const App = () => {
  const dispatch = useDispatch();

 const {
    auth,
    authRequest,
    authFailed,
  } = useSelector((store: StateType) => store.auth);

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