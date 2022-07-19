//import styles from './app.module.css';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getIngredients } from '../../redux/actions/ingredients';
import { getAuth } from '../../redux/actions/auth';

import  { WS_CONNECTION_START } from '../../redux/action-types';

import AppHeader from '../app-header/app-header';
import AppConstructor from '../app-constructor/app-constructor';

import { AppDispatch, AppThunk } from '../../redux/action-types';

import { wsConnectionStart } from '../../redux/actions/wsAction';

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  useEffect(() => {
//    dispatch({ type: wsConnectionStart, payload: ':3001' });
    dispatch({ type: wsConnectionStart, payload: '/all' });
  }, [dispatch]);

  return (
      <Router>
       <AppHeader />
       <AppConstructor />
      </Router>
   );
}
export default App;