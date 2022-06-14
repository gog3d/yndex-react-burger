import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import { IngredientType, StateType } from '../services/types/data';

interface ProtectedRouteProps extends  RouteComponentProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
//const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { children, ...rest } = props;
  const {
    authFailed,
  } = useSelector((store: StateType) => store.auth);
  
  const location = useLocation<Location>();

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