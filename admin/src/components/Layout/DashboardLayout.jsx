import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

// Components
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Spinner from "../Spinner";

const DashboardLayout = (props) => {
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
        profile?.authorization !== "User" && (
          <section className="antialiased bg-gray-200">
            <div className="h-screen flex ">
              <SideBar />

              <div className="flex-1 flex-col relative z-0 overflow-y-auto">
                <NavBar />

                <Route exact path={props.path} component={props.component} />
              </div>
            </div>
          </section>
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default DashboardLayout;
