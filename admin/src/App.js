import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

// Pages
import NoFound from "./pages/NoFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatePassword";
import AddUser from "./pages/AddUser";
import NewPassword from "./pages/NewPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Users from "./pages/Users";
import Games from "./pages/Games";
import Payment from "./pages/Payments";
import Reviews from "./pages/Reviews";

// Layout
import DashboardLayout from "./components/Layout/DashboardLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import EntrepriseLayout from "./components/Layout/EnterpriseLayout";

// Actions
import { authenticateAction } from "./redux/auth/authActions";
import EditUser from "./pages/EditUser";
import CommunityLayout from "./components/Layout/CommunityLayout";

function App() {
  const dispatch = useDispatch();

  const navigate = useHistory();

  useEffect(() => {
    const redirect = dispatch(authenticateAction());

    if (redirect === "redirect") {
      navigate.push("/");
    }
  }, []); //eslint-disable-line

  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout exact path="/" component={Login} />
        <AuthLayout exact path="/forgot-password" component={ForgotPassword} />
        <AuthLayout exact path="/new-password/:id" component={NewPassword} />
        <DashboardLayout path="/dashboard" component={Dashboard} />
        <DashboardLayout path="/profile" component={Profile} />
        <CommunityLayout path="/users" component={Users} />
        <CommunityLayout path="/games" component={Games} />
        <EntrepriseLayout path="/pays" component={Payment} />
        <CommunityLayout path="/reviews" component={Reviews} />
        <DashboardLayout path="/update-password" component={UpdatePassword} />
        <CommunityLayout path="/add-user" component={AddUser} />
        <CommunityLayout path="/edit-user/:id" component={EditUser} />
        <Route exact path="/*" component={NoFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
