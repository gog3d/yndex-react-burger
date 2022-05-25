import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


const ProtectedRoute = (props) => {
  const { children, rest, needAuth } = props;
  const {
    auth,
    authRequest,
    authFailed,
    user,
  } = useSelector(store => store.auth);
  
  const location = useLocation();

  if(authFailed && needAuth) {
    return (
      <Route {...rest}>
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
      </Route>
    )
  }

  if(!authFailed && !needAuth) {
    return (
      <Route {...rest}>
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      </Route>
    )
  }



  return (
    <Route
      {...rest}
      render={() => children }
    />
  );
}

export default ProtectedRoute;