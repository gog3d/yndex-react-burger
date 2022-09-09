import { Redirect, Route, RouteProps } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = (props: RouteProps) => {
  const { children, ...rest } = props;
  const { authFailed } = useAppSelector((store) => store.auth);

  const location = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
        authFailed ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default ProtectedRoute;
