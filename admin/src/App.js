import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import NoFound from "./pages/NoFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatePassword";
import AddUser from "./pages/AddUser";
import NewPassword from "./pages/NewPassword";
import ForgotPassword from "./pages/ForgotPassword";

// Layout
import DashboardLayout from "./components/Layout/DashboardLayout";
import AuthLayout from "./components/Layout/AuthLayout";

// Actions
import { authenticateAction } from "./redux/auth/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateAction());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout exact path="/" component={Login} />
        <AuthLayout exact path="/forgot-password" component={ForgotPassword} />
        <AuthLayout exact path="/new-password/:token" component={NewPassword} />
        <DashboardLayout path="/dashboard" component={Dashboard} />
        <DashboardLayout path="/profile" component={Profile} />
        <DashboardLayout path="/update-password" component={UpdatePassword} />
        <DashboardLayout path="/add-user" component={AddUser} />
        <Route exact path="/*" component={NoFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
