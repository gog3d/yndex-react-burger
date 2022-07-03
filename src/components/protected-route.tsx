import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useLocation,
} from "react-router-dom";
import { RootState } from '../redux/action-types';


const ProtectedRoute: React.FC<{ children:React.ReactNode, rest: any}> = (props) => {
  const { children, rest } = props;
  const {
    authFailed,
  } = useSelector((store: RootState) => store.auth);
  
  const location = useLocation();

  return (
    <Route {...rest} render={
      ({ location }) =>
        authFailed ? (
              <Redirect to={{
                pathname: '/login',
                state: { from: location }
              }}/>
        ) : (
              children
            )
      }
    />
  );

}

export default ProtectedRoute;