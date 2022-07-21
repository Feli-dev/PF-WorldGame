import React from "react";
import { Route } from "react-router-dom";

// Components
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const DashboardLayout = (props) => {
  return (
    <section className="antialiased bg-gray-200">
      <div className="h-screen flex ">
        <SideBar />

        <div className="flex-1 flex-col relative z-0 overflow-y-auto">
          <NavBar />

          <Route exact path={props.path} component={props.component} />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
