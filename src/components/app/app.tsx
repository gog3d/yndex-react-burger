//import styles from './app.module.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getIngredients } from '../../redux/actions/ingredients';
import { getAuth } from '../../redux/actions/auth';

import AppHeader from '../app-header/app-header';
import AppConstructor from '../app-constructor/app-constructor';

import { useAppDispatch } from '../../redux/hooks';

const App: React.FC = () => {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
      <Router>
       <AppHeader />
       <AppConstructor />
      </Router>
   );
}
export default App;