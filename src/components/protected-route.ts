import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


const ProtectedRoute = (props) => {
  const { children, rest } = props;
  const {
    authFailed,
  } = useSelector(store => store.auth);
  
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