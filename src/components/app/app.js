import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route.js';
import { useSelector, useDispatch } from 'react-redux';

import { getIngredients, REFRESH_ORDERDETAILS_ITEMS, } from '../../services/actions/ingredients.js';

import AppHeader from '../app-header/app-header.js';
import AppConstructor from '../app-constructor/app-constructor.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
      <Router>
       <AppHeader />
       <AppConstructor />
      </Router>
   );
}
export default App;