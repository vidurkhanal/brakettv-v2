import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route>
          {/* NEED TO CHANGE LATER ON... */}
          <h1 style={{ color: "white" }}>Path Doesn't Exist.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
