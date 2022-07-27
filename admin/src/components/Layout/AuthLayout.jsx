import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Spinner from "../Spinner";

const AuthLayout = (props) => {
  let { profile, cargandoAuth } = useSelector((state) => state.authReducer);

  if (cargandoAuth)
    return (
      <div className="main-loading">
        <Spinner />
      </div>
    );

  return (
    <>
      {profile?.authorization ? (
        profile?.authorization !== "User" && <Redirect to="/dashboard" />
      ) : (
        <Route exact path={props.path} component={props.component} />
      )}
    </>
  );
};

export default AuthLayout;
