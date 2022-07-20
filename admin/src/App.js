import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoFound from "./pages/404/NoFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/*" component={NoFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
