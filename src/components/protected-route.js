import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function ProtectedRoute({ children, ...rest }) {

  const {
    login,
  } = useSelector(store => store.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        login.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}