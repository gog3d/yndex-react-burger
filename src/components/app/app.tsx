//import styles from './app.module.css';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getIngredients } from '../../redux/actions/ingredients';
import { getAuth } from '../../redux/actions/auth';

import AppHeader from '../app-header/app-header';
import AppConstructor from '../app-constructor/app-constructor';

import { wsConnectionStart } from '../../redux/actions/wsAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const App = () => {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  useEffect(() => {
   //dispatch({ type: wsConnectionStart, payload: ':3001' });
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