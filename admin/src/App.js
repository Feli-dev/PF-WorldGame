import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import NoFound from "./pages/NoFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatePassword";
import AddUser from "./pages/AddUser";

// Layout
import DashboardLayout from "./components/Layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
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
