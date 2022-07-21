import React from "react";
import { Route } from "react-router-dom";

// Components
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const DashboardLayout = (props) => {
  return (
    <body class="antialiased bg-gray-200">
      <div class="h-screen flex ">
        <SideBar />

        <div class="flex-1 flex-col relative z-0 overflow-y-auto">
          <NavBar />

          <Route exact path={props.path} component={props.component} />
        </div>
      </div>
    </body>
  );
};

export default DashboardLayout;
