import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
  useLocation,
} from "react-router-dom";
import { useAppSelector } from '../redux/hooks';


const ProtectedRoute: React.FC<{ children:React.ReactNode, rest: any}> = (props) => {
  const { children, rest } = props;
  const {
    authFailed,
  } = useAppSelector((store) => store.auth);
  
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